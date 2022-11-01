import React from 'react'
import defaultProfile from '../assets/profileIcon.png';
import { cancelOutgoingRequest } from '../firebase-functions/bookingFunctions';
import './Home/containers.css';

const OutgoingRequestContainer = (data) => {

    // console.log(data.props);
    
    const name = data.props.toName;
    const course = data.props.lessonCourse;
    const message = data.props.messageToTutor;
    const profilePic = defaultProfile;
    const requestId = data.props.requestId;
    // console.log(requestId);
    
    function handleCancelClick() {
        cancelOutgoingRequest(requestId);
    }
    // console.log(name);
    return (
        <div className = "tutor-requests">
            <div className = "tutor-requests-profile-name">
                <img  src = {profilePic} alt = ''/>
                <p> {name} </p>
            </div>

            <div className = "tutor-requests-subject">
                <label> Subjects</label>
                <p> {course} </p>
            </div>

            <div className = "tutor-requests-msg">
                <label> Message </label>
                <p> {message} </p>
            </div>

            <div className = "tutor-requests-buttons">
                <button id = "tutor-decline" onClick={handleCancelClick}> Cancel </button>
            </div>
        </div>
    )
}

export default OutgoingRequestContainer