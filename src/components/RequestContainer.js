import React from 'react'
import defaultProfile from '../assets/profileIcon.png';
import './Home/containers.css';

const RequestContainer = (data) => {

    console.log(data.props);
    
    const name = data.props.from;
    const course = data.props.StudentContactInfo;
    const message = data.props.StudentContactInfo;
    const profilePic = defaultProfile;

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
                <button id = "tutor-accept"> Accept </button>
                <button id = "tutor-decline"> Decline </button>
            </div>
        </div>
    )
}

export default RequestContainer