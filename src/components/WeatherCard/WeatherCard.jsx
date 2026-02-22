import React from "react";
import "./WeatherCard.css";
import location from "../../assets/icons/location.png";
import thermometer from "../../assets/icons/thermometer.png";
import drop from "../../assets/icons/drop.png";
import wind from "../../assets/icons/wind.png";
import { getWeatherIcon } from "../../utils/weatherIcons";

const WeatherCard = ({ weather, minTemp, maxTemp, unit, onSave }) => {
  return (
    <div className="weather-card glass">
      <div className="weather-card__left">
        <div className="weather-card__location">
          <img src={location} alt="location" />
          <span>
            {weather.name}, {weather.sys.country}
          </span>
        </div>

        <div className="weather-card__top">
          <h1 className="weather-card__temp">
            {Math.round(weather.main.temp)}°
          </h1>
          <img src={getWeatherIcon(weather.weather[0].main)} alt="weather" />
        </div>

        <p className="weather-card__desc">{weather.weather[0].description}</p>

        <div className="weather-card__range">
          <span>В: {Math.round(maxTemp)}°</span>
          <span>Н: {Math.round(minTemp)}°</span>
        </div>

        <div className="weather-card__stats">
          <div className="weather-card__stat glass">
            <div className="stat__top">
              <img src={thermometer} alt="thermometer" className="stat__icon" />
              <p className="stat__label">відчувається як</p>
            </div>
            <p className="stat__value">
              {Math.round(weather.main.feels_like)}°
            </p>
          </div>

          <div className="weather-card__stat glass">
            <div className="stat__top">
              <img src={wind} alt="wind" className="stat__icon" />
              <p className="stat__label">швидкість вітру</p>
            </div>
            <p className="stat__value">
              {weather.wind.speed} {unit === "metric" ? "м/с" : "mph"}
            </p>
          </div>

          <div className="weather-card__stat glass">
            <div className="stat__top">
              <img src={drop} alt="drop" className="stat__icon" />
              <p className="stat__label">вологість</p>
            </div>
            <p className="stat__value">{weather.main.humidity}%</p>
          </div>
        </div>

        <button onClick={onSave} className="weather-ced__button glass">
          Зберегти місто
        </button>
      </div>

      <div className="weather-card__icon"></div>
    </div>
  );
};

export default WeatherCard;
