import axios from "axios";

export const fetchWeather = async (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const currentWeatherResponse = await axios.get(currentWeatherUrl);
    const forecastResponse = await axios.get(forecastUrl);

    return {
      currentWeatherData: currentWeatherResponse.data,
      forecastData: forecastResponse.data,
    };
  } catch {
    throw new Error("Failed to fetch weather data");
  }
};
