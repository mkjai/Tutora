import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth } from "../firebase";
import { db } from "../firebase";

const userDoc = doc(db, `users/${auth.currentUser.uid}`)

export async function setName(newName) {
  return updateDoc(userDoc, {
    name: newName
  })
}

export async function setBio(newBio) {
  return updateDoc(userDoc,
    {
      bio: newBio
    }
  )
}

export async function setSchool(newSchool) {
  return updateDoc(userDoc, {
    school: newSchool
  })
}

export async function setContactInfo(newContactInfo) {
  return updateDoc(userDoc,
    {
      contactInfo: newContactInfo
    }
  )
}

export async function setAvailabilty(newAvailabilty) {
  return updateDoc(userDoc,
    {
      availabilty: newAvailabilty
    }
  )
}

export async function addCourse(course) {
  return updateDoc(userDoc, {
    courses: arrayUnion(course)
  })
}

export async function removeCourse(course) {
  return updateDoc(userDoc, {
    courses: arrayRemove(course)
  })
}