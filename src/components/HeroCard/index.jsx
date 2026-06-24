import { useMemo } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getWeatherTheme, isDaytime } from "../../utils/weatherGradient";
import {
  BottomRow,
  Card,
  CityName,
  Condition,
  DateText,
  LocationGroup,
  MainRow,
  Meta,
  MetaItem,
  MetaLabel,
  MetaValue,
  TempGroup,
  TempUnit,
  TempValue,
  TopRow,
  UnitToggle,
  UnitOption,
  WeatherIconWrapper,
} from "./styles";

const HeroCard = ({ weather }) => {
  const [unit, setUnit] = useLocalStorage("unit", "C");

  const weatherTheme = useMemo(
    () => getWeatherTheme(weather?.condition, isDaytime(weather?.sunrise, weather?.sunset)),
    [weather?.condition, weather?.sunrise, weather?.sunset]
  );

  if (!weather) return null;

  const convert = (c) => (unit === "C" ? c : (c * 9) / 5 + 32);
  const symbol = unit === "C" ? "°C" : "°F";

  const date = new Date(weather.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const toggleUnit = () => setUnit((prev) => (prev === "C" ? "F" : "C"));

  return (
    <Card $gradient={weatherTheme.gradient} $accent={weatherTheme.accent}>
      <TopRow>
        <LocationGroup>
          <CityName>
            {weather.city}, {weather.country}
          </CityName>
          <DateText>{formattedDate}</DateText>
        </LocationGroup>
        <UnitToggle onClick={toggleUnit} $accent={weatherTheme.accent}>
          <UnitOption $active={unit === "C"}>°C</UnitOption>
          <span style={{ color: "#6B7280" }}>/</span>
          <UnitOption $active={unit === "F"}>°F</UnitOption>
        </UnitToggle>
      </TopRow>

      <MainRow>
        <TempGroup>
          <TempValue>{convert(weather.temp).toFixed(0)}</TempValue>
          <TempUnit>{symbol}</TempUnit>
        </TempGroup>
        {weather.icon && (
          <WeatherIconWrapper $accent={weatherTheme.accent}>
            <img src={weather.icon} alt={weather.condition} />
          </WeatherIconWrapper>
        )}
      </MainRow>

      <BottomRow>
        <div>
          <Condition>{weather.condition}</Condition>
        </div>
        <Meta>
          <MetaItem>
            <MetaLabel>High</MetaLabel>
            <MetaValue>{convert(weather.max).toFixed(0)}°</MetaValue>
          </MetaItem>
          <MetaItem>
            <MetaLabel>Low</MetaLabel>
            <MetaValue>{convert(weather.min).toFixed(0)}°</MetaValue>
          </MetaItem>
          <MetaItem>
            <MetaLabel>Feels</MetaLabel>
            <MetaValue>{convert(weather.feelsLike).toFixed(0)}°</MetaValue>
          </MetaItem>
        </Meta>
      </BottomRow>
    </Card>
  );
};

export default HeroCard;
