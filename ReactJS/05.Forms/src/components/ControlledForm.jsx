import { useState } from "react";

export default function ControlledForm() {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPassworValue] = useState('');
    const [ageValue, setAgeValue] = useState('');

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);
    }

    const resetFormHandler = () => {
        setUsernameValue('');
        setPassworValue('');
        setAgeValue('');
    }

    const passwordChangeHandler = (e) => {
        setPassworValue(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setAgeValue(Number(e.target.value));
    }

    const submitHandler = () =>{
        console.log(usernameValue);
        console.log(passwordValue);
        console.log(ageValue);

        resetFormHandler();
    }

    return (
        <>
            <h1>Controlled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={usernameValue}
                        onChange={usernameChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={passwordValue}
                        onChange={passwordChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={ageValue}
                        onChange={ageChangeHandler}
                    />
                </div>
                <div>
                    <button type="button" onClick={submitHandler}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </>
    );
}