import { addDoc, arrayUnion, collection, deleteDoc, getDoc, getDocs, increment, query, serverTimestamp, updateDoc, where } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { doc } from 'firebase/firestore';
import { FaLessThan } from 'react-icons/fa';

// const auth.currentUser.uid = auth.currentUser.uid;
// const (await getDoc(doc(db, `users/${uid}`))).data() = (await getDoc(doc(db, `users/${uid}`))).data();
// console.log(auth.currentUser.uid);
// Creates new outgoing request to a tutor, with a message to tutor
export async function createOutgoingRequest(to, message, course) {
  const fromName = (await getDoc(doc(db, `users/${auth.currentUser.uid}`))).data().name;
  const toName = (await getDoc(doc(db, `users/${to}`))).data().name;
  const docRef = await addDoc(collection(db, 'requests'), {
    to: to,
    toName: toName,
    from: auth.currentUser.uid,
    fromName: fromName,
    timeCreated: serverTimestamp(),
    status: 'PENDING',
    messageToTutor: message,
    lessonCourse: course,
    StudentContactInfo: (await getDoc(doc(db, `users/${auth.currentUser.uid}`))).data().contactInfo,
  }) 
  return updateDoc(docRef, {
    requestId: docRef.id,
  })
}

export async function cancelOutgoingRequest(requestID) {
  const reqestDocRef = doc(db, `requests/${requestID}`);
  return deleteDoc(reqestDocRef);
}

// Checks if a request has already been made to this user
export async function doesRequestAlreadyExist(to) {
  const arr = (await getOutgoingRequests());
  let output = false;
  arr.forEach( item => {
    if (to == item.to) {
      output = true;
      return;
    }
  })
  return output;
  // let output = false;
  // getOutgoingRequests()
  // .then(
  //   (arr) => {
  //     arr.forEach(item => {
  //       if (to === item.to) {
  //         // console.log('already exists')
  //         output = true;
  //         return;
  //       }
  //     })
  //   }
  // )
  // .catch(
  //   e => {
  //     console.log('how lmao' + e)
  //   }
  // )
  // return output;
}

// Gets all outgoing requests currently made by this user.
// Also adds the current docID as a field, so that it's id can be
// passed into acceptIcomingRequest and rejectIncomingRequest later on
export async function getOutgoingRequests() {
  const q =  query(collection(db, 'requests'), where('from', '==', auth.currentUser.uid), where('status', '==', 'PENDING'));
  const output = [];
  (await getDocs(q)).forEach(item => {
    // updateDoc(item, {requestID: item.id})
    output.push(item.data());
  });
  console.log(output)
  return output;
}

// Gets all incoming requests currently received by this user.
// Also adds the current docID as a field, so that it's id can be
// passed into acceptIcomingRequest and rejectIncomingRequest later on
export async function getIncomingRequests() {
  const requests = await getDocs(query(collection(db, 'requests'), where('to', '==', auth.currentUser.uid), where('status', '==', 'PENDING')));
  const output = [];
  requests.forEach(item => {
    // updateDoc(item, {requestID: item.id})
    output.push(item.data());
  });
  return output;
}

// Updates the request status to be accepted, and sends a message with contactInfo
// Also creates a new appointment with the student
export async function acceptIncomingRequest(requestId) {
  const requestDocRef = doc(db, `requests/${requestId}`)
  const requestDocRefData = (await getDoc(requestDocRef)).data();
  await createNewAppointment(requestDocRefData.from, requestDocRefData.to);
  return updateDoc(requestDocRef, {
    status: 'ACCEPTED',
    TutorContactInfo: (await getDoc(doc(db, `users/${auth.currentUser.uid}`))).data().contactInfo,
  })
}

// Updates the request status to be rejected, and sends a message
export async function rejectIncomingRequest(requestId) {
  const requestDoc = doc(db, `requests/${requestId}`)

  return updateDoc(requestDoc, {
    status: 'REJECTED',
  })
}

// Creates new appointment
async function createNewAppointment(student, tutor) {
  const docRef = await addDoc(collection(db, 'appointments'), {
    student: student,
    tutor: tutor,
    done: false,
    timeCreated: serverTimestamp(),
  })
  return updateDoc(docRef, {
    appointmentId: docRef.id,
  })
}

// Gets all current active appointments, where current user is the Student
// Also adds the current docID as a field, so that it's id can be
// passed into finishAppointment() later on
export async function getStudentAppointments() {
  const apts = await getDocs(query(collection(db, 'appointments'), where('student', '==', auth.currentUser.uid)));
  const output = [];
  apts.forEach(item => {
    output.push(item.data());
  })
  return output;
}

// Gets all current active appointments, where current user is the Tutor
// Also adds the current docID as a field, so that it's id can be
// passed into finishAppointment() later on
export async function getTutorAppointments() {
  const apts = await getDocs(query(collection(db, 'appointments'), where('tutor', '==', auth.currentUser.uid)));
  const output = [];
  apts.forEach(item => {
    output.push(item.data());
  })
  return output;
}

// Updates the Appointment status to done, only student can access
// Also rates the tutor
export async function finishAppointment(appointmentId, stars, review) {
  const appointmentDocRef = doc(db, `appointments/${appointmentId}`);
  const appointmentDoc = (await getDoc(appointmentDocRef)).data()
  const tutorDocRef = doc(db, `users/${appointmentDoc.tutor}`);
  
  // Finish appointment
  updateDoc(appointmentDocRef, {
    done: true,
    timeFinished: serverTimestamp(),
  })

  // Rate Tutor
  return updateDoc( tutorDocRef, {
    completedSessions: increment(1),
    totalStars: increment(stars),
    reviews: arrayUnion({
      stars: stars,
      review: review,
    })
  })
}

export async function cancelAppointment(appointmentId) {
  const docRef = doc(db, `appointments/${appointmentId}`);
  return deleteDoc(docRef);
}