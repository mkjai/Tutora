import React from 'react';
import LoginForm from './pages/LoginForm.js';
import Signup from './pages/Signup.js';
import SignupCont from './pages/SignupCont.js';
import NaviPage from './pages/NaviPage.js';
import SchedulePage from './pages/SchedulePage';
import RequestPage from './pages/RequestPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingPage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import { AuthProvider } from "./AuthContext";

import Navbar from './components/Navbar';
import './index.css';

function App() {
    return (
    <AuthProvider>
        <Router>
            <Navbar />
            <Routes>
                <Route path = "/login" element = {<LoginForm/>} exact />
                <Route path = "/signup" element = {<Signup/>} exact />
                <Route path = "/signup/cont" element = {<SignupCont/>} exact />
                <Route path = "/" element = {<NaviPage/>} exact />
                <Route path = "/schedule-page" element = {<SchedulePage/>} exact />
                <Route path = "/request-page" element = {<RequestPage/>} exact />
                <Route path = "/profile-page" element = {<ProfilePage/>} exact />
                <Route path = "/setting-page" element = {<SettingPage/>} exact />
            </Routes>
        </Router>
    </AuthProvider>
    );
}

export default App