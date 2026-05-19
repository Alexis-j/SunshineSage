import { Droplets, Sun, Thermometer, Wind } from "lucide-react";
import WeekForecast from "../WeekForecast/WeekForecast";
import { CardLabel, CardValue, Container, Grid, HighlightCard, SectionTitle } from "./styles";

const RightPanel = ({ weather }) => {
  return (
    <Container>
      <SectionTitle>Today Highlights</SectionTitle>

      <Grid>
        <HighlightCard>
          <CardLabel>
            <Droplets size={16} />
            Humidity
          </CardLabel>
          <CardValue>{weather ? `${weather.humidity}%` : "--"}</CardValue>
        </HighlightCard>

        <HighlightCard>
          <CardLabel>
            <Wind size={16} />
            Wind
          </CardLabel>
          <CardValue>{weather ? `${weather.wind_kph} km/h` : "--"}</CardValue>
        </HighlightCard>

        <HighlightCard>
          <CardLabel>
            <Thermometer size={16} />
            Feels Like
          </CardLabel>
          <CardValue>{weather ? `${Math.round(weather.feelsLike)}°` : "--"}</CardValue>
        </HighlightCard>

        <HighlightCard>
          <CardLabel>
            <Sun size={16} />
            UV Index
          </CardLabel>
          <CardValue>{weather?.uv ?? "--"}</CardValue>
        </HighlightCard>
      </Grid>

      <WeekForecast week={weather?.week} />
    </Container>
  );
};

export default RightPanel;
