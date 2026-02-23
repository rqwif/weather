import clearBg from "../assets/backgrounds/sky.jpg";
import cloudsBg from "../assets/backgrounds/clouds.jpg";
import rainBg from "../assets/backgrounds/rain.jpg";
import snowBg from "../assets/backgrounds/snow.jpg";
import stormBg from "../assets/backgrounds/storm.jpg";
import mistBg from "../assets/backgrounds/mist.jpg";

export const getWeatherBackground = (main) => {
  switch (main) {
    case "Clear":
      return clearBg;
    case "Clouds":
      return cloudsBg;
    case "Rain":
    case "Drizzle":
      return rainBg;
    case "Snow":
      return snowBg;
    case "Thunderstorm":
      return stormBg;
    case "Mist":
    case "Fog":
      return mistBg;
    default:
      return clearBg;
  }
};