import './App.css';
import { useState }  from "react";

import Input from './Input/Input';
import CardList from "./Card List/CardList";

const App = () => {
    const [citiesList, setCitiesList] = useState([]);

    return (
      <div className="container">
        <Input setCitiesList = {setCitiesList}/>
        <CardList citiesList={citiesList}/>
      </div>
  );
};

export default App;
