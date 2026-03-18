import { Card } from "./styles";

const WeatherCard = ({ weather, unit }) => {
  if (!weather) return null;

  const convert = (c) =>
    unit === "C" ? c : (c * 9) / 5 + 32;

  return (
    <Card>
      <h2>
        {weather.city}, {weather.country}
      </h2>

      <p>🌡 Temp: {convert(weather.temp).toFixed(1)}°{unit}</p>
      <p>🤔 Feels like: {convert(weather.feelsLike).toFixed(1)}°{unit}</p>

      <p>🔺 Max: {convert(weather.max).toFixed(1)}°</p>
      <p>🔻 Min: {convert(weather.min).toFixed(1)}°</p>

      {weather.date && (
        <p>📅 {new Date(weather.date).toLocaleString()}</p>
      )}

      <img src={weather.icon} alt="icon" />
      <p>{weather.condition}</p>
    </Card>
  );
};

export default WeatherCard;
