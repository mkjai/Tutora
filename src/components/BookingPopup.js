import {React, useState} from 'react'
import Select from 'react-select';
import ReactDom from 'react-dom'
import makeAnimated from "react-select/animated";
import './Home/popup.css'
import { createOutgoingRequest, getOutgoingRequests } from '../firebase-functions/bookingFunctions';
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

    const customStyle = {
        control: (base, state) => ({
            ...base,
            backgroundColor: "#F2F2F2",
            borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
            border: state.isFocused ? "0.2rem solid #00867D" : "none",
            "&:hover": {
                borderColor: state.isFocused ? "#00867D" : "#00867D",
            },
            boxShadow: state.isFocused ? null : null,
            width: 240,
        }),
            menu: (base, state) => ({
            ...base,
            borderRadius: 0,
            marginTop: 0,
            backgroundColor: state.isFocused ? "rgba(0,134,125, 0.4)" : "#F2F2F2"
            }),
            menuList: (base,state) => ({
            ...base,
            padding: 0,
            fontSize: "3rem",
            fontWeight: "700",
            backgroundColor: state.isFocused ? "rgba(0,134,125, 0.4)" : "#F2F2F2"
            }),
        groupHeading: based => ({
            ...based,
            color: '#00867D',
            fontWeight: 700,
            font: 'Nunito'
        }),
        input: based => ({
            ...based,
            color: "#999",
            fontSize: "1.5rem",
            fontWeight: 700
        }),
        multiValueLabel: based => ({
            ...based,
            color: "#999",
            fontSize: "1.5rem",
            fontWeight: 700
        }),
        singleValue: (based,state) => ({
            ...based,
            color: '#00867D',
            fontWeight: 700,
            font: 'Nunito',
            fontSize: '1.5rem',
            backgroundColor: state.isFocused ? "rgba(0,134,125, 0.4)" : "#F2F2F2"
        }),
        menuPortal: (based,state) => ({
            ...based,
            color: '#999',
            fontWeight: 700,
            font: 'Nunito',
            fontSize: '1.5rem',
            background: "F2F2F2",
            backgroundColor: state.isFocused ? "rgba(0,134,125, 0.4)" : "#F2F2F2"
        }),
        option: (based,state) => ({
            ...based,
            color: '#999',
            fontWeight: 700,
            font: 'Nunito',
            fontSize: '1.5rem',
            backgroundColor: state.isSelected ?  "rgba(0,134,125, 0.4)" : "F2F2F2",
            "&:hover": {
                background: "rgba(0,134,125, 0.4)",
                cursor: "pointer"
            },
        })
    }


function BookingPopup(props) {

    const params = useParams();

    const [selectedOptions, setSelectedOptions] = useState([]);
    const animatedComponents = makeAnimated();


    const [bookingText, setBookingText] = useState("");

    const [characterLimit] = useState(150);

    const handleBook = event => {
        setBookingText(event.target.value);
    };

    const handleSubmit = () => {
        createOutgoingRequest(params.id, bookingText, selectedOptions.label);
        props.setTrigger(false);
    }
    console.log(params.id);
    console.log(getOutgoingRequests());


  return (
    props.trigger) ? (

    <div style = {OVERLAY_STYLES}>
        <div clasName = "booking-review-popup-inner" style = {STYLES}>

            <div className = "booking-review-subject-selection">
                <p id = "booking-review-select-label"> Choose a course </p>
                <Select multi
                    components = {animatedComponents}
                    options = {options}
                    onChange = {(item) => setSelectedOptions(item)}
                    isClearable = {true}
                    isSearchable = {true}
                    isDisabled = {false}
                    isLoading = {false}
                    closeMenuOnSelect = {false}
                    styles = {customStyle}
                    placeholder = {<div className = "course-select"> <label>Choose a course </label> </div>}
                >
                </Select>
            </div>

            <div className = "booking-review-text-container">
                <p id = "booking-review-select-label"> Message to your tutor </p>
                <textarea value = {bookingText} onChange = {handleBook} maxLength = {150} placeholder = "Type your message here"></textarea>
                <h2> {bookingText.length}/{characterLimit} Characters </h2>
            </div>

            <button type = 'submit' className = "booking-review-popup-button" style = {CONF_BUTTON_STYLES} onClick = {handleSubmit}> Confirm </button>
            <button className = "booking-review-popup-button" style = {CANCEL_BUTTON_STYLES} onClick = {() => props.setTrigger(false)}> Cancel </button>

        </div>
    </div>
  ) : "";
}

export default BookingPopup