import React from 'react';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import ProfileCreation from './pages/ProfileCreation';
import ProfileUpdate from './pages/ProfileUpdate'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/create-profile" element={<ProfileCreation/>}></Route>
                <Route path="/update-profile" element={<ProfileUpdate />}></Route>
                <Route path="/explore" element={<Explore/>}></Route>
            </Routes>
        </BrowserRouter>
        // <Welcome />
    );
}

export default App