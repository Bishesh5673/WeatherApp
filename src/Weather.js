import React, { useState } from "react";
import axios from "axios";

export default function Weather (){
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    const handleCityChange = (event) => {
        setCity(event.target.value)
    }
    const fetchWeather = async () => {
        try{
            const response = await axios.get
            (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'c50c2eb18179f0f1045776b3f1eebb8d'}`)
            setWeather(response);
        }
        catch(error){
            console.log("Error fetching weather data", error)
        }
    }
    const handleClick = () => {
        fetchWeather();
    }
    return(
        <div className="weather-container">
            <input className="cityname" type="text" placeholder="Enter City Name" value={city} onChange={handleCityChange}/>
            <button className="button" onClick={handleClick}>Get Weather</button>
            {weather && <>
            <div className="weather-info">
                <h3>{weather.data.name}</h3>
                <p>Temp is {weather.data.main.temp}</p>
                <p>{weather.data.weather[0].description}</p>
            </div>
            </>}
        </div>
    )
}