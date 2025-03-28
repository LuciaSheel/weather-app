// API request functions
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

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