import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { arrayUnion, doc, getFirestore, writeBatch } from "firebase/firestore"

import { app } from "../firebase"

const auth = getAuth(app);
const db = getFirestore(app);


