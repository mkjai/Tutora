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

// testing
import Testing from './pages/Testing'
import Navbar from './components/Navbar';
import './index.css';

function App() {
    return (
    // <Router>
    //     {/* <Navbar /> */}
    //     <Routes>
    //         {/* testing */}
    //         <Route path = "/testing" element = {<Testing />} exact />

    //         <Route path = "/login" element = {<LoginForm/>} exact />
    //         <Route path = "/signup" element = {<Signup/>} exact />
    //         <Route path = "/signup/cont" element = {<SignupCont/>} exact />
    //         <Route path = "/" element = {<NaviPage/>} exact />
    //         <Route path = "/schedule-page" element = {<SchedulePage/>} exact />
    //         <Route path = "/request-page" element = {<RequestPage/>} exact />
    //         <Route path = "/profile-page" element = {<ProfilePage/>} exact />
    //         <Route path = "/setting-page" element = {<SettingPage/>} exact />
    //     </Routes>
    // </Router>
    <Testing />
    );
}

export default App