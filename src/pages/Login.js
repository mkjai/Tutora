import React, { useRef, useState, useEffect } from 'react'
import img from '../assets/navLogo.png';
import '../components/Authenication/loginForm.css';
import { useNavigate, Link } from 'react-router-dom'

import ForgotPasswordPopup from '../components/ForgotPasswordPopup';

import { useAuth } from '../AuthContext'


// divider that separates Login and Create account
const Divider = ({ children}) => {
  return (
    <div className="divider-container">
      <div className="border" />
      <span className="content">
        {children}
      </span>
      <div className="border" />
    </div>
  );
};


export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [popup, isPopup] = useState(false);

    const navigate = useNavigate();
    const { currentUser, login, setError } = useAuth();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (currentUser) {
        navigate("/");
        }
    }, [currentUser, navigate]);

    async function submitHandler(e) {
        e.preventDefault();

        try {
        setLoading(true);
        await login(email, password);
        navigate("/");
        } catch (e) {
        setError("Wrong email or password");
        }

        setLoading(false);
    }


    return (
        <div className = "container">
            <form className = "log-in" onSubmit = {submitHandler}>

                <img class = "login-img" src = {img} alt = ''/>

                <div className = "login-form">

                    <input required type = "email" placeholder = "Username" onChange={(e) => setEmail(e.target.value)}/>
                    <input required type = "password" placeholder = "Password" onChange={(e) => setPassword(e.target.value)}/>

                    <button className = "log-in-form-button"> Login </button>
                    
                    <Divider> Or </Divider>

                    <Link to = "/signup" style = {{ textDecoration: 'none'}} className = "create-acc-link"><button className = "log-in-form-button"> Create an Account </button></Link>

                    <p className = "forgot" onClick = {() => isPopup(true)}> Forgot password? </p>
                </div>

            </form>

            <ForgotPasswordPopup trigger = {popup} setTrigger = {isPopup}></ForgotPasswordPopup>


        </div>

    )
}