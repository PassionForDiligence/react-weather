import React from "react";

import './App.css';

import Input from './Input/Input';
import CardList from "./Card List/CardList";
import {useCitiesList} from "./hooks/useCitiesList";

const App = () => {
    const [state, dispatch] = useCitiesList();
    const { inputValue, citiesList } = state;
    return (
      <div className="container">
        <Input dispatch = {dispatch} inputValue={inputValue} />
        <CardList citiesList={citiesList} dispatch={dispatch}/>
      </div>
  );
};

export default App;
