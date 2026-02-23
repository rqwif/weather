const API_KEY = "7ed5077792908a28ed03e6a7a5336816";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return await response.json();
};

export const getForecast = async (city) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Forecast not found");
  }

  return await response.json();
};

export const getWeatherByCoords = async (lat, lon, unit = "metric") => {
  const res = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}&lang=ua`
  );

  if (!res.ok) throw new Error("Помилка геолокації");

  return await res.json();
};