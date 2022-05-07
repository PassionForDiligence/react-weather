import React, { useState,useRef, useMemo} from "react";

const Input = ({setCitiesList}) => {
    const [inputValue, setInputValue] = useState('');
    const [someValue, setSomeValue] = useState(0);
    const inputRef = useRef(null);

    const handleOnClick = () => {
        setCitiesList((currentArray) => [...currentArray, inputValue]);
        setInputValue('');
        inputRef.current.focus();
    }
    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }
    
    const onSomeCLick = () => {
        setSomeValue((someValue) => someValue + 1);
    }
    const oldInputValue = useMemo(() => `${inputValue}_${Math.random()}`, [inputValue]);
    console.log('input value', inputValue);
    console.log('old input value', oldInputValue);
    console.log('from render', `${inputValue}_${Math.random()}`);
    console.log('some value', someValue);

    return (
        <div className="city-input">
            <input className="city-input-text" onClick={onSomeCLick} value={inputValue} onChange={handleOnChange} ref={inputRef}/>
            <button className="city-add-button" onClick={handleOnClick}>+</button>
        </div>
    );
};

export default Input;