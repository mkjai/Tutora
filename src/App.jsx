import React from 'react';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import ProfileCreation from './pages/ProfileCreation';
import ProfileUpdate from './pages/ProfileUpdate'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import { auth } from './firebase'
import { db } from './firebase'
import { getDoc } from 'firebase/firestore';
import Requests from './pages/Requests';

// const currentUserDoc = await getDoc(db, `users/${auth.currentUser.uid}`)
// const currentUserName = currentUserDoc.data().name;

function App() {
    return (
        <div className="app">
            {/* <p>{currentUserName}</p> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/create-profile" element={<ProfileCreation/>}></Route>
                    <Route path="/update-profile" element={<ProfileUpdate />}></Route>
                    <Route path="/explore" element={<Explore/>}></Route>
                    <Route path="/requests" element={<Requests/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
        // <Welcome />
    );
}

export default App