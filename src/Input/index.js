import React from "react";
import useState from "react";

const Input = () => {

    const currentDate = new Date().toDateString();
    const handleOnChange = (event) => {
        console.log('event', event);
        console.log('handleOnChange');
        console.log('value is', event.target.value);
    }
    const handleOnClick = (value) => () => {
        console.log('handleOnClick');
        console.log('button was clicked in ', value);
    }
    return (
        <div className="city-input">
            <input className="city-input-text" type="text" placeholder="Brest" autoComplete="disabled" onChange={handleOnChange}   />
            <button className="city-add-button" onClick={handleOnClick(currentDate)}>+</button>
        </div>
    );
};

export default Input;