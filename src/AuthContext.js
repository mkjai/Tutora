import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile} from "firebase/auth";
import { arrayUnion, doc, getDoc, getDocs, collection, query, where, writeBatch, setDoc } from "firebase/firestore";

import {auth, db} from "./firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signout() {
      return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        setLoading(false);
        });

        return unsubscribe;
    }, []);

    
    const value = {
        currentUser,
        login,
        register,
        error,
        setError,
        signout
    };

    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    );
}

export async function createUserProfile(profileMap) {
  updateProfile(auth.currentUser, {
    displayName: profileMap.name
  })
  return setDoc(doc(db, `users/${auth.currentUser.uid}`), profileMap);
}

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
