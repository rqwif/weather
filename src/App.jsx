import React, { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "./api/weatherService";
import "./App.css";
import skyBg from "./assets/backgrounds/sky.jpg";

import Search from "./components/Search/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Sidebar from "./components/Sidebar/Sidebar";
import Forecast from "./components/Forecast/Forecast";

function App() {
  const [city, setCity] = useState("Чернівці");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [savedCities, setSavedCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || [],
  );
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const current = await getCurrentWeather(city, unit);
        const forecastData = await getForecast(city, unit);

        setWeather(current);

        const todayTemps = forecastData.list.slice(0, 8);
        const temps = todayTemps.map((item) => item.main.temp);

        setMinTemp(Math.min(...temps));
        setMaxTemp(Math.max(...temps));

        const daily = forecastData.list.filter((item) =>
          item.dt_txt.includes("12:00:00"),
        );

        setForecast(daily.slice(0, 5));
      } catch (err) {
        alert(err.message);
      }
    };

    fetchData();
  }, [city, unit]);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(savedCities));
  }, [savedCities]);

  const addCity = () => {
    if (!savedCities.includes(city)) {
      setSavedCities([...savedCities, city]);
    }
  };

  const removeCity = (name) => {
    setSavedCities(savedCities.filter((c) => c !== name));
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${skyBg})` }}>
      <div className="app__overlay">
        <div className="app__search">
          <Search setCity={setCity} unit={unit} setUnit={setUnit} />
        </div>

        <div className="app__content">
          <Sidebar
            cities={savedCities}
            onSelect={setCity}
            onRemove={removeCity}
          />

          {weather && (
            <WeatherCard
              weather={weather}
              minTemp={minTemp}
              maxTemp={maxTemp}
              unit={unit}
              onSave={addCity}
            />
          )}

          <Forecast forecast={forecast} />
        </div>
      </div>
    </div>
  );
}

export default App;
