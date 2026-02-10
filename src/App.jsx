import { darkTheme, lightTheme } from "./styles/theme";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header"
import { ThemeProvider } from "styled-components";
import ThemeToggleButton from "./components/ThemeToggle";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [isDark, setIsDark] = useState(true);
  const { weather, error } = useWeather("London");

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      {error && <p>{error}</p>}
      {!weather && !error && <p>Cargando clima...</p>}
      {weather && <WeatherCard weather={weather} />}
    </ThemeProvider>
  );
}


export default App;
