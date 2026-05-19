import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import DayWeek from "./components/DayWeek";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Hero from "./components/Hero/Hero";
import RightPanel from "./components/RightPanel";
import SearchBar from "./components/SearchBar";
import Skeleton from "./components/Skeleton/Skeleton";
import Sidebar from "./components/SideBar";
import WeatherCard from "./components/WeatherCard";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";
import GlobalStyles from "./styles/GlobalStyles";
import {
  AppContainer,
  CenterArea,
  MainContent,
  RightPanelArea,
  SidebarArea,
} from "./styles/Layout";
import { darkTheme, lightTheme } from "./styles/theme";
import { useGeolocation } from "./hooks/useGeolocation";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [city, setCity] = useLocalStorage("city", "");
  const { coords } = useGeolocation();
  const { weather, error, loading } = useWeather(city);

  const toggleTheme = () => setIsDark((prev) => !prev);

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
      <ErrorBoundary>
        <AppContainer>
          <Navbar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={() => setSidebarOpen((prev) => !prev)}
            onSearch={handleSearch}
            isDark={isDark}
            toggleTheme={toggleTheme}
          />

          {isSidebarOpen && <SidebarOverlay onClick={() => setSidebarOpen(false)} />}

          <MainContent>
            <SidebarArea>
              <Sidebar
                isDark={isDark}
                toggleTheme={toggleTheme}
                isOpen={isSidebarOpen}
                closeSidebar={() => setSidebarOpen(false)}
              />
            </SidebarArea>

            <CenterArea>
              <Hero weather={weather} />
              <SearchBar onSearch={handleSearch} onUseLocation={handleUseLocation} />

              {loading && !weather && <Skeleton />}

              {error && (
                <div
                  style={{
                    padding: "1rem",
                    background: "rgba(239, 83, 80, 0.1)",
                    borderRadius: "12px",
                    color: "#EF5350",
                    fontSize: "0.875rem",
                  }}
                >
                  {error}
                </div>
              )}

              {weather && (
                <>
                  <WeatherCard weather={weather} />
                  <DayWeek weather={weather} />
                </>
              )}
            </CenterArea>

            <RightPanelArea>
              <RightPanel weather={weather} />
            </RightPanelArea>
          </MainContent>

          <Footer />
        </AppContainer>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

const SidebarOverlay = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 90;
  }
`;

export default App;
