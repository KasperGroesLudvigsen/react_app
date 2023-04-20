import { useState } from 'react';

export default function InputComponent() {

    let defaultState = "hello"

    const [inputText, setText] = useState(defaultState);

    // function declaration
    function handleChange(e) {
        setText(e.target.value);
    }
    
    return (

        <>
            <input value={inputText} onChange={handleChange} />
            <p> You typed: {inputText}</p>
            <button conClick={() => setText(defaultState)}>
                Reset
            </button>
        </>
    );
    