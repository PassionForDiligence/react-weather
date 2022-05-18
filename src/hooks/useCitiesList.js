import {useEffect, useReducer} from "react";

const initState = {
    inputValue: '',
    editingCity: '',
    citiesList: JSON.parse(localStorage.getItem('citiesList')) || [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            const newState = {...state, citiesList: [...state.citiesList, action.payload]};
            return newState;
        }
        case 'DELETE_CITY': {
            const oldArray = state.citiesList;
            const newArray = oldArray.filter(element => element !== action.payload);
            return {...state, citiesList: newArray };
        }
        case 'EDIT_CITY': {
            return {
                ...state,
                inputValue: action.payload,
                editingCity: action.payload,
            };
        }
        case 'EDIT_CITY_DONE': {
            const { editingCity } = state;
            const oldArray = state.citiesList;
            const filteredArray = oldArray.filter(element => element !== editingCity);
            const newArray = [...filteredArray, action.payload];
            return {
                ...state,
                citiesList: newArray,
                inputValue: initState.inputValue,
                editingCity: initState.editingCity,
            };
        }
        case 'CHANGE_INPUT_VALUE': {
            return {...state, inputValue: action.payload };
        }
        case 'RESET_INPUT_VALUE': {
            return {...state, inputValue: initState.inputValue };
        }
        default:
            return initState;
    }
}

export const useCitiesList = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { citiesList } = state;

    useEffect(() => {
        localStorage.setItem('citiesList',JSON.stringify(citiesList));
    },[citiesList]);
    return [state, dispatch];
}