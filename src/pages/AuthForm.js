import React, {useState, useEffect} from 'react'
import Signup from './Signup'
import ProfileCreation from './ProfileCreation'
import '../components/Authenication/signupForm.css'
import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from '../AuthContext'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'

export default function AuthForm() {
    const { currentUser} = useAuth();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: ""
    })

    // const password = {password};
    // const passwordConf = {passwordConf};

    const handleChange = (input) => (e) => {
        setSignupData({...signupData, [input]: e.target.value})
    }


    const nextPage = () => {
        setPage(page+1);
    }

    const prevPage = () => {
        setPage(page-1);
    }

    useEffect(() => {
        if (currentUser) {
        navigate("/");
        }
    }, [currentUser, navigate]);

    switch (page) {
        case 1:
            return (
                <div>
                    <Signup 
                        nextPage = {nextPage} handleChange = {handleChange}
                        values = {signupData}></Signup>
                </div>
                );
        case 2:
            return (
                <div>
                    <ProfileCreation
                        prevPage = {prevPage} handleChange = {handleChange}
                        values = {signupData}>

                    </ProfileCreation>
                </div>
                );
        default:
            return (<div></div>);
    }
}