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


    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()




    return (
        <div className = "sign-up-container">
            <div className = "sign-up">

                <div className = "sign-up-input-container">
                    <p> Create an account </p>

                    <input type = "text" placeholder = "Email" ref = {emailRef}/>
                    <input type = "text" placeholder = "Password" ref = {passwordRef}/>
                    <input type = "text" placeholder = "Confirm password" ref = {passwordConfirmRef}/>


                <button className = "sign-up-page-button" type = "submit"> Continue </button>

                <button className = "sign-up-page-cancel"> Cancel </button>
                

                </div>
            </div>
        </div>
    );    
}
