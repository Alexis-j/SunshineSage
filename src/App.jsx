import { darkTheme, lightTheme } from "./styles/theme";

import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import ThemeToggleButton from "./components/ThemeToggle";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(p => !p);

  const { weather, error } = useWeather("London");

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />

      <h1>Sunshine Sage</h1>
      <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />
      {error && <p>{error}</p>}
      {!weather && !error && <p>Cargando clima...</p>}

      {weather && <WeatherCard weather={weather} />}


    </ThemeProvider>
  );
}

export default App;
