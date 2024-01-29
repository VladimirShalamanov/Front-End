import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const onResetCounterClick = () => {
        setCount(0);
    };

    const onDecrementClick = () => {
        setCount(count - 1);
    };

    const onIncrementClick = () => {
        setCount(count + 1);
    };

    let message = null;

    switch (count) {
        case 0:
            message = 'zero'
            break;
        case 1:
            message = 'one'
            break;
        case 2:
            message = 'two'
            break;
        case 3:
            message = 'three'
            break;
        case 4:
            message = 'four'
            break;
        case 5:
            message = 'five'
            break;
        case 6:
            message = 'six'
            break;
        case 7:
            message = 'seven'
            break;
        case 8:
            message = 'eight'
            break;
        case 9:
            message = 'nine'
            break;
        case 10:
            message = 'ten'
            break;
        default:
            message = 'The words are from 1 to 10!'
    }

    return (
        <div>
            <h1>Counter</h1>

            {count <= 0
                ? <p>Invalid count!</p>
                : <p>You can increment or decrement.</p>
            }

            {count == 0 && <p>Please start increment.</p>}

            <p>Count: {count}</p>
            <h3>{message}</h3>

            <button disabled={count < 0} onClick={onDecrementClick}>-</button>
            <button disabled={count == 0} onClick={onResetCounterClick}>Reset</button>
            <button disabled={count > 10} onClick={onIncrementClick}>+</button>
        </div>
    );
}