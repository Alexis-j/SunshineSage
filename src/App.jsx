import { darkTheme, lightTheme } from "./styles/theme";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [city, setCity] = useState("Berlin");

  const { weather, error, loading } = useWeather(city);

  const toggleTheme = () => setIsDark(prev => !prev);

  const handleSearch = (cityName) => {
      setCity(cityName);
    };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        onSearch={handleSearch}
      />

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </ThemeProvider>
  );
}

export default App;
