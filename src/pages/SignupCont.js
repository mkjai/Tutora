import React, { useEffect, useState, useRef } from 'react'
import '../components/Authenication/signupForm.css';
import Avatar from 'react-avatar-edit';
import profileIcon from '../assets/profileIcon.png';
import Popup from '../components/Popup';



const SignupCont = () => {

    const [buttonPopup, setButtonPopup, val, setVal] = useState(false);
    const [imgCrop, setImgCrop] = useState(false);

    const [characterLimit] = useState(50);
    const [inputText, setInputText] = useState("");

    const handleChange = event => {
        setInputText(event.target.value);
    };

    const onCrop = (view) => {
        setImgCrop(view)
    }

    const onClose = () => {
        setImgCrop(null)
    }

    return (
        <div className = "sign-up-cont-container" >
            <div className = "sign-up-cont-inner">
                <p class = "sign-up-cont-label"> Create an account </p>

                <div className = "add-profile-container">
                    <p> Add a profile picture (Optional) </p>
                    <img src = {profileIcon} alt = ''/>
                    <button onClick = {() => setButtonPopup(true)}> Upload </button>

                </div>

                <div className = "sign-up-bio-container">
                    <p> Bio </p>
                    <textarea value = {inputText} onChange = {handleChange} maxLength = {50} placeholder = "Type your bio here"></textarea>
                    <h2> {inputText.length}/{characterLimit} word </h2>
                </div>

                <button className = "sign-up-cont-inner-create-btn"> Create an account </button>
                <button className = "sign-up-cont-inner-back-btn"> Back </button>

                <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                    <h1 class = "sign-up-cont-popup-label"> Choose a profile picture </h1>
                    <Avatar className = "avatar" width = {250} height = {300} textSizeRatio = {5} onClose = {onCrop} onCrop = {onClose}  />
                </Popup>

            </div>


        </div>

    );
}

export default SignupCont