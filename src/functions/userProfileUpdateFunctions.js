import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth } from "../firebase";
import { db } from "../firebase";


export async function setName(newName) {
  return updateDoc(doc(db, `users/${auth.currentUser.uid}`), {
    name: newName
  })
}

export async function setBio(newBio) {
  return updateDoc(doc(db, `users/${auth.currentUser.uid}`),
    {
      bio: newBio
    }
  )
}

export async function setSchool(newSchool) {
  return updateDoc(doc(db, `users/${auth.currentUser.uid}`), {
    school: newSchool
  })
}

export async function setContactInfo(newContactInfo) {
  return updateDoc(doc(db, `users/${auth.currentUser.uid}`),
    {
      contactInfo: newContactInfo
    }
  )
}

export async function setAvailabilty(newAvailabilty) {
  return updateDoc(doc(db, `users/${auth.currentUser.uid}`),
    {
      availabilty: newAvailabilty
    }
  )
}

export async function addCourse(course) {
  return updateDoc(doc(db, `users/${auth.currentUser.uid}`), {
    courses: arrayUnion(course)
  })
}

export async function removeCourse(course) {
  return updateDoc(doc(db, `users/${auth.currentUser.uid}`), {
    courses: arrayRemove(course)
  })
}