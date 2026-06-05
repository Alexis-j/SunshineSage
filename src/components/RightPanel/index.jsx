import { Droplets, Sun, Thermometer, Wind } from "lucide-react";
import WeekForecast from "../WeekForecast/WeekForecast";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {
  CardLabel,
  CardValue,
  Container,
  FavoriteCard,
  FavoriteHigh,
  FavoriteIcon,
  FavoriteLow,
  FavoriteName,
  FavoriteRange,
  FavoriteTemp,
  FavoriteTop,
  Grid,
  HighlightCard,
  SectionTitle,
} from "./styles";

const normalize = (fav) =>
  typeof fav === "string" ? { name: fav, temp: null, max: null, min: null, icon: null } : fav;

const RightPanel = ({ weather, onSelectCity }) => {
  const [favorites] = useLocalStorage("favorites", []);
  const items = favorites.map(normalize).slice(0, 4);

  const isActive = (name) =>
    weather && name.toLowerCase() === weather.city.toLowerCase();

  const iconUrl = (icon) => (icon ? "https:" + icon.replace("https:", "") : null);

  const dataFor = (fav) =>
    isActive(fav.name) && weather
      ? { temp: Math.round(weather.temp), max: Math.round(weather.max), min: Math.round(weather.min), icon: iconUrl(weather.icon) }
      : { ...fav, icon: iconUrl(fav.icon) };

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

      {items.length > 0 && (
        <>
          <SectionTitle style={{ marginTop: 8 }}>Favorites</SectionTitle>
          <Grid>
            {items.map((fav) => {
              const d = dataFor(fav);
              return (
                <FavoriteCard key={fav.name} onClick={() => onSelectCity?.(fav.name)}>
                  <FavoriteTop>
                    <FavoriteName>{fav.name}</FavoriteName>
                    {d.icon && <FavoriteIcon src={d.icon} alt="" />}
                  </FavoriteTop>
                  <FavoriteTemp>{d.temp != null ? `${d.temp}°` : "--"}</FavoriteTemp>
                  <FavoriteRange>
                    <FavoriteHigh>↑{d.max != null ? `${d.max}°` : "--"}</FavoriteHigh>
                    <FavoriteLow>↓{d.min != null ? `${d.min}°` : "--"}</FavoriteLow>
                  </FavoriteRange>
                </FavoriteCard>
              );
            })}
          </Grid>
        </>
      )}

      <WeekForecast week={weather?.week} />
    </Container>
  );
};

export default RightPanel;
