import React, {useState, useEffect} from 'react'
import '../index.css';
import { getIncomingRequests, getOutgoingRequests } from '../firebase-functions/bookingFunctions';
import IncomingRequestContainer from '../components/IncomingRequestContainer';
import OutgoingRequestContainer from '../components/OutgoingRequestContainer';


export default function RequestPage() {

    const [outgoingRequestData, setOutgoingRequestData] = useState([]);
    const [incomingRequests, setIncomingRequestData] = useState([]);
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
        setIncomingRequestData(response);
        setIsLoading(false);
      };
      fetchIncomingRequests();
    }, []);


    // const requestData = getOutgoingRequests();

    console.log(incomingRequests);



    return (
        <div className = "schedule-page">
            <div className = "schedule-page-inner">
                <label className = 'request-page' style = {{fontSize: '2rem'}}> You will become tutors once you choose your courses </label>
                <div className = "schedule-page-lessons">
                    <label> Incoming requests </label>
                </div>

                <div className = "requests-grid">
                    {incomingRequests.length > 0 ? incomingRequests.map((elem) => {
                        return(
                            <IncomingRequestContainer key = {elem.timeCreated} props = {elem}></IncomingRequestContainer> 
                        )
                        }) : <p> You do not have any incoming requests </p>}
                </div>

                <div className = "schedule-page-lessons">
                    <label> Outgoing requests </label>
                </div>
                
                <div className = "requests-grid">
                    {outgoingRequestData.length > 0 ? outgoingRequestData.map((elem) => {
                        return(
                            <OutgoingRequestContainer key = {elem.timeCreated} props = {elem}></OutgoingRequestContainer> 
                        )
                        }) : <p> You do not have any incoming requests </p>}
                </div>
            </div>
        </div>
    )
}

