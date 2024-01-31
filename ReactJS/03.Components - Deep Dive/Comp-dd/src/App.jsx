import React, { useState, useEffect } from 'react';

import Starwars from './Starwars';
import './App.module.css';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Update Numbers - ${numbers.length}`)
    }, [numbers]);

    useEffect(() => {
        console.log(`Update Count - ${count}`)
    }, [count]);

    const onClick = () => {
        setNumbers(oldState => oldState.slice(0, numbers.length - 1));
    }

    if (!numbers.length) {
        return (
            <div>
                <h1>Empty container!</h1>
                <h2>Please reflesh.</h2>
            </div>
        );
    }

    return (
        <div>
            <Starwars />

            <h2>Count: {count}</h2>

            <ul>
                {numbers.map((number, i) => (
                    <li key={i}>
                        {number * 2}
                    </li>)
                )}
            </ul>

            <button onClick={onClick}>Remove</button>
            <button onClick={() => setCount(c => c + 1)}>+</button>
        </div>
    );
}

export default App
