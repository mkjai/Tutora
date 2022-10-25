import React from 'react';
import LoginForm from './pages/LoginForm.js';
import Signup from './pages/Signup.js';
import ProfileCreation from './pages/ProfileCreation.js';
import NaviPage from './pages/NaviPage.js';
import SchedulePage from './pages/SchedulePage';
import RequestPage from './pages/RequestPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { AuthProvider, useAuth} from "./AuthContext";

import Navbar from './components/Navbar';
import './index.css';

import ErrorMsg from './components/ErrorMsg.js';
import PrivateRoute from './components/PrivateRoute';
import ProfileRouter from './components/ProfileRouter.js';

function App() {
    return (
    <AuthProvider>
        <Router>
            <ErrorMsg />
            {useAuth() && <Navbar />}
            <Routes>
                <Route path = "/login" element = {<LoginForm/>} exact />
                <Route path = "/signup" element = {<Signup/>} exact />
                <Route path = "/profile-create" element = {<PrivateRoute><ProfileCreation/></PrivateRoute>} exact />
                <Route path = "/" element = {<PrivateRoute><ProfileRouter><NaviPage/></ProfileRouter></PrivateRoute>} exact />
                <Route path = "/schedule-page" element = {<PrivateRoute><ProfileRouter><SchedulePage/></ProfileRouter></PrivateRoute>} exact />
                <Route path = "/request-page" element = {<PrivateRoute><ProfileRouter><RequestPage/></ProfileRouter></PrivateRoute>} exact />
                <Route path = "/profile-page" element = {<PrivateRoute><ProfileRouter><ProfilePage/></ProfileRouter></PrivateRoute>} exact />
                <Route path = "/setting-page" element = {<PrivateRoute><ProfileRouter><SettingPage/></ProfileRouter></PrivateRoute>} exact />
            </Routes>
        </Router>
    </AuthProvider>
    );
}

export default App