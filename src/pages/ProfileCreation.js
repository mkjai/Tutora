import React, { useEffect, useState, useRef } from 'react'
import '../components/Authenication/signupForm.css';
import Avatar from 'react-avatar-edit';
import profileIcon from '../assets/profileIcon.png';
import Popup from '../components/Popup';
import AvatarPopup from '../components/AvatarPopup';
import Select from 'react-select';
import makeAnimated from "react-select/animated";
import {Link} from 'react-router-dom'
import validator from 'validator'
var data = require("../assets/SCHOOLS.json");
var options = require("../assets/COURSES.json");


const ProfileCreation = ({prevPage, handleChange, values}) => {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [imgCrop, setImgCrop] = useState(false);
    const [isTrue, setIsTrue] = useState(false);

    const [characterLimit] = useState(150);
    const [inputText, setInputText] = useState("");

    const [value, setValue] = useState("");

    const [isValid, setIsValid] = useState(false);

    const animatedComponents = makeAnimated();
    const [selectedOptions, setSelectedOptions] = useState([]);

    const [selectedOption, setSelectedOption] = useState([]);


    useEffect(() => {
        setIsValid(selectedOption ? true : false);
    }, [selectedOption]);

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    };

    const handleText = event => {
        setInputText(event.target.value);
    };

    const onCrop = (view) => {
        setImgCrop(view)
    }

    const onClose = () => {
        setImgCrop(null)
    }

    const handleClick = () => {
        setIsTrue(true);
    }
    
    const [loading, setLoading] = useState(false);

    const submitHandler = (e) => {
            e.preventDefault();

            // checking if value of first name and last name is empty show error else take to next step
            if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
            setLoading(true);
            } else {
                console.log('hi');
            }
        };


    const customStyle = {
        control: (base, state) => ({
            ...base,
            backgroundColor: "#F2F2F2",
            borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
            border: state.isFocused ? "0.2rem solid #00867D" : "1px solid #D3D3D3",
            "&:hover": {
                borderColor: state.isFocused ? "#00867D" : "#00867D",
            },
            boxShadow: state.isFocused ? null : null,
            width: 300,
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
        option: (based,state) => ({
            ...based,
            color: '#999',
            background: "#F2F2F2",
            "&:hover": {
                backgroundColor: state.isFocused ? "rgba(0,134,125, 0.4)" : null,
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

    const avatarLabelStyle = {
        fontSize: "1.5rem", fontWeight: 700
    }

    return (
        <div className = "sign-up-cont-container" onSubmit = {submitHandler}>
            <form className = "sign-up-cont-inner">
                <p class = "sign-up-cont-label"> Create your profile </p>

                <div className = "sign-up-selection">
                    <Select
                        required
                        components = {animatedComponents}
                        options = {data}
                        onChange = {(item) => setSelectedOptions(item)}
                        isClearable = {true}
                        isSearchable = {true}
                        isDisabled = {false}
                        isLoading = {false}
                        closeMenuOnSelect = {false}
                        styles = {customStyle}
                        placeholder = {<div className = "sign-up-select"> <label>Choose your school</label> </div>}
                    >
                    </Select>
                </div>

                <div className = "sign-up-selection">
                    <Select isMulti
                        components = {animatedComponents}
                        options = {options}
                        onChange = {(item) => setSelectedOption(item)}
                        isClearable = {true}
                        isSearchable = {true}
                        isDisabled = {false}
                        isLoading = {false}
                        closeMenuOnSelect = {false}
                        styles = {customStyle}
                        placeholder = {<div className = "sign-up-select"> <label>Choose your courses</label> </div>}
                    >
                    </Select>
                </div>

                <div className = "add-profile-container">
                    <p> Add a profile picture (Optional) </p>
                    <img src = {profileIcon} alt = ''/>
                    <button onClick = {() => setButtonPopup(true)}> Upload </button>

                </div>

                <div className = "sign-up-text-container">
                    <p> Bio (Optional) </p>
                    <textarea value = {inputText} onChange = {handleText} maxLength = {150} placeholder = "Type your bio here"></textarea>
                    <h2> {inputText.length}/{characterLimit} Characters </h2>
                </div>

                <div className = "sign-up-text-container">
                    <p> Contact Info (Optional) </p>
                    <textarea value = {inputText} onChange = {handleText} maxLength = {150} placeholder = "Type your contact info here"></textarea>
                    <h2> {inputText.length}/{characterLimit} Characters </h2>
                </div>

                <div className = "sign-up-text-container">
                    <p> Availability (Optional) </p>
                    <textarea value = {inputText} onChange = {handleText} maxLength = {150} placeholder = "Type your contact info here"></textarea>
                    <h2> {inputText.length}/{characterLimit} Characters </h2>
                </div>

                <button className = "sign-up-cont-inner-create-btn" type = "submit"> Done </button>
                <button className = "sign-up-cont-inner-back-btn" onClick = {prevPage}> Back </button>
                </form>

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

// function formatPhoneNumber(value) {
//     if(!value) return value;
//     const phoneNumber = value.replace(/[^\d]/g, '');
//     const phoneNumberLength = phoneNumber.length;
//     if (phoneNumberLength < 4) return phoneNumber;
//     if (phoneNumber.length < 7) {
//         return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
//     }
//     return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`;
// }

export default ProfileCreation