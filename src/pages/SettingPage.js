import {React, useState} from 'react'
import '../index.css';
import SettingPopup from '../components/SettingPopup';

export default function SettingPage() {

    const [popupAccount, isPopupAccount] = useState(false);
    const [popupHelp, isPopupHelp] = useState(false);
    const [popupAbout, isPopupAbout] = useState(false);


    return (
        <div className = "setting-page">
            <div className = "setting-page-inner">
                <label> Settings </label>

                <div className = "setting-display">
                    <button onClick = {() => isPopupAccount(true)}> Account </button>
                    <button onClick = {() => isPopupHelp(true)}> Help and Support </button>
                    <button onClick = {() => isPopupAbout(true)}> About </button>
                    <button> Sign out </button>
                </div>
            </div>

            <SettingPopup className = "account-popup" trigger = {popupAccount} setTrigger = {isPopupAccount}>
                <div className = "account-popup-inner">
                    <p> Change email </p>
                    <input type = "text" placeholder = "Change email" value = ""></input>
                    <button id = "confirm-change"> Confirm </button>
                    <p> Change password </p>
                    <input type = "password" placeholder = "Old password"></input>
                    <input type = "password" placeholder = "New password"></input>
                    <input type = "password" placeholder = "Confirm new password"></input>
                    <button id = "confirm-change"> Confirm </button>
                    <button id = "delete-account"> Delete account </button>
                </div>
            </SettingPopup>

            
            <SettingPopup className = "help-popup" trigger = {popupHelp} setTrigger = {isPopupHelp}>
                <div className = "help-popup-inner">
                    <p> Help and Support </p>
                    <h1> 
                        Have a question? <br></br>
                        Contact us!
                    </h1>

                    <h1>
                        Contact us via email: <br></br>
                        xxxxxx@tutora.com
                    </h1>
                </div>
            </SettingPopup>

            <SettingPopup className = "about-popup" trigger = {popupAbout} setTrigger = {isPopupAbout}>
                <div className = "about-popup-inner">
                    <p> About Tutora </p>
                    <h1> 
                        Tutora is a free, non-profit website designed to better
                        school communities by connecting students to one another.
                    </h1>

                    <h1>
                        Tutora is not responsible for individual student actions or communication between a tutor and student
                    </h1>

                    <h1>
                        Theme & Design by Selina Cheng <br></br>
                        UI/UX by MK Tan <br></br>
                        Lead & Backend by Sam Ly
                    </h1>

                    <h1>
                        Created for the Congressional App Challenge
                    </h1>

                </div>
            </SettingPopup>
            
        </div>
    )
}