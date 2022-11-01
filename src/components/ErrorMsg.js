
import { VscError } from "react-icons/vsc";

import { useAuth } from "../AuthContext";

import React, {useEffect, useState} from 'react'

export default function ErrorMsg() {
  const { error, setError } = useAuth();

    const STYLES = {
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#DC143C',
        padding: '2rem',
        borderRadius: '5px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        flexDirection: 'row',
        width: '30rem',
        fontSize: '2rem',
        gap: '1rem'
    }
    const COLOR = {color: "#fff"}


    const [showElement, setShowElement] = useState(true);
    useEffect(() => {
      setTimeout(function() {
        setShowElement(false)
      }, 5000);
    },[])

  return (
    error && (
        <div> {showElement?
                <div style = {STYLES}>
                    <VscError
                        onClick = {() => setError("")}
                        aria-hidden = "true"
                        size = {20}
                        style = {COLOR}
                    />
                    <h3 style = {COLOR}>
                    Error: {error}
                    </h3>
                </div>
            :<></>}
        </div>
    )
  );
}