// Main component containing layout and state
import { useState } from 'react';
import { fetchWeather } from "./utils/api";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [city, setCity] = useState(""); // User input city
  const [weather, setWeather] = useState(null); // Weather data
  const [error, setError] = useState(null); // Error state

  const handleSearch = async () => {
    try {
      setError(null); // Reset error
      const data = await fetchWeather(city); // Fetch weather data
      setWeather(data); // Store result in state
    } catch (err) {
      setError(err.message); // Handle errors
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <ThemeToggle />
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App
