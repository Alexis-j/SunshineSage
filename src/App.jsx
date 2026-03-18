import { darkTheme, lightTheme } from "./styles/theme";
import { useEffect, useState } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import WeatherCard from "./components/WeatherCard";
import { useGeolocation } from "./hooks/useGeolocation";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [isDark, setIsDark] = useState(true);

  const [city, setCity] = useLocalStorage("city", "");
  const [unit, setUnit] = useLocalStorage("unit", "C");

  const { coords } = useGeolocation();
  const { weather, error, loading } = useWeather(city);

  const toggleTheme = () => setIsDark(prev => !prev);

  const handleSearch = (cityName) => {
    setCity(cityName);
  };

  const handleUseLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCity(`${pos.coords.latitude},${pos.coords.longitude}`);
    });
  };

  const toggleUnit = () => {
    setUnit(prev => (prev === "C" ? "F" : "C"));
  };

  useEffect(() => {
    if (!city && coords) {
      setCity(`${coords.lat},${coords.lon}`);
    }
  }, [coords]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        onSearch={handleSearch}
        onUseLocation={handleUseLocation}
      />

      <button onClick={toggleUnit}>
        Cambiar a °{unit === "C" ? "F" : "C"}
      </button>

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard weather={weather} unit={unit} />}
    </ThemeProvider>
  );
}

export default App;
