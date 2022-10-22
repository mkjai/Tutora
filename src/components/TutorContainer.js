import React from 'react'
import defaultProfile from '../assets/profileIcon.png';
import './Home/tutorContainer.css';
import {FaStar} from 'react-icons/fa'

const TutorContainer = () => {

    // Only for testing
    {/*
    Make functions for me to:
        access the number of review, rating, profile picture, first and last name, the subjects they are teaching"

    */}
    
    const profilePic = defaultProfile;


    return (
        <div className = "tutor-container">
            <div className = "container-top">
                <div className = "profile-name">
                    <img src = {profilePic} alt = '' />
                    <p> Name </p>
                </div>
                <button className = "tutor-container-btn"> Check profile </button>
            </div>

            <div className = "tutor-container-rr">
                <div className = "tutor-container-rating">
                    <p> <FaStar size = {20} /> 5.0 </p>
                </div>

                <div className = "tutor-container-reviews">
                    <p> 10 Reviews</p>
                </div>
            </div>

            <div className = "tutor-container-subject">
                <label>Subjects:</label> 
                <p>Test </p>
            </div>
        </div>
    )
}

export default TutorContainer