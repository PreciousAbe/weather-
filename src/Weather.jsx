import React, { useState } from "react"
import "./Weather.css"
import WeatherInfo from "./WeatherInfo"
import axios from "axios"

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
    //search for a city
  }
  function search() {
    const apikey = "5f472b7acba333cd8a035ea85a0d4d4c"
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    )
  } else {
    search();
    return "loading..."
  }
}
