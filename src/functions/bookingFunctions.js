import { addDoc, arrayUnion, collection, getDoc, getDocs, increment, query, serverTimestamp, updateDoc, where } from 'firebase/firestore'
import { auth, db } from '../firebase'

const uid = auth.currentUser.uid;
const userDoc = (await getDoc(doc(db, `users/${uid}`))).data();

// Creates new outgoing request to a tutor, with a message to tutor
export async function createOutgoingRequest(to, message) {
  return addDoc(collection(db, 'requests'), {
    to: to,
    from: uid,
    timeCreated: serverTimestamp(),
    status: 'PENDING',
    messageToTutor: message,
    StudentContactInfo: userDoc.contactInfo,
  })  
}

// Gets all outgoing requests currently made by this user.
// Also adds the current docID as a field, so that it's id can be
// passed into acceptIcomingRequest and rejectIncomingRequest later on
export async function getOutgoingRequests() {
  const requests = await getDocs(query(collection('requests'), where('from', '==', uid)));
  const output = [];
  requests.forEach(item => {
    updateDoc(item, {requestID: item.id})
    output.push(item.data());
  });
  return output;
}

// Gets all incoming requests currently received by this user.
// Also adds the current docID as a field, so that it's id can be
// passed into acceptIcomingRequest and rejectIncomingRequest later on
export async function getIncomingRequests() {
  const requests = await getDocs(query(collection('requests'), where('to', '==', uid)));
  const output = [];
  requests.forEach(item => {
    updateDoc(item, {requestID: item.id})
    output.push(item.data());
  });
  return output;
}

// Updates the request status to be accepted, and sends a message with contactInfo
// Also creates a new appointment with the student
export async function acceptIncomingRequest(requestID, message) {
  const studentID = (await getDoc(doc(db, `requests/${requestID}`))).data().from;
  await createNewAppointment(studentID, uid);
  return updateDoc(doc(db, `requests/${requestID}`), {
    status: 'ACCEPTED',
    messageToStudent: message,
    TutorContactInfo: userDoc.contactInfo,
  })
}

// Updates the request status to be rejected, and sends a message
export async function rejectIncomingRequest(requestID, message) {
  return updateDoc(doc(db, `requests/${requestID}`), {
    status: 'REJECTED',
    messageToStudent: message,
  })
}

// Creates new appointment
async function createNewAppointment(student, tutor) {
  return addDoc(collection(db, 'appointments'), {
    student: student,
    tutor: tutor,
    done: false,
    timeCreated: serverTimestamp(),
  })
}

// Gets all current active appointments, where current user is the Student
// Also adds the current docID as a field, so that it's id can be
// passed into finishAppointment() later on
export async function getStudentAppointments() {
  const apts = await getDocs(query(collection('appointments'), where('student', '==', uid)));
  const output = [];
  apts.forEach(item => {
    updateDoc(item, {appointmentID: item.id});
    output.push(item.data());
  })
  return output;
}

// Gets all current active appointments, where current user is the Tutor
// Also adds the current docID as a field, so that it's id can be
// passed into finishAppointment() later on
export async function getTutorAppointments() {
  const apts = await getDocs(query(collection('appointments'), where('tutor', '==', uid)));
  const output = [];
  apts.forEach(item => {
    updateDoc(item, {appointmentID: item.id});
    output.push(item.data());
  })
  return output;
}

// Updates the Appointment status to done, only student can access
// Also rates the tutor
export async function finishAppointment(appointmentID, stars, review) {
  const appointmentDoc = await getDoc(db, `appointments/${appointmentID}`);
  const tutorDoc = await getDoc(db, `users/${appointmentDoc.data().tutor}`);
  
  // Finish appointment
  updateDoc(appointmentDoc, {
    done: true,
    timeFinished: serverTimestamp(),
  })

  // Rate Tutor
  updateDoc( tutorDoc, {
    completedSessions: increment(1),
    totalStars: increment(stars),
    reviews: arrayUnion({
      stars: stars,
      review: review,
    })
  })
}