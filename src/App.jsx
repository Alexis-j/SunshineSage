import { Center, Main } from "./styles/Layout";
import { darkTheme, lightTheme } from "./styles/theme";
import { useEffect, useState } from "react";

import DayWeek from "./components/DayWeek";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import RightPanel from "./components/RightPanel";
import Sidebar from "./components/SideBar";
import { ThemeProvider } from "styled-components";
import WeatherCard from "./components/WeatherCard";
import { useGeolocation } from "./hooks/useGeolocation";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [isDark, setIsDark] = useState(true);

  const [city, setCity] = useLocalStorage("city", "");

  const { coords } = useGeolocation();
  const { weather, error, loading } = useWeather(city);

  const toggleTheme = () => setIsDark(prev => !prev);

  const handleSearch = (cityName) => setCity(cityName);

  const handleUseLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCity(`${pos.coords.latitude},${pos.coords.longitude}`);
    });
  };

  useEffect(() => {
    if (!city && coords) {
      setCity(`${coords.lat},${coords.lon}`);
    }
  }, [city, coords, setCity]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        onSearch={handleSearch}
        onUseLocation={handleUseLocation}
      />

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <Main>
        <Sidebar />

        <Center>
          {loading && <p>Cargando...</p>}
          {error && <p>{error}</p>}

          {weather && (
            <>
              <WeatherCard weather={weather} />
              <DayWeek weather={weather} />            </>
          )}
        </Center>

        <RightPanel />
      </Main>
    </ThemeProvider>
  );
}

export default App;
