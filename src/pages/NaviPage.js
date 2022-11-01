import {React ,useState} from 'react'
import '../index.css';
import TutorContainer from '../components/TutorContainer'
import {GoSettings} from 'react-icons/go'
import Popup from '../components/Popup';
import { SelectionButton } from '../components/SelectionButtons';
import Select from 'react-select';
import makeAnimated from "react-select/animated";
import { useAuth} from '../AuthContext';
import { searchByCourseAndSchool, searchBySchool } from '../AuthContext';
import { auth, db } from '../firebase';
import { useEffect } from 'react';
import { createSearchParams, Link, useNavigate, useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { getCurrentUserData } from '../firebase-functions/bookingFunctions';
var options = require("../assets/COURSES.json");
var data = require("../assets/SCHOOLS.json");


const BUTTON_STYLES = {
    display: 'flex',
    height: '40px',
    width: '50%',
    padding: '0.5rem',
    marginBottom: '1rem',
    background: '#00867D',
    color: '#fff',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    borderRadius: '5px',
    border: 'none',
    marginTop: '1rem',
    
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1rem',
    fontSize: '1.5rem'
}




export default function NaviPage() {

  const [popup, isPopup] = useState(false);
  const [selects, setSelects] = useState();

  const navigate = useNavigate();

  const [tutorData, setTutorData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState([]);

  
  const animatedComponents = makeAnimated();
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState([]);
  const schoolChoice = selectedSchool.label;
  const courseChoice = selectedCourse.label;



  const fetchUserData = async () => {
  const response = await getCurrentUserData();
  setUserProfile(response);
  setSelectedSchool(response.defaultSchool);
  setIsLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, [])





    const fetchTutorData = async () => {
      console.log(courseChoice);
      console.log(schoolChoice);
        const response = await searchByCourseAndSchool(courseChoice,schoolChoice);
        setTutorData(response);
        setIsLoading(false);
    };


    function clickHandler() {
      fetchTutorData();
      isPopup(false);
    }




    const customStyle = {
        control: (base, state) => ({
            ...base,
            backgroundColor: "#F2F2F2",
            borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
            border: state.isFocused ? "0.2rem solid #00867D" : "none",
            "&:hover": {
                borderColor: state.isFocused ? "#00867D" : "#00867D",
            },
            boxShadow: state.isFocused ? null : null,
            width: 250,
        }),
            menu: (base, state) => ({
            ...base,
            borderRadius: 0,
            marginTop: 0,
            backgroundColor: state.isFocused ? "rgba(0,134,125, 0.4)" : "#F2F2F2"
            }),
            menuList: (base,state) => ({
            ...base,
            padding: 0,
            fontSize: "3rem",
            fontWeight: "700",
            backgroundColor: state.isFocused ? "rgba(0,134,125, 0.4)" : "#F2F2F2"
            }),
        groupHeading: based => ({
            ...based,
            color: '#00867D',
            fontWeight: 700,
            font: 'Nunito'
        }),
        input: based => ({
            ...based,
            color: "#999",
            fontSize: "1.5rem",
            fontWeight: 700
        }),
        multiValueLabel: based => ({
            ...based,
            color: "#999",
            fontSize: "1.5rem",
            fontWeight: 700
        }),
        singleValue: (based,state) => ({
            ...based,
            color: '#00867D',
            fontWeight: 700,
            font: 'Nunito',
            fontSize: '1.5rem',
            backgroundColor: state.isFocused ? "rgba(0,134,125, 0.4)" : "#F2F2F2"
        }),
        menuPortal: (based,state) => ({
            ...based,
            color: '#999',
            fontWeight: 700,
            font: 'Nunito',
            fontSize: '1.5rem',
            background: "F2F2F2",
            backgroundColor: state.isFocused ? "rgba(0,134,125, 0.4)" : "#F2F2F2"
        }),
        option: (based,state) => ({
            ...based,
            color: '#999',
            fontWeight: 700,
            font: 'Nunito',
            fontSize: '1.5rem',
            backgroundColor: state.isSelected ?  "rgba(0,134,125, 0.4)" : "F2F2F2",
            "&:hover": {
                background: "rgba(0,134,125, 0.4)",
                cursor: "pointer"
            },
        })
    }


  return (
    <div className = "navi-page">
      <div className = "navi-inner">
        <div className = "search-bar">
          <input id = "search-bar" type = "text" placeholder = "Search tutor"></input>
        </div>

        <div className = "navi-page-tutor-label">
          <label> Tutor </label>
          <button onClick = {() => isPopup(true)}><GoSettings size = {25} className = "goSettings" /></button>
        </div>

        {tutorData.length ?
        <div className = "tutor-grid">
          { tutorData.map((tutors) => {
            return(
                <Link style = {{textDecoration: 'none'}}
                  to = {`/profile/${tutors.uid}`} state = {{tutor: tutors}}
                >
                    <TutorContainer key = {tutors.uid} data = {tutors}></TutorContainer>
                </Link>)
          })}
        </div> : <p id = "navi-no"> Please choose a course </p>
        }

        <Popup trigger = {popup} setTrigger = {isPopup}>
          <p id = "select-label"> Find by course </p>
                <div className = "course-selection">
                    <Select multi
                        components = {animatedComponents}
                        options = {options}
                        onChange = {(item) => setSelectedCourse(item)}
                        defaultValue = {selectedCourse}
                        isClearable = {false}
                        isSearchable = {true}
                        isDisabled = {false}
                        isLoading = {false}
                        closeMenuOnSelect = {false}
                        styles = {customStyle}
                        placeholder = {<div className = "course-select"> <label>Choose a course </label> </div>}
                    >
                    </Select>
                </div>

            <p id = "select-label"> Find by school </p>
                <div className = "course-selection">
                    <Select multi
                        components = {animatedComponents}
                        options = {data}
                        onChange = {(item) => setSelectedSchool(item)}
                        defaultValue = {selectedSchool}
                        isClearable = {false}
                        isSearchable = {true}
                        isDisabled = {false}
                        isLoading = {false}
                        closeMenuOnSelect = {false}
                        styles = {customStyle}
                        placeholder = {<div className = "course-select"> <label>Choose a school </label> </div>}
                    >
                    </Select>
                </div>

              <button style = {BUTTON_STYLES} onClick = {clickHandler}> Continue </button>
        </Popup>
      </div>


    </div>
  )
}
