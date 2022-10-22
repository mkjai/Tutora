import React, { useRef, useState } from 'react'
import '../components/Authenication/signupForm.css';
//import {RoleButtons} from '../components/RoleButtons.js';
var data = require("../assets/SCHOOLS.json");


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

                    <input type = "text" placeholder = "Last name"/>
                    <input type = "text" placeholder = "First name"/>
                    <input type = "text" placeholder = "Email"/>
                    <input type = "text" placeholder = "Username" />
                    <input type = "text" placeholder = "Password" />
                    <input type = "text" placeholder = "Confirm password"/>

                </div>

                <div className = "school-selection">
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
                                >
                                    {item.school_name}<br></br>
                                    <p className = "school-address">{item.street}</p>
                                </div>
                                ))}
                    </div>
                </div>
                
                {/* <button className = "roleButton"></button> */}

                <button className = "sign-up-page-button"> Continue </button>

                <button className = "sign-up-page-cancel"> Cancel </button>
                

            </div>
        </div>
    );    
}