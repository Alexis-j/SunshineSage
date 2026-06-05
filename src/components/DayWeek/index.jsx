import {
  AstroItem, AstroLabel, AstroValue,
  Container, HourCard, Hours, HoursWrapper,
  LeftColumn, RightColumn,
  TomorrowCard, TomorrowDesc, TomorrowInfo, TomorrowLabel,
} from "./styles";

const calcDayLength = (sunrise, sunset) => {
  const parse = (str) => {
    const [time, modifier] = str.split(" ");
    let [h, m] = time.split(":").map(Number);
    if (modifier === "PM" && h !== 12) h += 12;
    if (modifier === "AM" && h === 12) h = 0;
    return h * 60 + m;
  };

  let diff = parse(sunset) - parse(sunrise);
  if (diff < 0) diff += 24 * 60;
  return `${Math.floor(diff / 60)}h ${diff % 60}m`;
};

const DayWeek = ({ weather }) => {
  if (!weather) return null;

  const now = new Date();
  const currentHour = now.getHours();
  const hours = weather.hourly.slice(currentHour + 1, currentHour + 7);

  const tomorrow = weather.week?.[1];

  return (
    <Container>
      <LeftColumn>
        <h3>Today</h3>

        <HoursWrapper>
          <Hours>
            {hours.map((h, i) => (
              <HourCard key={i}>
                <p>{new Date(h.time).getHours()}h</p>
                <img src={"https:" + h.condition.icon} alt="weather" />
                <span>{Math.round(h.temp_c)}°</span>
              </HourCard>
            ))}
          </Hours>
        </HoursWrapper>

        {tomorrow && (
          <TomorrowCard>
            <TomorrowInfo>
              <TomorrowLabel>Tomorrow</TomorrowLabel>
              <TomorrowDesc>{tomorrow.day.condition.text}</TomorrowDesc>
            </TomorrowInfo>
            <img src={"https:" + tomorrow.day.condition.icon} alt={tomorrow.day.condition.text} />
          </TomorrowCard>
        )}
      </LeftColumn>

      <RightColumn>
        <AstroItem>
          <AstroLabel>Sunrise</AstroLabel>
          <AstroValue>{weather.sunrise}</AstroValue>
        </AstroItem>
        <AstroItem>
          <AstroLabel>Sunset</AstroLabel>
          <AstroValue>{weather.sunset}</AstroValue>
        </AstroItem>
        <AstroItem>
          <AstroLabel>Day Length</AstroLabel>
          <AstroValue>{calcDayLength(weather.sunrise, weather.sunset)}</AstroValue>
        </AstroItem>
      </RightColumn>
    </Container>
  );
};

export default DayWeek;
