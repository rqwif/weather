import React from "react";
import "./WeatherCard.css";
import icon from "../../assets/icons/icon1.png";

const WeatherCard = () => {
  return (
    <div className="weather-card glass">
      <div className="weather-card__info">
        <p className="weather-card__city">Чернівці</p>
        <p className="weather-card__temp">18 °C</p>
        <p>Переважно сонячно</p>
        <div className="weather-card__range">
          <p>В: 18°</p>
          <p>Н: 12°</p>
        </div>
      </div>

      <div className="weather-card__icon">
        <img src={icon} alt="weather" />
      </div>
    </div>
  );
};

export default WeatherCard;
