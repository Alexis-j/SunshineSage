import { Card } from "./styles";

const WeatherCard = ({ weather }) => {
  return (
    <Card>
      <h2>{weather.city}, {weather.country}</h2>
      <p>{weather.temp}°C</p>
      <p>{weather.condition}</p>
      <img src={weather.icon} alt="weather icon" />
    </Card>
  );
};

export default WeatherCard;
