import React from 'react'
import defaultProfile from '../assets/profileIcon.png';
import './Home/containers.css';
import {FaStar} from 'react-icons/fa'

const ReviewContainer = (data) => {

    // Only for testing
    {/*
    Make functions for me to:
        access the number of review, rating, profile picture, first and last name, the subjects they are teaching"

    */}
    
    const profilePic = defaultProfile;

    const name = data.data.name;
    const rating = data.data.reviews.star;
    const comment = data.data.reviews.review;
    console.log(data);


    return (
        <div className = "tutor-container">
            <div className = "container-top">
                <div className = "profile-name">
                    <img src = {profilePic} alt = '' />
                    <p> {name} </p>
                </div>
                <div className = "tutor-container-rating">
                    <p> <FaStar size = {20} /> {rating} </p>
                </div>
            </div>


            <div className = "tutor-container-subject">
                <label>Comment</label> 
                <p> {comment} </p>
            </div>
        </div>
    )
}

export default ReviewContainer