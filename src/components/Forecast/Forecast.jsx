import React from "react";
import "./Forecast.css";
import icon from "../../assets/icons/icon1.png";

const Forecast = () => {
  return (
    <div className="forecast glass">
      <p className="forecast__name">5-денний прогноз</p>

      <div className="forecast__item glass">
        <div className="forecast__left">
          <div className="forecast__icon">
            <img src={icon} alt="weather" />
          </div>
          <p className="forecast__day">Thu</p>
        </div>

        <p className="forecast__temp">18°C</p>
      </div>

      <div className="forecast__item glass">
        <div className="forecast__left">
          <div className="forecast__icon">
            <img src={icon} alt="weather" />
          </div>
          <p className="forecast__day">Thu</p>
        </div>

        <p className="forecast__temp">18°C</p>
      </div>

      <div className="forecast__item glass">
        <div className="forecast__left">
          <div className="forecast__icon">
            <img src={icon} alt="weather" />
          </div>
          <p className="forecast__day">Thu</p>
        </div>

        <p className="forecast__temp">18°C</p>
      </div>

      <div className="forecast__item glass">
        <div className="forecast__left">
          <div className="forecast__icon">
            <img src={icon} alt="weather" />
          </div>
          <p className="forecast__day">Thu</p>
        </div>

        <p className="forecast__temp">18°C</p>
      </div>

      <div className="forecast__item glass">
        <div className="forecast__left">
          <div className="forecast__icon">
            <img src={icon} alt="weather" />
          </div>
          <p className="forecast__day">Thu</p>
        </div>

        <p className="forecast__temp">18°C</p>
      </div>
    </div>
  );
};

export default Forecast;
