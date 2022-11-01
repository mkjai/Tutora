import React, {useState, useEffect} from 'react'
import defaultProfile from '../assets/profileIcon.png';
import '../index.css';
import RequestContainer from '../components/RequestContainer';
import { getIncomingRequests, getOutgoingRequests } from '../firebase-functions/bookingFunctions';

const profilePic = defaultProfile;


export default function RequestPage() {

    const [requestData, setRequestData] = useState([]);
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchTutorData = async () => {
        const response = await getOutgoingRequests();
        setRequestData(response);
        setIsLoading(false);
      };
      fetchTutorData();
    }, []);


    // const requestData = getOutgoingRequests();



    return (
        <div className = "request-page">
            <div className = "request-page-inner">
                <div className = 'request-label'>
                    <label> You must choose course(s) to teach to become a tutor</label>
                </div>

                <div className = "requests">
                    <label> Requests </label>
                </div>

                <div className = "requests-grid">
                    {requestData.map((elem) => {
                        return(
                            <RequestContainer key = {elem.timeCreated} props = {elem}></RequestContainer> 
                        )
                        })}
                </div>
            </div>
        </div>
    )
}