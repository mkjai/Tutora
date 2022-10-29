import {React ,useState} from 'react'
import ReviewContainer from '../components/ReviewContainer';
import { useNavigate, Link} from 'react-router-dom';
import '../index.css';
import {BiArrowBack} from 'react-icons/bi'

export default function ReviewPage() {

    const navigate = useNavigate();


    return (
        <div className = "review-page">
            <div className = 'review-page-inner'>
                <div className = 'review-top'>
                    <Link to ='/profile-page' style = {{textDecoration: 'none', color: 'black'}}>
                        <BiArrowBack 
                            size ={30} className = 'review-back'
                            style = {{cursor: 'pointer'}}
                        ></BiArrowBack>
                    </Link>

                        <div className = 'review-label'>
                            <p> Reviews </p>
                        </div>

                </div>

                <div className = "review-grid">
                    <ReviewContainer></ReviewContainer>
                    <ReviewContainer></ReviewContainer>
                </div>
            </div>

        </div>
    )
}
