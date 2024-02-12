import { useEffect, useRef, useState } from "react";

import styles from './ControlledFormRaw.module.css';

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: 'f',
    swimming: false,
    shopping: false,
    running: false,
};

export default function ControlledFormRaw({ formRef }) {
    const usernameInputRef = useRef(false);
    const isMountedRef = useRef();

    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    // Only on update
    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }

        console.log('Form is updated');
    }, [formValues]);

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValues);

        resetFormHandler();
    };

    const onCheckboxChange = (e) => {
        let value = '';

        switch (e.target.type) {
            case 'number':
                value = Number(e.target.value);
                break;
            case 'checkbox':
                value = e.target.checked;
                break;
            default:
                value = e.target.value;
                break;
        }

        setFormValues(state => ({
            ...state,
            [e.target.name]: value,
        }));
    };

    const ageValidator = (e) => {
        console.log(formValues.age);

        if (formValues.age < 0 || formValues.age > 120) {
            setErrors(state => ({
                ...state,
                age: 'Age should be between 0 and 120!',
            }));
        } else {
            if (errors.age) {
                setErrors(state => ({
                    ...state,
                    age: '',
                }));
            }
        }
    }

    return (
        <>
            <h1>Controlled Form</h1>

            <form ref={formRef} onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        ref={usernameInputRef}
                        type="text"
                        name="username"
                        id="username"
                        value={formValues.username}
                        onChange={changeHandler}
                        onBlur={() => console.log('blur')}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={formValues.age}
                        onChange={changeHandler}
                        onBlur={ageValidator}
                        className={errors.age && styles.inputError}
                    />
                    {errors.age && (
                        <p className={styles.errorMessage}>{errors.age}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" value={formValues.gender} onChange={changeHandler}>
                        <option value="f">F</option>
                        <option value="m">M</option>
                    </select>
                </div>

                <div>
                    <h3>Hobbies</h3>

                    <label htmlFor="swimming">Swimming</label>
                    <input
                        type="checkbox"
                        name="swimming"
                        id="swimming"
                        checked={formValues.swimming}
                        onChange={onCheckboxChange}
                    />

                    <label htmlFor="shopping">Shopping</label>
                    <input
                        type="checkbox"
                        name="shopping"
                        id="shopping"
                        checked={formValues.shopping}
                        onChange={onCheckboxChange}
                    />

                    <label htmlFor="running">Running</label>
                    <input
                        type="checkbox"
                        name="running"
                        id="running"
                        checked={formValues.running}
                        onChange={onCheckboxChange}
                    />
                </div>

                <div>
                    <button type="submit" disabled={Object.values(errors).some(e => e)} >Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                    {/* <button type="button" onClick={submitHandler}>Register</button> */}
                </div>
            </form>
        </>
    );
}