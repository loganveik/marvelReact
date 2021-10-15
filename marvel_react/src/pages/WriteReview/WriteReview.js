import './WriteReview.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import BackBtn from '../../components/BackBtn/BackBtn';
import axios from 'axios';
import { db } from '../../firebase';
import { addDoc, collection } from '@firebase/firestore';
import { ClipLoader } from 'react-spinners';

const WritePage = () => {
    const history = useHistory();
    const [character, setCharacter] = useState('');
    const [review, setReview] = useState('');
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const result = await axios.get(`https://gateway.marvel.com/v1/public/characters?name=${character}&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9`);
        if (result.data.data.results[0] === undefined) {
            setError(`Sorry, '${character}' doesn't seem to be a marvel character. Try again!`);
        } else {
            const name = result.data.data.results[0].name;
            const img = result.data.data.results[0].thumbnail.path + '.' + result.data.data.results[0].thumbnail.extension;
            const collectionRef = collection(db, "reviews");
            const payLoad = { character: name, review: review, imgURL: img };
            addDoc(collectionRef, payLoad)
                .then(() => history.push("/view"))
                .catch((e) => alert(e.message))
                .finally(() => setLoading(false))
        }
    };

    return (
        <>
            <Nav />
            <div className="write">
                <BackBtn id={"write_back"} />
                <form>
                    <h1>Write A Review For Your Favorite Marvel Character!</h1>
                    <div className="input-group">
                        <label htmlFor="character">Character</label>
                        <input value={character} onChange={(e) => setCharacter(e.target.value)} name="character" className="character" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="review">Review</label>
                        <textarea value={review} onChange={(e) => setReview(e.target.value)} name="review" className="review" required></textarea>
                    </div>
                    <div className="btn">
                        <button onClick={handleSubmit} type="submit">{loading ? <ClipLoader size={20} /> : 'Submit'}</button>
                    </div>
                    <p>{error}</p>
                </form>
            </div>

        </>
    )
}
export default WritePage;