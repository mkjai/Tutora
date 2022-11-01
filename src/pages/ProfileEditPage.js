import React, { useEffect, useState } from 'react'
import '../components/Authenication/signupForm.css';
import Avatar from 'react-avatar-edit';
import Popup from '../components/Popup';
import AvatarPopup from '../components/AvatarPopup';
import Select from 'react-select';
import makeAnimated from "react-select/animated";
import {Link, Navigate} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
var data = require("../assets/SCHOOLS.json");
var options = require("../assets/COURSES.json");


const ProfileEditPage = () => {

    const [characterLimit] = useState(150);
    const [bioText, setBioText] = useState("");
    const [contactText, setContactText] = useState("");
    const [availabilityText, setAvailabilityText] = useState("");

    const animatedComponents = makeAnimated();

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedSchool, setSelectedSchool] = useState([]);



    const handleBio = event => {
        setBioText(event.target.value);
    };

    const handleContact = event => {
        setContactText(event.target.value);
    };

    const handleAvailability = event => {
        setAvailabilityText(event.target.value);
    };


    // async function submitHandler(e) {

    //     };


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
        <div className = "sign-up-cont-container">
            <form className = "sign-up-cont-inner">
                <p class = "sign-up-cont-label"> Edit profile </p>

                {/* <div className = "add-profile-container">
                    <p> Add a profile picture </p>
                    <img src = {profileIcon} alt = ''/>
                    <button onClick = {() => setButtonPopup(true)}> Upload </button>

                </div> */}

                <div className = "sign-up-text-container">
                    <p> Bio </p>
                    <textarea value = {bioText} onChange = {handleBio} maxLength = {150} placeholder = "Type your bio here"></textarea>
                    <h2> {bioText.length}/{characterLimit} Characters </h2>
                </div>

                <div className = "sign-up-text-container">
                    <p> Contact Info </p>
                    <textarea value = {contactText} onChange = {handleContact} maxLength = {150} placeholder = "Type your contact info here"></textarea>
                    <h2> {contactText.length}/{characterLimit} Characters </h2>
                </div>

                <div className = "sign-up-text-container">
                    <p> Availability </p>
                    <textarea value = {availabilityText} onChange = {handleAvailability} maxLength = {150} placeholder = "Type your contact info here"></textarea>
                    <h2> {availabilityText.length}/{characterLimit} Characters </h2>
                </div>

                <div className = "sign-up-selection">
                    <Select
                        isRequired
                        components = {animatedComponents}
                        options = {data}
                        onChange = {(item) => setSelectedSchool(item)}
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
                        onChange = {(item) => setSelectedOptions(item)}
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

                <button className = "sign-up-cont-inner-create-btn" type = "submit"> Done </button>
                <Link to = '/profile-page' style = {{textDecoration: 'none', width: '100%'}}>
                    <button className = "sign-up-cont-inner-back-btn"> Cancel </button>
                </Link>
                </form>

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

export default ProfileEditPage