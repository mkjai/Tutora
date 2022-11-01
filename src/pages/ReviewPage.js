import {React ,useState, useEffect} from 'react'
import ReviewContainer from '../components/ReviewContainer';
import { useNavigate, Link} from 'react-router-dom';
import '../index.css';
import {BiArrowBack} from 'react-icons/bi'
import { getCurrentUserData } from '../firebase-functions/bookingFunctions';

export default function ReviewPage() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [userProfile, setUserProfile] = useState([]);
    useEffect(() => {
      const getProfile = async () => {
        const response = await getCurrentUserData();
        setUserProfile(response);
        setIsLoading(false);
      };
      getProfile();
    }, []);

    console.log(userProfile);

    return (
        <div className = "review-page">
            <div className = 'review-page-inner'>
                <div className = 'review-top'>
                    <Link to ='/profile-page' style = {{textDecoration: 'none', color: 'black'}}>
                        <BiArrowBack 
                            size ={30} className = 'review-back'
                            style = {{cursor: 'pointer'}}
                        ></BiArrowBack>
                    </Link>

                        <div className = 'review-label'>
                            <p> Reviews </p>
                        </div>

                </div>

                <div className = "review-grid">
                    {userProfile.length > 0 ? userProfile.map((elem) => {
                        return(
                            <ReviewContainer key = {elem.timeCreated} data = {elem}></ReviewContainer> 
                        )
                        }) : <p id = "schedule-none"> You do not have any reviews </p>}
                </div>
            </div>

        </div>
    )
}
