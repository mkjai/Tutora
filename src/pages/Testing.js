import React from "react";
import { createUser, createUserProfile } from "../functions/userProfileCreationFunctions";

const profile = {
  firstName: 'sam',
  lastName: 'ly',
  school: 'rhs',
  bio: 'bio',
  contactInfo: 'conact info',
  availability: 'availability',
  courses: ['AP Calc AB', 'test course']
};

export default function Testing() {
  return (
    <div className="testing">
      <button onClick={() => createUser('testidng@a.com', 'password')}>
        createUser
      </button>
      <button onClick={() => createUserProfile(profile)}>
        createUserProfile
      </button>
    </div>
  )
}