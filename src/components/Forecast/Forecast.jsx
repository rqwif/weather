import React from "react";
import "./Forecast.css";
import { getWeatherIcon } from "../../utils/weatherIcons";

const Forecast = ({ forecast }) => {
  const getDay = (date) => {
    return new Date(date).toLocaleDateString("uk-UA", {
      weekday: "short",
    });
  };

  return (
    <div className="forecast glass">
      <p className="forecast__name">5-денний прогноз</p>

      {forecast.map((item) => (
        <div className="forecast__item glass" key={item.dt}>
          <div className="forecast__left">
            <div className="forecast__icon">
              <img src={getWeatherIcon(item.weather[0].main)} alt="weather" />
            </div>
            <p className="forecast__day">{getDay(item.dt_txt)}</p>
          </div>

          <p className="forecast__temp">{Math.round(item.main.temp)}°</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
