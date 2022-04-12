import React, { useState, useEffect } from 'react';
import Clock from './Clock';
import './Greeting.css';


function Greeting() {
    const [name, setName] = useState("user");
    return (
        <div>
            <h1>Hello {name}</h1>
            <Clock />
            <button id="changeUser" onClick={() => {
                setName("test");
            }}>Change Name</button>
        </div>
    )
}

export default Greeting;