import {useEffect, useReducer} from "react";

const initState = {
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
    return [citiesList, dispatch];
}