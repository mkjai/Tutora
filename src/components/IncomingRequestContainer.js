import React, { useState } from 'react'
import defaultProfile from '../assets/profileIcon.png';
import { acceptIncomingRequest, rejectIncomingRequest } from '../firebase-functions/bookingFunctions';
import './Home/containers.css';

const IncomingRequestContainer = (data) => {

    console.log(data.props);
    
    const name = data.props.fromName;
    const course = data.props.lessonCourse;
    const message = data.props.messageToTutor;
    const uid = data.props.from;
    const requestId = data.props.requestId;
    const profilePic = defaultProfile;

    function handleCofirmClick() {
        acceptIncomingRequest(requestId)
        // console.log('confirm button clicked')
    }

    function handleDeclineClick() {
        rejectIncomingRequest(requestId)
    }

    console.log(requestId);
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
                <button id = "tutor-accept" onClick={handleCofirmClick}> Accept </button>
                <button id = "tutor-decline" onClick={handleDeclineClick}> Decline </button>
            </div>

        </div>
    )
}

export default IncomingRequestContainer