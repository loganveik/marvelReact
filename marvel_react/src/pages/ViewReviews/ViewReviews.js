import './ViewReviews.css';
import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import { db } from '../../firebase';
import { onSnapshot, collection, deleteDoc, doc } from '@firebase/firestore';
import BackBtn from '../../components/BackBtn/BackBtn';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>
        onSnapshot(collection(db, "reviews"), ((snapshot) =>
            setReviews(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        )), []
    );

    const handleDelete = async (id) => {
        const docRef = doc(db, "reviews", id);
        await deleteDoc(docRef);
    };

    return (
        <>
            <Nav />
            <div className="view">
                <BackBtn />
                <div className="view_container">
                    {reviews.length === 0 ?
                        <p id="writeP">Write a review to view it here!</p>
                        :
                        reviews.map(review => (
                            <div className="reviewCard" key={review.id}>
                                <img className="reviewImg" src={review.imgURL} alt={review.character} />
                                <div className="reviewText">
                                    <h1>{review.character}</h1>
                                    <p>{review.review}</p>
                                </div>
                                <button onClick={() => handleDelete(review.id)} className="deleteBtn"><i class="fas fa-trash"></i></button>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}
export default ReviewsPage;