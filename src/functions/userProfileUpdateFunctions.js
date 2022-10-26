import { arrayRemove, arrayUnion, doc, getDoc, updateDoc, writeBatch } from "firebase/firestore";
import { auth } from "../firebase";
import { db } from "../firebase";

export async function setName(newName) {
  await updateDoc(doc(db, `users/${auth.currentUser.uid}`), 
    {
      name:newName
    }
  );
}

export async function setBio(newBio) {
  await updateDoc(doc(db, `users/${auth.currentUser.uid}`), 
    {
      bio:newBio
    }
  );
}

export async function setContactInfo(newContactInfo) {
  await updateDoc(doc(db, `users/${auth.currentUser.uid}`), 
    {
      contactInfo:newContactInfo
    }
  );
}

export async function setAvailabilty(newAvailabilty) {
  await updateDoc(doc(db, `users/${auth.currentUser.uid}`), 
    {
      availabilty:newAvailabilty
    }
  );
}

export async function addCourse(course) {
  const userSchool = (await getDoc(doc(db, `users/${auth.currentUser.uid}`))).data().school;
  console.log(userSchool);
  const updateCourses = writeBatch(db);

  updateCourses.update(doc(db, `users/${auth.currentUser.uid}`), {
    courses: arrayUnion(course)
  })

  updateCourses.set(doc(db, `explore/${course}/schools/${userSchool}`), {
    students: arrayUnion(auth.currentUser.uid)
  })

  updateCourses.commit();
}

export async function removeCourse(course) {
  const userSchool = (await getDoc(doc(db, `users/${auth.currentUser.uid}`))).data().school;
  console.log(userSchool);
  const updateCourses = writeBatch(db);

  updateCourses.update(doc(db, `users/${auth.currentUser.uid}`), {
    courses: arrayRemove(course)
  })

  updateCourses.set(doc(db, `explore/${course}/schools/${userSchool}`), {
    students: arrayRemove(auth.currentUser.uid)
  })

  updateCourses.commit();
}