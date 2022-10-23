import React from 'react'
import defaultProfile from '../assets/profileIcon.png';
import '../index.css';
import RequestContainer from '../components/RequestContainer';

const profilePic = defaultProfile;


export default function RequestPage() {
    return (
        <div className = "request-page">
            <div className = "request-page-inner">
                <div className = "become-tutor">
                    <div className = "become-tutor-profile-name">
                        <img  src = {profilePic} alt = ''/>
                        <p> Name </p>
                    </div>

                    <div className = "become-tutor-subject">
                        <label> Subjects</label>
                        <p> Test</p>
                    </div>
                    <div className = "become-tutor-buttons">
                        <button> Become tutor </button>
                    </div>
                </div>

                <div className = "requests">
                    <label> Requests </label>
                </div>

                <div className = "requests-grid">
                    <RequestContainer></RequestContainer>
                    <RequestContainer></RequestContainer>
                </div>
            </div>
        </div>
    )
}