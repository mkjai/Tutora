import React, {useState, useEffect} from 'react'
import Signup from './Signup'
import ProfileCreation from './ProfileCreation'
import '../components/Authenication/signupForm.css'
import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from '../AuthContext'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'

export default function AuthForm() {
    const [page, setPage] = useState(1);
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        school: "",
        courses: "",
        availability: "",
        bio: "",
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

    // const navigate = useNavigate();
    // const { currentUser, register, setError} = useAuth();
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (currentUser) {
    //     navigate("/");
    //     }
    // }, [currentUser, navigate]);

    // async function contHandler(e) {
    //     e.preventDefault();
    //     console.log(signupData);

    //     if (signupData.password !== signupData.passwordConf) {
    //         return setError("Password not matching");
    //     }

    //     try {
    //     setLoading(true);
    //     await setPage((currPage) => currPage + 1);
    //     } catch (e) {
    //     setError("Cannot go to next page");
    //     }

    //     setLoading(false);
    // }

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