import React from 'react';
import '../components/Authenication/loginForm.css';
import img from '../assets/navLogo.png';
import Popup from '../components/Popup';


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


    return (
        <div className = "container">
            <div className = "log-in">

                <img class = "login-img" src = {img} alt = ''/>

                <div className = "login-form">

                    <input type = "text" placeholder = "Username" />
                    <input type = "password" placeholder = "Password" />

                    <button className = "log-in-form-button"> Login </button>
                    
                    <Divider> Or </Divider>

                    <button className = "log-in-form-button"> Create an Account </button>

                    <p className = "forgot"> Forgot password? </p>
                </div>

            </div>


        </div>

    )
}