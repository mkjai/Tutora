import React, { useEffect, useState, useRef } from 'react'
import '../components/Authenication/signupForm.css';
import Avatar from 'react-avatar-edit';
import profileIcon from '../assets/profileIcon.png';
import Popup from '../components/Popup';
import AvatarPopup from '../components/AvatarPopup';
import Select from 'react-select';
import makeAnimated from "react-select/animated";
var data = require("../assets/SCHOOLS.json");
var options = require("../assets/COURSES.json");


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

    const animatedComponents = makeAnimated();
    const [selectedOptions, setSelectedOptions] = useState([]);
    
    const handleSelect = () => {
        console.log(selectedOptions);
    }

    const customStyle = {
        control: (base, state) => ({
            ...base,
            background: "#F2F2F2",
            borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
            border: state.isFocused ? "0.2rem solid #00867D" : "1px solid #D3D3D3",
            "&:hover": {
                borderColor: state.isFocused ? "#00867D" : "#00867D",
            },
            boxShadow: state.isFocused ? null : null,
            width: 400
        }),
            menu: base => ({
            ...base,
            borderRadius: 0,
            marginTop: 0,
            background: "#F2F2F2"
            }),
            menuList: base => ({
            ...base,
            padding: 0,
            fontSize: "3rem",
            fontWeight: "700"
            }),
        option: based => ({
            ...based,
            color: '#999',
            background: "#F2F2F2",
            "&:hover": {
                background: "rgba(0,134,125, 0.4)",
                cursor: "pointer"
            },
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
        })
    }


    const avatarLabelStyle = {
        fontSize: "1.5rem", fontWeight: 700
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

                <div className = "course-selection">
                    <Select isMulti
                        components = {animatedComponents}
                        options = {options}
                        onChange = {(item) => setSelectedOptions(item)}
                        isClearable = {true}
                        isSearchable = {true}
                        isDisabled = {false}
                        isLoading = {false}
                        closeMenuOnSelect = {false}
                        styles = {customStyle}
                        placeholder = {<div className = "course-select"> <label>Choose your courses</label> </div>}
                    >
                    </Select>
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

                <AvatarPopup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                    <h1 class = "sign-up-cont-popup-label"> Choose a profile picture </h1>
                    <Avatar
                        className = "avatar" width = {250} height = {300} onClose = {onCrop}
                        onCrop = {onClose} labelStyle = {avatarLabelStyle}
                    />
                </AvatarPopup>

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