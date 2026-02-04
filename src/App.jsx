import "./index.css";

import { darkTheme, lightTheme } from "./styles/theme";

import DebugPanel from "./components/DebugPanel";
import ThemeToggleButton from "./components/ThemeToggle";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(prev => !prev);

  const { weather, error } = useWeather("London");
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <div
      className="app"
      style={{
        background: theme.colors.primary,
        color: theme.colors.mainText,
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h1>☀️ Sunshine Sage</h1>

      <ThemeToggleButton toggleTheme={toggleTheme} isDark={isDark} />

      {error && <p>{error}</p>}
      {!weather && !error && <p>Cargando clima...</p>}

      {weather && (
        <>
          <WeatherCard weather={weather} theme={theme} />
          <DebugPanel data={weather} />
        </>
      )}
    </div>
  );
}

export default App;
