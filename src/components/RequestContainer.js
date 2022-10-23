import React from 'react'
import defaultProfile from '../assets/profileIcon.png';
import './Home/containers.css';

const RequestContainer = () => {
    
    const profilePic = defaultProfile;


    return (
        <div className = "tutor-requests">
            <div className = "tutor-requests-profile-name">
                <img  src = {profilePic} alt = ''/>
                <p> Name </p>
            </div>

            <div className = "tutor-requests-subject">
                <label> Subjects</label>
                <p> Test</p>
            </div>

            <div className = "tutor-requests-msg">
                <label> Message </label>
                <p> Test </p>
            </div>

            <div className = "tutor-requests-buttons">
                <button id = "tutor-accept"> Accept </button>
                <button id = "tutor-decline"> Decline </button>
            </div>
        </div>
    )
}

export default RequestContainer