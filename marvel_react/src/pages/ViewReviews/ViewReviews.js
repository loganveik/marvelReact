import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import './ViewReviews.css';
import { db } from '../../firebase';
import { onSnapshot, collection } from '@firebase/firestore';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);

    // console.log(reviews);
    useEffect(
        () =>
            onSnapshot(collection(db, "reviews"), ((snapshot) =>
                setReviews(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                // console.log(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            )), []);

    return (
        <>
            <Nav />
            <div className="view">
                <div className="view_container">
                    {reviews.length === 0 ?
                        <p>Write a review to view it here!</p>
                        :
                        reviews.map(review => (
                            <div className="reviewCard" key={review.id}>
                                <img className="reviewImg" src={review.imgURL} alt={review.character} />
                                <div className="reviewText">
                                    <h1>{review.character}</h1>
                                    <p>{review.review}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}
export default ReviewsPage;