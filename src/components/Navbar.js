import {React, useState, useRef, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import navLogo from '../assets/navLogo.png';
import './Home/navbar.css';
import {FaBars} from 'react-icons/fa';
import {GrClose} from 'react-icons/gr';

const Navbar = () => {


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
                <nav ref = {navRef}>
                    <ul>
                        <img class = "nav-logo" src = {navLogo} alt = ''/>
                        <li>
                            <NavLink exact activeClassName = "active-link" to = "/"> Explore </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName = "active-link" to = "/schedule-page"> Schedule </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName = "active-link" to = "/request-page"> Requests </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName = "active-link" to = "/profile-page"> Profile </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName = "active-link" to = "/setting-page"> Settings </NavLink>
                        </li>
                        <button className = "nav-btn nav-close-btn" onClick = {showNavbar}><GrClose/></button>
                    </ul>

                </nav>
                <div className = "mobile-container">
                    <img class = "nav-logo-non-mobile" src = {navLogo} alt = ''/>
                    <button className = "nav-btn" onClick = {showNavbar}><FaBars/></button>
                </div>
        </header>
    )
}

export default Navbar