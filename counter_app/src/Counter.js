import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const increment = () => {
        setCount(count + 1);
        setErrorMessage('');
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            setErrorMessage('');
        } else {
            setErrorMessage('Count cannot go below zero!');
        }
    };

    return (
        <div className="counter-container">
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default Counter;


