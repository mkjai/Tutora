import React from 'react'
import '../index.css';

export default function SettingPage() {
    return (
        <div className = "setting-page">
            <div className = "setting-page-inner">
                <label> Settings </label>

                <div className = "setting-buttons">
                    <button> Account </button>
                    <button> Help and Support </button>
                    <button> About </button>
                </div>
            </div>
        </div>
    )
}