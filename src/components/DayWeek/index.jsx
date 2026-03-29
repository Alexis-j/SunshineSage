import { Container, HourCard, Hours } from "./styles";

const DayWeek = ({ weather }) => {
  if (!weather) return null;

  const now = new Date();
  const currentHour = now.getHours(); // hora actual 0-23

  // Tomamos las siguientes 6 horas desde la hora actual
  const hours = weather.hourly.slice(currentHour + 1, currentHour + 7);

  return (
    <Container>
      <h3>Today</h3>

      <Hours>
        {hours.map((h, i) => (
          <HourCard key={i}>
            <p>{new Date(h.time).getHours()}h</p>
            <img src={"https:" + h.condition.icon} alt="weather" />
            <span>{Math.round(h.temp_c)}°</span>
          </HourCard>
        ))}
      </Hours>
    </Container>
  );
};

export default DayWeek;
