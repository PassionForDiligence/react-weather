import './App.css';

import Input from './Input/input';
import Card from './Card/card';

const App = () => {
    const citiesList = ['New York', 'Brest', 'London'  ];
    return (
      <div className="container">
        <Input />
          <div className="container-card-list">
              {
                  citiesList.map(city => <Card  key={city} city = {city} />)
              }
          </div>
      </div>
  );
};

export default App;
