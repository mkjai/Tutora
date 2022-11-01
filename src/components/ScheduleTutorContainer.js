import React from 'react'
import defaultProfile from '../assets/profileIcon.png';
import './Home/containers.css';

const ScheduleTutorContainer = (data) => {
    
    const profilePic = defaultProfile;
    const name = data.props.student;
    console.log(data);


    return (
        <div className = "tutor-schedule">
            <div className = "tutor-schedule-profile-name">
                <img  src = {profilePic} alt = ''/>
                <p> {name} </p>
            </div>

            {/* <div className = "tutor-schedule-subject">
                <label> Subjects</label>
                <p> Test</p>
            </div>

            <div className = "tutor-schedule-msg">
                <label> Message </label>
                <p> Test </p>
            </div> */}
        </div>
    )
}

export default ScheduleTutorContainer