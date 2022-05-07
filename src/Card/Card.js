import React, {memo} from 'react';

import {useWeather} from "../hooks/useWeather";

const Card = memo(({ city }) => {
    const data = useWeather(city);
    console.log('data', data);
    if (!data) {
        return null;
    }

    const { name, weather, main } = data;
    const { description, icon } = weather[0];
    const { temp, humidity, feels_like} = main;

    return (
        <div className="card-list">
            <div className="card-info">
                <img className="card-icon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
                <div className="title">{name}</div>
                <div className="description">{description}</div>
                <div className="temperature">{temp.toFixed()}&deg;</div>
            </div>
            <div className="additional-info">
                <div>Humidity: {humidity}</div>
                <div>Feels like: {feels_like.toFixed()}&deg;</div>
            </div>
        </div>
    );
});

export default Card;