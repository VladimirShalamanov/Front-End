import { useRef } from 'react';
import './App.css';

import ControlledFormRaw from './components/ControlledFormRaw';
// import UncontrolledForm from './components/UncontrolledForm';
// import ControlledForm from './components/ControlledForm';

function App() {
    const formRef = useRef({});

    return (
        <>
            <ControlledFormRaw formRef={formRef} />

            <button
                type="button"
                onClick={() => formRef.current.requestSubmit()}
            >Submit</button>
        </>
    )
}

export default App;