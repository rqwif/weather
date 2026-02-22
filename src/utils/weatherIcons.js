import clear from "../assets/icons/sun.png";
import clouds from "../assets/icons/cloud.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import mist from "../assets/icons/cloud.png";

export const getWeatherIcon = (main) => {
  switch (main) {
    case "Clear":
      return clear;
    case "Clouds":
      return clouds;
    case "Rain":
    case "Drizzle":
      return rain;
    case "Snow":
      return snow;
    case "Thunderstorm":
      return storm;
    case "Mist":
    case "Fog":
      return mist;
    default:
      return clouds;
  }
};