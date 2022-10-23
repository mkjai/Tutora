import React from 'react'
import defaultProfile from '../assets/profileIcon.png';
import './Home/containers.css';

const ScheduleTutorContainer = () => {
    
    const profilePic = defaultProfile;


    return (
        <div className = "tutor-schedule">
            <div className = "tutor-schedule-profile-name">
                <img  src = {profilePic} alt = ''/>
                <p> Name </p>
            </div>

            <div className = "tutor-schedule-subject">
                <label> Subjects</label>
                <p> Test</p>
            </div>

            <div className = "tutor-schedule-msg">
                <label> Message </label>
                <p> Test </p>
            </div>

            <div className = "tutor-schedule-buttons">
                <button id = "tutor-accept"> Complete </button>
                <button id = "tutor-decline"> Cancel </button>
            </div>
        </div>
    )
}

export default ScheduleTutorContainer