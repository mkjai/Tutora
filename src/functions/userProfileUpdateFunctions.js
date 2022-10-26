import { arrayRemove, arrayUnion, doc, getDoc, updateDoc, writeBatch } from "firebase/firestore";
import { auth } from "../firebase";
import { db } from "../firebase";

export async function setName(newName) {
  updateDoc(doc(db, `users/${auth.currentUser.uid}`), 
    {
      name:newName
    }
  ).then(
    () => {
      console.log('successfully updated')
    }
  )
  .catch(
    (error) => {
      console.log(error)
    }
  );
}

export async function setBio(newBio) {
  updateDoc(doc(db, `users/${auth.currentUser.uid}`), 
    {
      bio:newBio
    }
  ).then(
    () => {
      console.log('successfully updated')
    }
  )
  .catch(
    (error) => {
      console.log(error)
    }
  );
}

export async function setContactInfo(newContactInfo) {
  updateDoc(doc(db, `users/${auth.currentUser.uid}`), 
    {
      contactInfo:newContactInfo
    }
  ).then(
    () => {
      console.log('successfully updated')
    }
  )
  .catch(
    (error) => {
      console.log(error)
    }
  );
}

export async function setAvailabilty(newAvailabilty) {
  updateDoc(doc(db, `users/${auth.currentUser.uid}`), 
    {
      availabilty:newAvailabilty
    }
  ).then(
    () => {
      console.log('successfully updated')
    }
  )
  .catch(
    (error) => {
      console.log(error)
    }
  );
}

export async function addCourse(course) {
  const userSchool = (await getDoc(doc(db, `users/${auth.currentUser.uid}`))).data().school;
  const updateCourses = writeBatch(db);

  updateCourses.update(doc(db, `users/${auth.currentUser.uid}`), {
    courses: arrayUnion(course)
  })

  updateCourses.set(doc(db, `explore/${course}/schools/${userSchool}`), {
    students: arrayUnion(auth.currentUser.uid)
  })

  updateCourses.commit()
  .then(
    () => {
      console.log(`added ${course} course to user ${auth.currentUser.uid}`)
    }
  )
  .catch(
    (error) => {
      console.log(error)
    }
  );
}

export async function removeCourse(course) {
  const userSchool = (await getDoc(doc(db, `users/${auth.currentUser.uid}`))).data().school;
  const updateCourses = writeBatch(db);

  updateCourses.update(doc(db, `users/${auth.currentUser.uid}`), {
    courses: arrayRemove(course)
  })

  updateCourses.set(doc(db, `explore/${course}/schools/${userSchool}`), {
    students: arrayRemove(auth.currentUser.uid)
  })

  updateCourses.commit()
  .then(
    () => {
      console.log(`removed ${course} course from user ${auth.currentUser.uid}`)
    }
  )
  .catch(
    (error) => {
      console.log(error)
    }
  );
}