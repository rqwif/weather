import React from "react";
import "./WeatherCard.css";
import icon from "../../assets/icons/icon1.png";
import location from "../../assets/icons/location.png";
import thermometer from "../../assets/icons/thermometer.png"
import drop from "../../assets/icons/drop.png";
import wind from "../../assets/icons/wind.png";

const WeatherCard = () => {
  return (
    <div className="weather-card glass">
      <div className="weather-card__left">
        <div className="weather-card__location">
          <img src={location} alt="location" />
          <span>Чернівці</span>
        </div>
        <div className="weather-card__top">
          <h1 className="weather-card__temp">18°C</h1>
          <img src={icon} alt="weather icon" />
        </div>

        <p className="weather-card__desc">Переважно сонячно</p>

        <div className="weather-card__range">
          <span>В: 18°</span>
          <span>Н: 2°</span>
        </div>

        <div className="weather-card__stats">
          <div className="weather-card__stat glass">
            <div className="stat__top">
              <img src={thermometer} alt="thermometer" className="stat__icon" />
              <p className="stat__label">відчувається як</p>
            </div>
            <p className="stat__value">19°</p>
          </div>

          <div className="weather-card__stat glass">
            <div className="stat__top">
              <img src={wind} alt="wind" className="stat__icon" />
              <p className="stat__label">швидкість вітру</p>
            </div>
            
            <p className="stat__value">4 м/с</p>
          </div>

          <div className="weather-card__stat glass">
            <div className="stat__top">
              <img src={drop} alt="drop" className="stat__icon" />
              <p className="stat__label">вологість</p>
            </div>

            <p className="stat__value">62%</p>
          </div>
        </div>
      </div>

      <div className="weather-card__icon"></div>
    </div>
  );
};

export default WeatherCard;
