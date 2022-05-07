import React from "react";

import './App.css';

import Input from './Input/Input';
import CardList from "./Card List/CardList";
import {useCitiesList} from "./hooks/useCitiesList";

const App = () => {
    const [citiesList, setCitiesList] = useCitiesList();
    return (
      <div className="container">
        <Input setCitiesList = {setCitiesList}/>
        <CardList citiesList={citiesList}/>
      </div>
  );
};

export default App;
