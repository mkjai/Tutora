import React from 'react';
import Signup from './pages/Signup';
import ProfileCreation from './pages/ProfileCreation';
import ProfileUpdate from './pages/ProfileUpdate'

function App() {
    return (
    <div className="App">    
        <Signup />
        <ProfileCreation />
        <ProfileUpdate />
    </div>
    );
}

export default App