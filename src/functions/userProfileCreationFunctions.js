import { auth } from "../firebase";
import { db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { arrayUnion, doc, setDoc } from "firebase/firestore";



export async function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function createUserProfile(profileMap) {
  updateProfile(auth.currentUser, {
    displayName: profileMap.name
  })
  return setDoc(doc(db, `users/${auth.currentUser.uid}`), profileMap);
}