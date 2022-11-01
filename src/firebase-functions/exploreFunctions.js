import { doc, collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import { auth, db } from '../firebase'

export async function searchByCourseAndSchool(course, school) {
  const q = query(collection(db, 'users'), where('school', '==', school), where('courses', 'array-contains', course), where('uid', '!=', auth.currentUser.uid))
  const output = [];
  (await getDocs(q)).forEach(doc => {
    output.push(doc.data());
  })
  return output;
}

export async function searchByCourse(course) {
  const q = query(collection(db, 'users'), where('courses', 'array-contains', course), where('uid', '!=', auth.currentUser.uid))
  const output = [];
  (await getDocs(q)).forEach(doc => {
    output.push(doc.data());
  })
  return output;
}

export async function searchBySchool(school) {
  const q = query(collection(db, 'users'), where('school', '==', school), where('uid', '!=', auth.currentUser.uid))
  const output = [];
  (await getDocs(q)).forEach(doc => {
    output.push(doc.data());
  })
  return output;
}