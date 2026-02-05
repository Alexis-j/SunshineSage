import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.mainText};
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-top: 1rem;
  transition: background 0.3s ease, color 0.3s ease;
`;

function WeatherCard({ weather }) {
  return (
    <Card>
      <h2>{weather.city}, {weather.country}</h2>
      <img src={weather.icon} alt={weather.condition} />
      <p>{weather.temp}°C</p>
      <p>{weather.condition}</p>
    </Card>
  );
}

export default WeatherCard;
