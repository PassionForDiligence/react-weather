import React, { useRef} from "react"; //deleted useMemo

const Input = ({ dispatch, inputValue }) => {
    const inputRef = useRef(null);

    const handleOnAdd = () => {
        if (inputValue.length) {
            dispatch({
                type: 'ADD_CITY',
                payload: inputValue,
            })
            dispatch({
                type: 'RESET_INPUT_VALUE',
            })
            inputRef.current.focus();
        }
    }

    const handleOnDone = () => {
        if (inputValue.length) {
            dispatch({
                type: 'EDIT_CITY_DONE',
                payload: inputValue,
            })
            dispatch({
                type: 'RESET_INPUT_VALUE',
            })
            inputRef.current.focus();
        }
    }

    const handleOnChange = (event) => {
        dispatch({
            type: 'CHANGE_INPUT_VALUE',
            payload: event.target.value,
        })
    }

    return (
        <div className="city-input">
            <input className="city-input-text" value={inputValue} onChange={handleOnChange} ref={inputRef} placeholder="write the city"/>
            <button className="city-add-button" onClick={handleOnAdd}>+</button>
            <button className="city-add-button" onClick={handleOnDone}>done</button>
        </div>
    );
};

export default Input;