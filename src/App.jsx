// Main component containing layout and state
import { useState } from 'react';
import { fetchWeather } from "./utils/api";
import ThemeToggle from "./components/ThemeToggle";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import ErrorMessage from "./components/ErrorMessage";
import UnitToggle from "./components/UnitToggle";

function App() {
  const [city, setCity] = useState(""); // User input city
  const [weather, setWeather] = useState(null); // Weather data
  const [forecast, setForecast] = useState(null); // Forecast data
  const [error, setError] = useState(null); // Error state
  const [unit, setUnit] = useState("C"); // "C" or "F"

  const convertTemp = (temp) => {
    return unit === "F" ? (temp * 9) / 5 + 32 : temp;
  };

  const handleSearch = async () => {
    try {
      setError(null); // Reset error
      const { currentWeatherData, forecastData } = await fetchWeather(city); // Fetch weather data
      setWeather(currentWeatherData);
      setForecast(forecastData); // Store result in state
    } catch (err) {
      setError(err.message); // Handle errors
    }
  };

  return (
    <div className="app">
      <ThemeToggle />
      <h1>Weather App</h1>

       <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      <UnitToggle unit={unit} setUnit={setUnit} />

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherDisplay weather={weather} convertTemp={convertTemp} />}

      {forecast && <Forecast forecast={forecast} convertTemp={convertTemp} />}
    </div>
  );
}

export default App
