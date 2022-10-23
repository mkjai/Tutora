import React from 'react'
import '../index.css';
import ScheduleTutorContainer from '../components/ScheduleTutorContainer';
import ScheduleLearnontainer from '../components/ScheduleLearnContainer';


export default function SchedulePage() {
    return (
        <div className = "schedule-page">
            <div className = "schedule-page-lessons">
                <label> Upcoming lessons (Teaching) </label>
            </div>

            <div className = "schedule-grid">
                <ScheduleTutorContainer></ScheduleTutorContainer>
                <ScheduleTutorContainer></ScheduleTutorContainer>
            </div>

            <div className = "schedule-page-lessons">
                <label> Upcoming lessons (Learning) </label>
            </div>
            
            <div className = "schedule-grid">
                <ScheduleLearnontainer></ScheduleLearnontainer>
                <ScheduleLearnontainer></ScheduleLearnontainer>
            </div>
        </div>
    )
}