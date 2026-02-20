import React from "react";
import "./App.css";
import skyBg from "./assets/backgrounds/sky.jpg";

import Search from "./components/Search/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Sidebar from "./components/Sidebar/Sidebar";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${skyBg})` }}>
      <div className="app__overlay">

        <div className="app__search">
          <Search />
        </div>


        <div className="app__content">
          <Sidebar />
          <WeatherCard />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
