import React from 'react';
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const CardWeather = (props) =>{
    const imgURL = `http://openweathermap.org/img/wn/${props.icon}@2x.png`
    return (
        <div className="card-weather">
            {props.temp ? <span className="temp">{props.temp}&#176;c</span> : null}
            <h2 className="city-name">{props.city}</h2>
            {props.icon ? <img src={imgURL} /> : null }
        </div>
    );
}

export default CardWeather;