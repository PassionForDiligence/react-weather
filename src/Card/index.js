import React from 'react';

const Card = () => {
    return (
        <div className="card-list">
            <div className="card-info">
                <img className="card-icon" src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon"/>
                <div className="title">New York</div>
                <div className="description">Cloudy</div>
                <div className="temperature">20</div>
            </div>
            <div className="additional-info">
                <div>Humidity: 15</div>
                <div>Feels like: 19</div>
            </div>
        </div>
    );
};

export default Card;