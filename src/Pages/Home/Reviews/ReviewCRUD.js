import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const ReviewCRUD = () => {
    const { user } = useAuth();
    const [reviewData, setReviewData] = useState([]);
    const [myReview, setMyReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review/${user.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [])

    const reviewRef = useRef();
    const ratingRef = useRef();

    // Handle OnBlur
    const handleReviewPost = () => {
        const review = {};
        const name = user.displayName;
        const email = user.email;
        const rating = ratingRef.current.value;
        const userReview = reviewRef.current.value;

        review.name = name;
        review.email = email;
        review.rating = rating;
        review.userReview = userReview;

        fetch(`http://localhost:5000/review/add`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review added successfully');
                    setReviewData(data);
                }
                else {
                    alert('Something is wrong');
                }
            })
    }
    return (
        <>
            <div className="container my-3">
                <div className="row my-5">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input value={user.displayName} disabled type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                                <input type="text" value={user.email} disabled className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Rating (1 to 5)</label>
                                <input type="number" ref={ratingRef} min="1" max="5" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Write a review</label>
                                <textarea ref={reviewRef} required name="review" cols="30" rows="10" className="form-control" id="exampleFormControlInput1"></textarea>
                            </div>
                        </form>
                        <Button onClick={handleReviewPost} className="btn btn-danger text-white w-100 text-uppercase"><i class="fas fa-location-arrow"></i> Post</Button>
                    </div>
                    <div className="col-md-6 mt-5">
                        <h4>Your Total Reviews: {myReview.length}</h4>
                        <table className="table bordered">
                            <thead>
                                <tr>
                                    <th>Review</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myReview.map(singleReview => <tr
                                        key={singleReview._id}
                                    >
                                        <td>{singleReview.userReview}</td>
                                        <td>{singleReview.rating}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCRUD;