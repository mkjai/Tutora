import { onAuthStateChanged, connectAuthEmulator, createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { arrayUnion, connectFirestoreEmulator, doc, getFirestore, setDoc, writeBatch } from "firebase/firestore"

import { app } from "../firebase"

const auth = getAuth(app);
const db = getFirestore(app);
// connectAuthEmulator(auth, "http://localhost:9099");
// connectFirestoreEmulator(db, "http://localhost:8080");



export function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then(
    () =>
    console.log('created user')
  )
  .catch(
    () =>
    console.log('failed to create user')
  );
}

export function createUserProfile(profileMap) {
  const user = auth.currentUser;
  if (user != null) {
    const updateUserProfile = writeBatch(db);
    
    updateUserProfile.set(doc(db, `users/${user.uid}`), profileMap)

    // for each item in profileMap.courses, create a new doc
    profileMap.courses.forEach(element => {
      updateUserProfile.set(doc(db, `explore/${element}/schools/${profileMap.school}`), 
        {
          students: arrayUnion(user.uid)
        }
      );
    });

    updateUserProfile.commit()
    .then(
      () =>
      console.log('successfully committed batch')
    )
    .catch(
      (error) => {
        console.log(error)
      }
    )
  }
  
}