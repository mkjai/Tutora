import React, {useState, useEffect} from 'react'
import '../index.css';
import RequestContainer from '../components/RequestContainer';
import { getIncomingRequests, getOutgoingRequests } from '../firebase-functions/bookingFunctions';


export default function RequestPage() {

    const [outgoingRequestData, setOutgoingRequestData] = useState([]);
    const [outIncomingRequestData, setOutIncomingRequestData] = useState([]);
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchOutgoingRequests = async () => {
        const response = await getOutgoingRequests();
        setOutgoingRequestData(response);
        setIsLoading(false);
      };
      fetchOutgoingRequests();
      const fetchIncomingRequests = async () => {
        const response = await getIncomingRequests();
        setOutIncomingRequestData(response);
        setIsLoading(false);
      };
      fetchIncomingRequests();
    }, []);

    console.log(outgoingRequestData);


    // const requestData = getOutgoingRequests();

    console.log(outIncomingRequestData);



    return (
        <div className = "schedule-page">
            <div className = "schedule-page-inner">
                <label className = 'request-page' style = {{fontSize: '2rem'}}> You will become tutors once you choose your courses </label>
                <div className = "schedule-page-lessons">
                    <label> Incoming requests </label>
                </div>

                <div className = "requests-grid">
                    {outIncomingRequestData.length > 1 ? outIncomingRequestData.map((elem) => {
                        return(
                            <RequestContainer key = {elem.timeCreated} props = {elem}></RequestContainer> 
                        )
                        }) : <p> You do not have any incoming requests </p>}
                </div>

                <div className = "schedule-page-lessons">
                    <label> Outgoing requests </label>
                </div>
                
                <div className = "requests-grid">
                    {outgoingRequestData.length > 1 ? outgoingRequestData.map((elem) => {
                        return(
                            <RequestContainer key = {elem.timeCreated} props = {elem}></RequestContainer> 
                        )
                        }) : <p> You do not have any incoming requests </p>}
                </div>
            </div>
        </div>
    )
}

