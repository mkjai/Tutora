import React, { useState } from "react";
import { auth } from "../firebase";
import { createUser } from "../functions/userProfileCreationFunctions"

export default function Signup() { 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("")
  const [displayName, setDisplayName] = useState("")

  const handleEmailChange = (e) => { 
    setEmail(e.target.value) 
  } 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value)
  }
  const handleSubmitButton = () => { 
    createUser(email, password)
    .then(
      () => console.log('created user ' + auth.currentUser.uid)
    );
  }
  return ( 
    <div className="App"> 
      <h1>Signup</h1>
      <input value={email} onChange={handleEmailChange} /> 
      <input value={password} onChange={handlePasswordChange} /> 

      <input type="submit" value="submit" onClick={handleSubmitButton} /> 
    </div> 
  ); 
}