// Shows weather forecast
const Forecast = ({ forecast }) => {
  // Group forecast data by day
  const groupedForecast = forecast.list.reduce((acc, item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  return (
    <div className="forecast">
      {Object.keys(groupedForecast).map((date) => (
        <div key={date} className="forecast-day">
          <h3>{date}</h3>
          <div className="forecast-details">
            {groupedForecast[date].map((item, index) => (
              <div key={index}>
                <p>{item.main.temp}°C</p>
                <p>Humidity: {item.main.humidity}%</p>
                <p>Wind Speed: {item.wind.speed} m/s</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
