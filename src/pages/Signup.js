import React, { useRef, useState, useEffect } from 'react'
import '../components/Authenication/signupForm.css';
import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from '../AuthContext'

export default function Signup({nextPage, handleChange, values}) {
    const { currentUser, register, setError} = useAuth();
    const [passwordConf, setPasswordConf] = useState('');
    const [loading, setLoading] = useState(false);

    async function submitHandler(e) {
        e.preventDefault();

        if (values.password !== passwordConf) {
            return setError("Password not matching");
        }

        try {
        setLoading(true);
        await nextPage();
        } catch (e) {
        setError("Failed to create an account");
        }

        setLoading(false);
    }

    return (
        <div className = "sign-up-container">

            <form className = "sign-up" onSubmit = {submitHandler}>
                <div className = "sign-up-input-container">
                    <p> Create an account </p>

                    <input required type = "text" placeholder = "Full name" onChange={handleChange('name')} defaultValue = {values.name}/>
                    <input required type = "email" placeholder = "Email" onChange={handleChange('email')} defaultValue = {values.email}/>
                    <input required type = "password" placeholder = "Password" onChange={handleChange('password')} defaultValue = {values.password}/>
                    <input required type = "password" placeholder = "Confirm password" onChange={(e) => setPasswordConf(e.target.value)}/>


                <button className = "sign-up-page-button" type = "submit" disabbled = {loading}> Continue </button>

                <Link to = "/login" style = {{textDecoration: "none"}}><button className = "sign-up-page-cancel"> Cancel </button></Link>
                

                </div>
            </form>
        </div>
    );    
}