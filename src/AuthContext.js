import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { arrayUnion, doc, writeBatch } from "firebase/firestore";

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
    };

    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
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