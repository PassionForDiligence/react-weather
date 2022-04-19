import './App.css';

import Input from './Input';
import Card from './Card';

const App = () => {
  return (
      <div className="container">
        <Input />
          <div className="container-card-list">
              <Card />
              <Card />
              <Card />
          </div>
      </div>
  );
};

export default App;
