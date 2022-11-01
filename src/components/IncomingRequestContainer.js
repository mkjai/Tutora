import React, { useState } from 'react'
import defaultProfile from '../assets/profileIcon.png';
import AcceptingPopup from './AcceptingPopup';
import './Home/containers.css';

const IncomingRequestContainer = (data) => {

    console.log(data.props);
    
    const name = data.props.fromName;
    const course = data.props.lessonCourse;
    const message = data.props.messageToTutor;
    const uid = data.props.from;
    const profilePic = defaultProfile;

    const [popup, isPopup] = useState(false);
    

    console.log(name);
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
                <button id = "tutor-accept" onClick = {() => isPopup(true)}> Accept </button>
                <button id = "tutor-decline"> Decline </button>
            </div>

            <AcceptingPopup trigger = {popup} setTrigger = {isPopup} studentUid = {uid}/>
        </div>
    )
}

export default IncomingRequestContainer