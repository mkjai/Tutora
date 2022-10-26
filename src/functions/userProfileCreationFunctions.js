import { auth } from "../firebase";
import { db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { arrayUnion, doc, writeBatch } from "firebase/firestore";



export async function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then(
    () =>
    console.log('created user ' + auth.currentUser.uid)
  )
  .catch(
    () =>
    console.log('failed to create user')
  );
}

export async function createUserProfile(profileMap) {
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
      console.log(`successfully created profile ${auth.currentUser.uid}`)
    )
    .catch(
      (error) => {
        console.log(error)
      }
    )
  }
  
}