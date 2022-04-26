import React, { useState,useRef } from "react";


const Input = ({setCitiesList}) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const handleOnClick = () => {
        setCitiesList((currentArray) => [...currentArray, inputValue]);
        setInputValue('');
        inputRef.current.focus();
    }
    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="city-input">
            <input className="city-input-text" value={inputValue} onChange={handleOnChange} ref={inputRef}/>
            <button className="city-add-button" onClick={handleOnClick}>+</button>
        </div>
    );
};

export default Input;