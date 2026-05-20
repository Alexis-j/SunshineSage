import {
  Card,
  CardLeft,
  CardRight,
  CityCountry,
  Condition,
  DateText,
  FeelsLike,
  Label,
  Temp,
  TempRange,
  Thumb,
  ToggleWrapper,
  WeatherIcon
} from "./styles";

import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const WeatherCard = ({ weather }) => {
  const [unit, setUnit] = useLocalStorage("unit", "C");

  if (!weather) return null;

  const convert = (c) => (unit === "C" ? c : (c * 9) / 5 + 32);
  const date = new Date(weather.date);

  const toggleUnit = () => setUnit(prev => (prev === "C" ? "F" : "C"));

  return (
    <Card>
      <CardLeft>
        <CityCountry>{weather.city}, {weather.country}</CityCountry>
        <DateText>{`${date.getDate()} ${date.toLocaleString("en-US",{ month: "long" })}, ${date.getFullYear()}`}</DateText>
        <Temp>{convert(weather.temp).toFixed(0)}°{unit}</Temp>
        <TempRange>
          High: {convert(weather.max).toFixed(0)}°{unit} | Low: {convert(weather.min).toFixed(0)}°{unit}
        </TempRange>
      </CardLeft>

      <CardRight>
        <ToggleWrapper onClick={toggleUnit} $checked={unit === "F"}>
          <Label>
            <span>C</span>
            <span>F</span>
          </Label>
          <Thumb $checked={unit === "F"}></Thumb>
        </ToggleWrapper>
        <WeatherIcon src={weather.icon} alt="icon" />
        <Condition>{weather.condition}</Condition>
        <FeelsLike>
          Feels like: {convert(weather.feelsLike).toFixed(1)}°{unit}
        </FeelsLike>
      </CardRight>
    </Card>
  );
};

export default WeatherCard;
