import './App.css';
import { useState }  from "react";

import Input from './Input/input';
import Card from './Card/card';

const App = () => {
    const [citiesList, setCitiesList] = useState([]);

    return (
      <div className="container">
        <Input setCitiesList = {setCitiesList}/>
          <div className="container-card-list">
              {
                  citiesList.map(city => <Card  key={city} city = {city} />)
              }
          </div>
      </div>
  );
};

export default App;
