import React, { useRef, useState, useEffect } from 'react'
import '../components/Authenication/signupForm.css';
import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from '../AuthContext'

export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');

    const navigate = useNavigate();
    const { currentUser, register, setError} = useAuth();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (currentUser) {
        navigate("/");
        }
    }, [currentUser, navigate]);

    async function submitHandler(e) {
        e.preventDefault();

        if (password !== passwordConf) {
        return setError("Password not matching");
        }

        try {
        setLoading(true);
        await register(email, password);
        navigate("/");
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

                    <input required type = "email" placeholder = "Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input required type = "password" placeholder = "Password" onChange={(e) => setPassword(e.target.value)}/>
                    <input required type = "password" placeholder = "Confirm password" onChange={(e) => setPasswordConf(e.target.value)}/>


                <button className = "sign-up-page-button" type = "submit" disabbled = {loading}> Create an account </button>

                <Link to = "/login" style = {{textDecoration: "none"}}><button className = "sign-up-page-cancel"> Cancel </button></Link>
                

                </div>
            </form>
        </div>
    );    
}
