import { useState } from 'react';

const PersonInfo = () => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('Message: Hello!');
    };

    return (
        <div id="person-info" className="person-info">
            <h1>Name: Ivan Ivanov</h1>
            <p>Position: Developer</p>
            <p>Company: TechCorp</p>
            <p>City: Bishkek</p>
            <p>Age: 25</p>
            <p>Hobbies: Programming</p>
            <button id="change-position-button" onClick={handleClick}>Click me</button>
            {message && <p>{message}</p>}
        </div>
    );
};
