import React, {useState, useEffect} from 'react'
import defaultProfile from '../assets/profileIcon.png';
import './Home/containers.css';
import {FaStar} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const TutorContainer = (data) => {
    
    const profilePic = defaultProfile;

    console.log(data);
    const name = data.data.name;
    const rating = data.data.rating;
    const reviews = data.data.review;
    const courses = data.data.courses;
    console.log(name);

    return (
        <div className = "tutor-container">
            <div className = "container-top">
                <div className = "profile-name">
                    <img src = {profilePic} alt = '' />
                    <p style={{color: "black"}}> {name}</p>
                </div>
            </div>

            <div className = "tutor-container-rr">
                <div className = "tutor-container-rating">
                    <p> <FaStar size = {20} /> {rating}</p>
                </div>

                <div className = "tutor-container-reviews">
                    <p> {reviews} Reviews</p>
                </div>
            </div>

            <div className = "tutor-container-subject">
                <label>Subjects:</label> 
                {
                    <p> {courses.join(' - ')} </p>
                }
                
            </div>

            <div className = 'container-bottom'>
            <button className = "tutor-container-btn"
                > Check profile </button>
            </div>
        </div>
    )
}

export default TutorContainer