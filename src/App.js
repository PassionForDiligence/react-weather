import React from "react";

import './App.css';

import Input from './Input/Input';
import CardList from "./Card List/CardList";
import {useCitiesList} from "./hooks/useCitiesList";

const App = () => {
    const [citiesList, dispatch] = useCitiesList();
    return (
      <div className="container">
        <Input dispatch = {dispatch}/>
        <CardList citiesList={citiesList} dispatch={dispatch}/>
      </div>
  );
};

export default App;
