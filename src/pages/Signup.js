import React, { useRef, useState } from 'react'
import '../components/Authenication/signupForm.css';
//import {RoleButtons} from '../components/RoleButtons.js';


export default function Signup() {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };




    return (
        <div className = "sign-up-container">
            <div className = "sign-up">

                <div className = "sign-up-input-container">
                    <p> Create an account </p>

                    <input type = "text" placeholder = "Email"/>
                    <input type = "text" placeholder = "Password" />
                    <input type = "text" placeholder = "Confirm password"/>


                <button className = "sign-up-page-button"> Continue </button>

                <button className = "sign-up-page-cancel"> Cancel </button>
                

                </div>
            </div>
        </div>
    );    
}
