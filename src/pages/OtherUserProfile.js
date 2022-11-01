import {React ,useState, useEffect} from 'react'
import { Link, useParams,useLocation } from 'react-router-dom';
import '../index.css';
import tempImg from '../assets/profileIcon.png';
import {FaStar} from 'react-icons/fa'
import BookingPopup from '../components/BookingPopup'

const OtherUserProfile = _ => {

    const [popup,isPopup] = useState(false);

    const location = useLocation();
    console.log(location);
    console.log(location.state.tutor.name);
    const courses = location.state.tutor.courses;
    const params = useParams();

    console.log(params.id);

    



    return (
        <div className = "profile-page">
            <div className = "name-pic-bio">
                <img src = {tempImg} alt ='' />
                <label> {location.state.tutor.name} </label>
                <p> {location.state.tutor.bio != "" 
                        ? location.state.tutor.bio: 'Nothing'} </p>
            </div>

            <Link to = '/reviews' style = {{textDecoration: "none"}}>
                <div className = "profile-page-ratings" style ={{cursor:'pointer'}}>
                    <div className = 'profile-rr'>
                    <p> 
                    <FaStar size = {20} /> {location.state.tutor.ratings != null ? location.state.tutor.ratings: 'N/A'}
                    </p>
                    <h1> Rating </h1>
                    </div>

                    <div className = 'profile-rr'>
                    <p> 
                    {location.state.tutor.reviews != null ? location.state.tutor.ratings: '0'}
                    </p>
                    <h1> Reviews </h1>
                    </div>
                </div>
            </Link>

            <div className = 'booking-btn'>
                <button onClick = {() => isPopup(true)}> Book a lesson </button>
            </div>

            <div className = "profile-blocks-grid">
                <div id = "profile-blocks" className = "contact-blocks">
                    <label> Contact Info </label>
                    <div className = 'profile-blocks-text'>
                        <h1> {location.state.tutor.contactInfo != "" 
                                ? location.state.tutor.contactInfo: 'Nothing'} </h1>
                    </div>
                </div>

                <div id = "profile-blocks" className = "contact-blocks">
                    <label> Availability </label>
                    <h1> {location.state.tutor.availability != "" 
                                ? location.state.tutor.availability: 'Nothing'} </h1>
                </div>

                <div id = "profile-blocks" className = "contact-blocks">
                    <label> Courses </label>
                    {courses.map((item) => <h1> {item} </h1>)}
                </div>
            </div>

            <BookingPopup trigger = {popup} setTrigger = {isPopup} id = {params.id}></BookingPopup>

        </div>
    )
}


export default OtherUserProfile