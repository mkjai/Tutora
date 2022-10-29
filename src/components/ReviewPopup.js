import {React, useState} from 'react'
import ReactDom from 'react-dom'
import './Home/popup.css'
import { FaStar } from "react-icons/fa";



const STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '3rem',
    borderRadius: '5px',
    zIndex: 1000,

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '30rem'

}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    zIndex: 1000
}

const CONF_BUTTON_STYLES = {
    display: 'flex',
    height: '40px',
    width: '50%',
    padding: '0.5rem',
    background: '#00867D',
    color: '#fff',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    borderRadius: '5px',
    border: 'none',
    marginBottom: '1rem',
    marginTop: '2rem',
    
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1rem',
    fontSize: '1.5rem'
}

const CANCEL_BUTTON_STYLES = {
    display: 'flex',
    height: '40px',
    width: '50%',
    padding: '0.5rem',
    background: '#f2f2f2',
    color: '#00867D',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    borderRadius: '5px',
    border: 'none',
    
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1rem',
    fontSize: '1.5rem'
}


function ReviewPopup(props) {


    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);

    const handleClick = (value) => {
        setCurrentValue(value);
    };

    const handleMouseOver = (newHoverValue) => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    const [reviewText, setReviewText] = useState("");

    const [characterLimit] = useState(150);

    const handleReview = event => {
        setReviewText(event.target.value);
    };

  return (
    props.trigger) ? (

    <div style = {OVERLAY_STYLES}>
        <div clasName = "booking-review-popup-inner" style = {STYLES}>

            <label className = "booking-review-popup-inner-label"> Rating </label>
            <div className = "review-stars">
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key = {index}
                            size = {30}
                            onClick = {() => handleClick(index + 1)}
                            onMouseOver = {() => handleMouseOver(index + 1)}
                            onMouseLeave = {handleMouseLeave}
                            color = {
                                (hoverValue || currentValue) > index
                                    ? "#FFCB45"
                                    : "#F2F2F2"
                            }
                            style = {{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                        />
                    )
                })}
            </div>

            <div className = "booking-review-text-container">
                <textarea value = {reviewText} onChange = {handleReview} maxLength = {150} placeholder = "How's your experience"></textarea>
                <h2> {reviewText.length}/{characterLimit} Characters </h2>
            </div>

            <button style = {CONF_BUTTON_STYLES}> Confirm </button>
            <button style = {CANCEL_BUTTON_STYLES} onClick = {() => props.setTrigger(false)}> Cancel </button>

        </div>
    </div>
  ) : "";
}

export default ReviewPopup