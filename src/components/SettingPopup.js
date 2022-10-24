import React from 'react'
import ReactDom from 'react-dom'

const STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '20px',
    borderRadius: '5px',
    zIndex: 1000,

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50rem'

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

const BUTTON_STYLES = {
    display: 'flex',
    height: '40px',
    width: '30rem',
    padding: '0.5rem',
    marginBottom: '1rem',
    background: '#f2f2f2',
    color: '#00867D',
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


function SettingPopup(props) {
  return (
    props.trigger) ? (

    <div className = "popup" style = {OVERLAY_STYLES}>
        <div clasName = "popup-inner" style = {STYLES}>

            { props.children }
            <button className = "popup-button" style = {BUTTON_STYLES} onClick = {() => props.setTrigger(false)}> Close </button>

        </div>
    </div>
  ) : "";
}

export default SettingPopup