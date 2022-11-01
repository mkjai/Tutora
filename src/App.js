import React from 'react';
import Login from './pages/Login.js';
import AuthForm from './pages/AuthForm.js'
import NaviPage from './pages/NaviPage.js';
import SchedulePage from './pages/SchedulePage';
import RequestPage from './pages/RequestPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingPage';
import ReviewPage from './pages/ReviewPage'
import ProfileEditPage from './pages/ProfileEditPage.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import WithNav from './components/WithNav.js';
import WithoutNav from './components/WithoutNav.js';
import OtherUserProfile from './pages/OtherUserProfile.js';

import { AuthProvider, useAuth} from "./AuthContext";

import './index.css';

import ErrorMsg from './components/ErrorMsg.js';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
    <AuthProvider>
        <Router>
            <ErrorMsg />
            <Routes>
                <Route element = {<WithoutNav/>}>
                    <Route path = "/login" element = {<Login/>} exact />
                    <Route path = "/signup" element = {<AuthForm/>} exact />
                </Route>
                <Route element = {<WithNav />}>
                    <Route path = "/" element = {<PrivateRoute><NaviPage/></PrivateRoute>} exact />
                    <Route path = "/schedule-page" element = {<PrivateRoute><SchedulePage/></PrivateRoute>} exact />
                    <Route path = "/request-page" element = {<PrivateRoute><RequestPage/></PrivateRoute>} exact />
                    <Route path = "/profile-page" element = {<PrivateRoute><ProfilePage/></PrivateRoute>} exact />
                    <Route path = "/edit" element = {<PrivateRoute><ProfileEditPage/></PrivateRoute>} exact />
                    <Route path = "/reviews" element = {<PrivateRoute><ReviewPage/></PrivateRoute>} exact />
                    <Route path = "/setting-page" element = {<PrivateRoute><SettingPage/></PrivateRoute>} exact />
                    <Route path = "/profile/:id" element = {<PrivateRoute><OtherUserProfile/></PrivateRoute>} exact />
                </Route>
            </Routes>
        </Router>
    </AuthProvider>
    );
}

export default App