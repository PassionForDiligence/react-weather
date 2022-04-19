import React from "react";

const Input = () => {
    return (
        <div className="city-input">
            <input className="city-input-text" type="text" placeholder="Brest" autoComplete="disabled"/>
            <button className="city-add-button">+</button>
        </div>
    );
};

export default Input;