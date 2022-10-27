import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserProfile } from "../functions/userProfileCreationFunctions";

export default function ProfileCreation() {

  const nav = useNavigate();

  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [bio, setBio] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [availability, setAvailability] = useState('');
  const [courses, setCourses] = useState('');

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
  const handleCoursesChange = (e) => { 
    setCourses(e.target.value) 
  }

  const handleSubmitButton = () => {
    createUserProfile(
      {
        uid: auth.currentUser.uid,
        name: name,
        school: school,
        bio: bio,
        contactInfo: contactInfo,
        availability: availability,
        courses: courses.split(', ')
      }
    )
    .then(
      () => console.log('created user profile ' + auth.currentUser.uid)
    )
    .catch(
      e => console.log(e)
    )
  }
  
  return (
    <div className="ProfileCreation">
      <h1>Profile Creation</h1>
      
      <h2>Name</h2>
      <input value={name} onChange={handleNameChange} /> 

      <h2>school</h2>
      <input value={school} onChange={handleSchoolChange} /> 

      <h2>Bio</h2>
      <input value={bio} onChange={handleBioChange} /> 

      <h2>Contact Info</h2>
      <input value={contactInfo} onChange={handleContactInfoChange} /> 

      <h2>Availability</h2>
      <input value={availability} onChange={handleAvailabilityChange} /> 

      <h2>Courses</h2>
      <input value={courses} onChange={handleCoursesChange} /> 

      <input type="submit" value="submit" onClick={handleSubmitButton} />

    </div>
  )
}