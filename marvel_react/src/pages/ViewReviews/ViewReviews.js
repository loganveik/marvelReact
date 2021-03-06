import './ViewReviews.css';
import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import { db } from '../../firebase';
import { onSnapshot, collection, deleteDoc, doc, where, getDocs, query } from '@firebase/firestore';
import BackBtn from '../../components/BackBtn/BackBtn';
import { getAuth } from 'firebase/auth';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);

    const auth = getAuth();
    const user = auth.currentUser;

    const getReview = async () => {
        if (user && user.uid) {
            const q = query(collection(db, "reviews"), where("userID", "==", user.uid));
            try {
                const results = await getDocs(q);
                setReviews(results.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            } catch (e) {
                console.log(e)
            }
        }
    }

    const handleDelete = async (id) => {
        const docRef = doc(db, "reviews", id);
        await deleteDoc(docRef);
    };

    useEffect(async () => {
        getReview();
    }, [handleDelete])

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