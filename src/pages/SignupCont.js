import React, { useEffect, useState, useRef } from 'react'
import '../components/Authenication/signupForm.css';
import Avatar from 'react-avatar-edit';
import profileIcon from '../assets/profileIcon.png';
import Popup from '../components/Popup';
var data = require("../assets/SCHOOLS.json");


const SignupCont = () => {

    const [buttonPopup, setButtonPopup, val, setVal] = useState(false);
    const [imgCrop, setImgCrop] = useState(false);

    const [characterLimit] = useState(125);
    const [inputText, setInputText] = useState("");

    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    };

    const handleChange = event => {
        setInputText(event.target.value);
    };

    const [inputPhone, setInputPhone] = useState('');
    const handlePhone = e => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setInputPhone(formattedPhoneNumber);
    }

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

                
                <div className = "cont-input-container">
                    <input type = "text" placeholder = "Last name"/>
                    <input type = "text" placeholder = "First name"/>
                    <input type = "text" placeholder = "Phone number" 
                            onChange = {e => handlePhone(e)} value = {inputPhone}
                    />
                </div>

                <div className = "school-search">
                    <input type="text" placeholder = "Type your school here" value={value} onChange={onChange} />
                    
                    <div className="dropdown">
                            {data
                                .filter((item) => {
                                const searchTerm = value.toLowerCase();
                                const name = item.school_name.toLowerCase();

                                return (
                                    searchTerm &&
                                    name.startsWith(searchTerm) &&
                                    name !== searchTerm
                                );
                                })
                                .slice(0, 5)
                                .map((item) => (
                                <div
                                    className="dropdown-row"
                                    key={item.school_name}
                                    onClick={() => onSearch(item.school_name)}
                                >
                                    {item.school_name}<br></br>
                                    <p className = "school-address">{item.street}</p>
                                </div>
                                ))}
                    </div>
                </div>

                <div className = "add-profile-container">
                    <p> Add a profile picture (Optional) </p>
                    <img src = {profileIcon} alt = ''/>
                    <button onClick = {() => setButtonPopup(true)}> Upload </button>

                </div>

                <div className = "sign-up-bio-container">
                    <p> Bio </p>
                    <textarea value = {inputText} onChange = {handleChange} maxLength = {125} placeholder = "Type your bio here"></textarea>
                    <h2> {inputText.length}/{characterLimit} Characters </h2>
                </div>

                <button className = "sign-up-cont-inner-create-btn"> Create an account </button>
                <button className = "sign-up-cont-inner-back-btn"> Back </button>
                </div>

                <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                    <h1 class = "sign-up-cont-popup-label"> Choose a profile picture </h1>
                    <Avatar className = "avatar" width = {250} height = {300} textSizeRatio = {5} onClose = {onCrop} onCrop = {onClose}  />
                </Popup>

            </div>


    );
}

function formatPhoneNumber(value) {
    if(!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumber.length < 7) {
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`;
}


export default SignupCont