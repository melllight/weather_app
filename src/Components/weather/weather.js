import React from 'react';

const Weather = (props) => {
    return(
        <div className="infoWeath">
            { props.city !== undefined &&
            <div>
                <p>Местоположение: {props.city}, {props.country}</p>
                <p>Температура: {props.temp} ℃</p>
                <p>Давление: {props.pressure} Па</p>
                <p>Заход солнца: {props.sunset}</p>
            </div>
            }      
            <p className="error">{ props.error }</p>
            </div>
    )
}

export default Weather;