import React, {useState} from 'react'
import defaultProfile from '../assets/profileIcon.png';
import ReviewPopup from './ReviewPopup';
import './Home/containers.css';
import { cancelAppointment } from '../firebase-functions/bookingFunctions';

const ScheduleLearnontainer = (data) => {
    
    const profilePic = defaultProfile;
    // const appointmentId = data.props.appointmentId;
    

    

    const [popup, isPopup] = useState(false);

    function handleCancel() {
        // cancelAppointment(appointmentId)
    }

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

            <div className = "tutor-schedule-buttons">
                <button id = "tutor-accept" onClick = {() => isPopup(true)}> Complete </button>
                <button id = "tutor-decline" onClick={handleCancel}> Cancel </button>
            </div>

            <ReviewPopup trigger = {popup} setTrigger = {isPopup}></ReviewPopup>
        </div>
    )
}

export default ScheduleLearnontainer