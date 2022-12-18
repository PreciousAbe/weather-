import React, {useState} from "react"
import "./Weather.css"
import axios from 'axios;'

export default function Weather() {
   const [weatherData, setweatherData] = useState({ready: false});
   function handleResponse(response) {
     
     setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.main.wind.speed,
      Date: "Monday 06:00",
      description: response.data.weather[0].description,
      iconUrl : "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
     city: response.data.name,
     });

     setReady(true);
   }
   if (weatherData.ready) {

    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix mt-3">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h%</li>
            </ul>
          </div>
        </div>
      </div>
    )
  
   } else {

     let apikey = "5f472b7acba333cd8a035ea85a0d4d4c"
     let city = "New York"
     let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
  
     return "loading..."
   }
  
  
};
