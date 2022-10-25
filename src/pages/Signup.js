import React, { useRef, useState } from 'react'
import '../components/Authenication/signupForm.css';
//import {RoleButtons} from '../components/RoleButtons.js';

// import { createUser } from '../functions/userAuthFunctions'

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


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    return (
        <div className = "sign-up-container">
            <div className = "sign-up">

                <div className = "sign-up-input-container">
                    <p> Create an account </p>

                    <input type = "text" placeholder = "Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type = "text" placeholder = "Password" onChange={(e) => setPassword(e.target.value)}/>
                    <input type = "text" placeholder = "Confirm password" onChange={(e) => setPassword(e.target.value)}/>


                <button className = "sign-up-page-button" type = "submit"> Continue </button>

                <button className = "sign-up-page-cancel"> Cancel </button>
                

                </div>
            </div>
        </div>
    );    
}
