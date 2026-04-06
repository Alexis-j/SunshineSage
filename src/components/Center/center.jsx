import { Center } from "./styles/Layout";
import DayWeek from "./DayWeek";
import SearchBar from "./SearchBar"; // componente separado si quieres
import WeatherCard from "./WeatherCard";

const ContentCenter = ({ weather, onSearch, onUseLocation, loading, error }) => (
  <Center>
    <SearchBar onSearch={onSearch} onUseLocation={onUseLocation} />

    {loading && <p>Cargando...</p>}
    {error && <p>{error}</p>}

    {weather && (
      <>
        <WeatherCard weather={weather} />
        <DayWeek weather={weather} />
      </>
    )}
  </Center>
);

export default ContentCenter;
