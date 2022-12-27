import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon() {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color= "goldenrod"
      size= {30}
      animate={true}
    />
  );
}