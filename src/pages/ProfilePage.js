import {React ,useState} from 'react'
import '../index.css';
import tempImg from '../assets/profileIcon.png';
import {FaStar} from 'react-icons/fa'

export default function ProfilePage() {
  {/*

  */}


  return (
    <div className = "profile-page">
        <div className = "name-pic-bio">
            <img src = {tempImg} alt ='' />
            <label> Name </label>
            <p> Test </p>
        </div>

        <div className = "profile-edit">
            <button> Edit profile</button>
        </div>

        <div className = "profile-page-ratings">
                <p classname = "profile-rating"> 
                <FaStar size = {20} /> 5.0 
                <br></br>
                <h1> Rating </h1>
                </p>

                <p> 
                50 
                <br></br>
                <h1> Reviews </h1>
                </p>

                <p> 
                42 <br></br>
                <h1> Lessons </h1>
                </p>
        </div>

        <div className = "profile-blocks-grid">
            <div id = "profile-blocks" className = "contact-blocks">
                <label> Personal Info </label>
            </div>
            <div id = "profile-blocks" className = "contact-blocks">
                <label> Courses </label>
            </div>
            <div id = "profile-blocks" className = "contact-blocks">
                <label> Availability </label>
            </div>
        </div>

    </div>
  )
}
