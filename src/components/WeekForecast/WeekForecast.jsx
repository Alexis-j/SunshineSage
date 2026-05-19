import {
  DayIcon,
  DayName,
  DayRow,
  DayTemps,
  HighTemp,
  LowTemp,
  WeekContainer,
  WeekList,
  WeekTitle,
} from "./styles";

const WeekForecast = ({ week }) => {
  if (!week || week.length === 0) return null;

  const days = week.map((day) => ({
    date: new Date(day.date),
    max: day.day.maxtemp_c,
    min: day.day.mintemp_c,
    icon: "https:" + day.day.condition.icon,
    condition: day.day.condition.text,
  }));

  return (
    <WeekContainer>
      <WeekTitle>3-Day Forecast</WeekTitle>
      <WeekList>
        {days.map((day, i) => (
          <DayRow key={i}>
            <DayName>{i === 0 ? "Today" : day.date.toLocaleDateString("en-US", { weekday: "short" })}</DayName>
            <DayIcon src={day.icon} alt={day.condition} />
            <DayTemps>
              <HighTemp>{Math.round(day.max)}°</HighTemp>
              <LowTemp>{Math.round(day.min)}°</LowTemp>
            </DayTemps>
          </DayRow>
        ))}
      </WeekList>
    </WeekContainer>
  );
};

export default WeekForecast;
