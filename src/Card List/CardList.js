import React from 'react';
import Card from '../Card/Card';

const CardList = ({ citiesList }) => {
    return (
        <div className="container-card-list">
            {
                citiesList.map(city => <Card  key={city} city = {city} />)
            }
        </div>
    );
};

export default CardList;