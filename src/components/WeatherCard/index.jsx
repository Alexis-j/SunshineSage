import "./styles.css";

import PropTypes from "prop-types";

function WeatherCard({ weather, theme }) {
  return (
    <div className="weather-card" style={{ background: theme.colors.secondary, color: theme.colors.mainText }}>
      <h2>{weather.city}, {weather.country}</h2>
      <img src={weather.icon} alt={weather.condition} />
      <p>{weather.temp}°C</p>
      <p>{weather.condition}</p>
    </div>
  );
}

WeatherCard.propTypes = { weather: PropTypes.object.isRequired, theme: PropTypes.object.isRequired };
export default WeatherCard;
