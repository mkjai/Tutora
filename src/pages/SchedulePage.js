import React, {useState, useEffect} from 'react'
import '../index.css';
import ScheduleTutorContainer from '../components/ScheduleTutorContainer';
import ScheduleLearnontainer from '../components/ScheduleLearnContainer';
import { getStudentAppointments, getTutorAppointments } from '../firebase-functions/bookingFunctions';



export default function SchedulePage() {

    const [studentAppointments, setStudentAppointments] = useState([]);
    const [tutorAppointments, setTutorAppointments] = useState([]);
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchStudentAppointments = async () => {
        const response = await getStudentAppointments();
        setStudentAppointments(response);
        setIsLoading(false);
      };
      fetchStudentAppointments();
      const fetchTutorAppointments = async () => {
        const response = await getTutorAppointments();
        setTutorAppointments(response);
        setIsLoading(false);
      };
      fetchTutorAppointments();
    }, []);

    console.log(tutorAppointments);


    return (

        


        <div className = "schedule-page">
            <div className = "schedule-page-inner">
                <div className = "schedule-page-lessons">
                    <label> Upcoming lessons (Teaching) </label>
                </div>

                <div className = "schedule-grid">
                    {tutorAppointments.length > 0 ? tutorAppointments.map((elem) => {
                        return(
                            <ScheduleTutorContainer key = {elem.timeCreated} props = {elem}></ScheduleTutorContainer> 
                        )
                        }) : <p id = "schedule-none"> You do not have any incoming requests </p>}
                </div>

                <div className = "schedule-page-lessons">
                    <label> Upcoming lessons (Learning) </label>
                </div>
                
                <div className = "schedule-grid">
                    {studentAppointments.length > 0 ? studentAppointments.map((elem) => {
                        return(
                            <ScheduleLearnontainer key = {elem.timeCreated} props = {elem}></ScheduleLearnontainer> 
                        )
                        }) : <p id = "schedule-none"> You do not have any incoming requests </p>}
                </div>
            </div>
        </div>
    )
}