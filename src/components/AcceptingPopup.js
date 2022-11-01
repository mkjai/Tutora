import {React, useState} from 'react'
import Select from 'react-select';
import ReactDom from 'react-dom'
import makeAnimated from "react-select/animated";
import './Home/popup.css'
import { acceptIncomingRequest, createOutgoingRequest, getOutgoingRequests } from '../firebase-functions/bookingFunctions';
import { useParams } from 'react-router-dom';
var options = require("../assets/COURSES.json");

const STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '3rem',
    borderRadius: '5px',
    zIndex: 1000,

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '30rem'

}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    zIndex: 1000
}

const CONF_BUTTON_STYLES = {
    display: 'flex',
    height: '40px',
    width: '50%',
    padding: '0.5rem',
    background: '#00867D',
    color: '#fff',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    borderRadius: '5px',
    border: 'none',
    marginBottom: '1rem',
    marginTop: '2rem',
    
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1rem',
    fontSize: '1.5rem'
}

const CANCEL_BUTTON_STYLES = {
    display: 'flex',
    height: '40px',
    width: '50%',
    padding: '0.5rem',
    background: '#f2f2f2',
    color: '#00867D',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    borderRadius: '5px',
    border: 'none',
    
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1rem',
    fontSize: '1.5rem'
}

function AcceptingPopup(props) {

    console.log(props.studentUid)

    const [bookingText, setBookingText] = useState("");

    const [characterLimit] = useState(150);

    const handleBook = event => {
        setBookingText(event.target.value);
    };

    const handleConfirm = () => {
        acceptIncomingRequest(props.studentUid, bookingText)
        props.setTrigger(false);
    }


  return (
    props.trigger) ? (

    <div style = {OVERLAY_STYLES}>
        <div className = "booking-review-popup-inner" style = {STYLES}>

            <div className = "booking-review-text-container">
                <p id = "booking-review-select-label"> Message to your student </p>
                <textarea value = {bookingText} onChange = {handleBook} maxLength = {150} placeholder = "Type your message here"></textarea>
                <h2> {bookingText.length}/{characterLimit} Characters </h2>
            </div>

            <button type = 'submit' className = "booking-review-popup-button" style = {CONF_BUTTON_STYLES} onClick = {handleConfirm}> Confirm </button>
            <button className = "booking-review-popup-button" style = {CANCEL_BUTTON_STYLES} onClick = {() => props.setTrigger(false)}> Cancel </button>

        </div>
    </div>
  ) : "";
}

export default AcceptingPopup