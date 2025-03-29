const Forecast = ({ forecast, convertTemp }) => {
  // Group forecast data by day and calculate high/low temps
  const groupedForecast = forecast.list.reduce((acc, item) => {
    const date = item.dt_txt.split(" ")[0]; // Extract date

    if (!acc[date]) {
      acc[date] = { high: item.main.temp, low: item.main.temp };
    } else {
      acc[date].high = Math.max(acc[date].high, item.main.temp);
      acc[date].low = Math.min(acc[date].low, item.main.temp);
    }

    return acc;
  }, {});

  return (
    <div className="forecast">
      {Object.keys(groupedForecast).map((date) => (
        <div key={date} className="forecast-day">
          <h3>{date}</h3>
           <p>🌡 High: {convertTemp(groupedForecast[date].high).toFixed(1)}°</p>
          <p>❄ Low: {convertTemp(groupedForecast[date].low).toFixed(1)}°</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
