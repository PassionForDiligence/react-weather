import React, {useEffect} from 'react';
import Card from '../Card/Card';

const CardList = ({ citiesList }) => {
    useEffect(() => {
        console.log('citieslist', citiesList);
    }, [citiesList]);
    return (
        <div className="container-card-list">
            {
                citiesList.map(city => <Card  key={city} city = {city} />)
            }
        </div>
    );
};

export default CardList;