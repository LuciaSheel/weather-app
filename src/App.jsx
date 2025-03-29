// Main component containing layout and state
import { useState } from 'react';
import { fetchWeather } from "./utils/api";
import ThemeToggle from "./components/ThemeToggle";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import ErrorMessage from "./components/ErrorMessage";
import UnitToggle from "./components/UnitToggle";
import Button from './components/Button';

function App() {
  const [city, setCity] = useState(""); // User input city
  const [weather, setWeather] = useState(null); // Weather data
  const [forecast, setForecast] = useState(null); // Forecast data
  const [error, setError] = useState(null); // Error state
  const [unit, setUnit] = useState("C"); // "C" or "F"
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const convertTemp = (temp) => {
    return unit === "F" ? (temp * 9) / 5 + 32 : temp;
  };

  const handleSearch = async () => {

    console.log("Search triggered");

    if (!city.trim()) {
      console.log("No city entered, showing error...");
      setError("Please enter a city name.");
      return;
    }

    setIsLoading(true);
    setError(null); // Reset error

    try {
      const { currentWeatherData, forecastData } = await fetchWeather(city); // Fetch weather data
      setWeather(currentWeatherData);
      setForecast(forecastData); // Store result in state
    } catch (err) {
       if (err.message) {
        // If the error has a message (as defined in `api.js`)
        setError(err.message);
      } else {
        // Fallback error
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <ThemeToggle />
      <h1>Weather App</h1>

      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      <UnitToggle unit={unit} setUnit={setUnit} />
      <Button
        onClick={handleSearch}
        label="Get Weather"
        isLoading={isLoading}
        disabled={isLoading}
      />

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherDisplay weather={weather} convertTemp={convertTemp} />}

      {forecast && <Forecast forecast={forecast} convertTemp={convertTemp} />}
    </div>
  );
}

export default App
