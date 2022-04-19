import React from "react";
import { useState }  from "react";

const Input = () => {
    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }
    const handleOnClick = (value) => {
        console.log('handleOnClick');
    }
    return (
        <div className="city-input">
            <input className="city-input-text" type="text" value={inputValue} autoComplete="disabled" placeholder="Brest" onChange={handleOnChange} />
            <button className="city-add-button" onClick={handleOnClick}>+</button>
        </div>
    );
};

export default Input;