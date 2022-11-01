import {React ,useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../index.css';
import tempImg from '../assets/profileIcon.png';
import {FaStar} from 'react-icons/fa'
import { getCurrentUserData } from '../firebase-functions/bookingFunctions';

export default function ProfilePage() {
    

    const [isLoading, setIsLoading] = useState(false);
    const [userProfile, setUserProfile] = useState([]);
    const courses = userProfile.courses;
    useEffect(() => {
      getProfile();
    }, []);

    const getProfile = async () => {
        const response = await getCurrentUserData();
        setUserProfile(response);
        setIsLoading(false);
      };

    console.log(userProfile.reviews);
    console.log(courses);




    return (
        <div className = "profile-page">
            <div className = "name-pic-bio">
                <img src = {tempImg} alt ='' />
                <label> {userProfile.name} </label>
                <p> {userProfile.bio} </p>
            </div>


            <Link to = '/reviews' style = {{textDecoration: "none"}}>
                <div className = "profile-page-ratings" style ={{cursor:'pointer'}}>
                    <div className = 'profile-rr'>
                    <p> 
                    <FaStar size = {20} /> {userProfile.ratings != null ? userProfile.ratings: 'N/A'}
                    </p>
                    <h1> Rating </h1>
                    </div>

                    <div className = 'profile-rr'>
                    <p> 
                    {userProfile.completedSessions != null ? userProfile.completedSessions: '0'}
                    </p>
                    <h1> Reviews </h1>
                    </div>
                </div>
            </Link>

             <div className = "booking-btn">
                <Link to = '/edit' style = {{textDecoration: 'none'}}>
                    <button> Edit profile</button>
                </Link>
            </div>

            <div className = "profile-blocks-grid">
                <div id = "profile-blocks" className = "contact-blocks">
                    <label> Contact Info </label>
                        <div className = 'profile-blocks-text'>
                            <h1> {userProfile.contactInfo != "" 
                                    ? userProfile.contactInfo: 'Nothing'} </h1>
                        </div>
                </div>
                <div id = "profile-blocks" className = "contact-blocks">
                    <label> Availability </label>
                        <div className = 'profile-blocks-text'>
                            <h1> {userProfile.availability != "" 
                                    ? userProfile.availability: 'Nothing'} </h1>
                        </div>
                </div>

                <div id = "profile-blocks" className = "contact-blocks">
                    <label> Courses </label>
                   {(userProfile.courses || []).map((item) => <h1> {item} </h1>)}
                </div>
            </div>

        </div>
    )
}
