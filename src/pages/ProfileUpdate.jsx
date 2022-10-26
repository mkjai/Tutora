import React from "react";
import { useState } from "react";
import { addCourse, removeCourse } from "../functions/userProfileUpdateFunctions";

export default function ProfileCreation() {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [bio, setBio] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [availability, setAvailability] = useState('');
  const [newCourses, setNewCourses] = useState('');
  const [remCourses, setRemCourses] = useState('');

  const handleNameChange = (e) => { 
    setName(e.target.value) 
  }
  const handleSchoolChange = (e) => { 
    setSchool(e.target.value) 
  }  
  const handleBioChange = (e) => { 
    setBio(e.target.value) 
  }
  const handleContactInfoChange = (e) => { 
    setContactInfo(e.target.value) 
  }
  const handleAvailabilityChange = (e) => { 
    setAvailability(e.target.value) 
  }
  const handleNewCoursesChange = (e) => { 
    setNewCourses(e.target.value) 
  }
  const handleRemCoursesChange = (e) => {
    setRemCourses(e.target.value)
  }

  const handleSubmitButton = () => {
    setName(name);
    setBio(bio);
    setContactInfo(contactInfo);
    setAvailability(availability);
    if (newCourses) {
      newCourses.split(', ').forEach(
        (item) => {
          addCourse(item);
        }
      )  
    }
    if (remCourses) {
      remCourses.split(', ').forEach(
        (item) => {
          removeCourse(item);
        }
      )
    }
    
  }
  
  return (
    <div className="ProfileCreation">
      <h1>Profile Update</h1>
      
      <h2>Name</h2>
      <input value={name} onChange={handleNameChange} /> 

      <h2>Bio</h2>
      <input value={bio} onChange={handleBioChange} /> 

      <h2>Contact Info</h2>
      <input value={contactInfo} onChange={handleContactInfoChange} /> 

      <h2>Availability</h2>
      <input value={availability} onChange={handleAvailabilityChange} /> 

      <h2>AddCourses</h2>
      <input value={newCourses} onChange={handleNewCoursesChange} /> 

      <h2>Remove Courses</h2>
      <input value={remCourses} onChange={handleRemCoursesChange} /> 

      <input type="submit" value="submit" onClick={handleSubmitButton} />

    </div>
  )
}