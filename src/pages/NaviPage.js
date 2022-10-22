import {React ,useState} from 'react'
import '../index.css';
import TutorContainer from '../components/TutorContainer'
import {GoSettings} from 'react-icons/go'
import Popup from '../components/Popup';
import { SelectionButton } from '../components/SelectionButtons';


export default function NaviPage() {

  {/*

  */}

  const [popup, isPopup] = useState(false);
  const [selects, setSelects] = useState();

  return (
    <div className = "navi-page">
      <div className = "navi-inner">
        <input className = "search-bar" type = "text" placeholder = "Search tutor"></input>
          
        <div className = "navi-page-tutor-label">
          <label> Tutor </label>
          <button onClick = {() => isPopup(true)}><GoSettings size = {25} className = "goSettings" /></button>
        </div>

        <div className = "tutor-grid">
          <TutorContainer></TutorContainer>
          <TutorContainer></TutorContainer>
        </div>

        <Popup trigger = {popup} setTrigger = {isPopup}>
          <SelectionButton></SelectionButton>
          <p id = "select-label"> Find by course </p>
          <select value = {selects} onChange = {e => setSelects(e.target.value)}>
            <option value = "" disabled selected> Select a course </option>
             {/* Will use map to parse the courses later*/}
          </select>
        </Popup>
      </div>


    </div>
  )
}
