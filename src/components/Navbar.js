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
                        <img class = "nav-logo-non-mobile" src = {navLogo} alt = ''/>
                            <div className = "navlinks">
                                <NavLink exact style = {({isActive}) => (isActive ? {color: "#00867D"} : {color: "#000"})} onClick = {showNavbar} to = "/" end> Explore </NavLink>


                                <NavLink exact style = {({isActive}) => (isActive ? {color: "#00867D"} : {color: "#000"})} onClick = {showNavbar} to = "/schedule-page"> Schedule </NavLink>


                                <NavLink exact style = {({isActive}) => (isActive ? {color: "#00867D"} : {color: "#000"})} onClick = {showNavbar} to = "/request-page"> Requests </NavLink>

                                <NavLink exact style = {({isActive}) => (isActive ? {color: "#00867D"} : {color: "#000"})} onClick = {showNavbar} to = "/profile-page"> Profile </NavLink>

                                <NavLink exact style = {({isActive}) => (isActive ? {color: "#00867D"} : {color: "#000"})} onClick = {showNavbar} to = "/setting-page"> Settings </NavLink>
                            </div>
                        <button className = "nav-btn nav-close-btn" onClick = {showNavbar}><GrClose/></button>

                </nav>
                <div className = "mobile-container">
                    <img class = "nav-logo" src = {navLogo} alt = ''/>
                    <button className = "nav-btn" onClick = {showNavbar}><FaBars/></button>
                </div>
        </header>
    )
}

export default Navbar