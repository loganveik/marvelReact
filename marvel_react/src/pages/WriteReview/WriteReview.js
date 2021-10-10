import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import './WriteReview.css';

const WritePage = () => {
    // const history = useHistory();
    const [character, setCharacter] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Nav />
            <div className="write">
                <form onSubmit={handleSubmit}>
                    <h1>Write a review for your favorite Marvel character</h1>
                    <div className="input-group">
                        <label htmlFor="character">Character</label>
                        <input onChange={(e) => setCharacter(e.target.value)} value={character} name="character" className="character" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="review">Review</label>
                        <textarea onChange={(e) => setReview(e.target.value)} value={review} name="review" className="review" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </>
    )
}
export default WritePage;