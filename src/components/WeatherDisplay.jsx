const WeatherDisplay = ({ weather, convertTemp }) => {
  return (
    <div className="weather-display">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <p>Temperature: {convertTemp(weather.main.temp).toFixed(1)}°</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
