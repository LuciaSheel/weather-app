// API request functions
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

/**
 * Fetches weather data for a given city.
 * @param {string} city - The name of the city to get weather data for.
 * @param {string} units - Units for temperature ('metric' for Celsius, 'imperial' for Fahrenheit).
 * @returns {Promise<Object>} - Weather data response.
 */
export const fetchWeather = async (city, units = "metric") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units: units,
        appid: API_KEY,
      },
    });
    return response.data; // Return weather data
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw new Error("Failed to fetch weather data. Please try again.");
  }
};

/**
 * Fetches 5-day weather forecast data for a given city.
 * @param {string} city - The name of the city to get forecast data for.
 * @param {string} units - Units for temperature ('metric' for Celsius, 'imperial' for Fahrenheit).
 * @returns {Promise<Object>} - Forecast data response.
 */
export const fetchForecast = async (city, units = "metric") => {
  try {
    const response = await axios.get(FORECAST_URL, {
      params: {
        q: city,
        units: units,
        appid: API_KEY,
      },
    });
    return response.data; // Return forecast data
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    throw new Error("Failed to fetch forecast data. Please try again.");
  }
};

/**
 * Fetches both the current weather and 5-day forecast data for a given city.
 * @param {string} city - The name of the city to get weather data for.
 * @param {string} units - Units for temperature ('metric' for Celsius, 'imperial' for Fahrenheit).
 * @returns {Promise<Object>} - Current weather data and forecast data response.
 */
export const fetchWeatherAndForecast = async (city, units = "metric") => {
  try {
    const weatherData = await fetchWeather(city, units);
    const forecastData = await fetchForecast(city, units);
    return { weatherData, forecastData }; // Return both current weather and forecast data
  } catch (error) {
    console.error("Error fetching weather and forecast data:", error);
    throw new Error("Failed to fetch weather and forecast data. Please try again.");
  }
};