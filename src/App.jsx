import { useState, useRef } from "react";
import { Box, Container, TextField, Typography, IconButton } from "@mui/material";
import AppName from "./assets/components/AppName";
import Anuncio from "./assets/components/Anuncio";
import { Search as SearchIcon } from "@mui/icons-material";

const API_WEATHER_CURRENT = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=`;
const API_WEATHER_FORECAST = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=`;

export default function App() {
  const inputRef = useRef(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
    forecast: [],
    hourlyForecast: []
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError({ error: false, message: "" });

    try {
      if (!city.trim()) {
        throw { message: "El campo en la ciudad es obligatorio" };
      }

      const currentResponse = await fetch(`${API_WEATHER_CURRENT}${city}`);
      const currentData = await currentResponse.json();

      if (currentData.error) {
        throw { message: currentData.error.message };
      }

      const forecastResponse = await fetch(`${API_WEATHER_FORECAST}${city}&days=3`);
      const forecastData = await forecastResponse.json();

      if (forecastData.error) {
        throw { message: forecastData.error.message };
      }

      const currentDateTime = new Date();
      const currentIndex = forecastData.forecast.forecastday[0].hour.findIndex(hour => {
        const hourDateTime = new Date(hour.time);
        return hourDateTime > currentDateTime;
      });

      const hourlyForecast = forecastData.forecast.forecastday[0].hour.slice(currentIndex, currentIndex + 6);

      setWeather({
        city: currentData.location.name,
        country: currentData.location.country,
        temp: currentData.current.temp_c,
        condition: currentData.current.condition.text,
        icon: currentData.current.condition.icon,
        conditionText: currentData.current.condition.text,
        forecast: forecastData.forecast.forecastday,
        hourlyForecast: hourlyForecast
      });
    } catch (error) {
      setError({
        error: true,
        message: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="app-container">
        <div className="panels">
          <div className="leftpanel">
            <AppName />
            {weather.hourlyForecast.length > 0 && (
              <Box
                sx={{
                  mt: 2,
                  color: "#ffffff"
                }}
              >
                {weather.hourlyForecast.map((hour) => (
                  <div key={hour.time}>
                    <Box
                      sx={{
                        margin: "10px",
                        padding: "10px",
                        borderRadius: "10px",
                        display: "flex",
                        bgcolor: "#7f89814a",
                        Width: "30%"
                      }}
                    >
                      <div className="small-cards">
                        <div>
                          <Typography variant="body1" component="p">
                            {new Date(hour.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="h5" component="h3" sx={{ borderLeft: "2px solid", padding: 1 }}>
                            {hour.temp_c.toFixed(0)}°C
                          </Typography>
                        </div>
                      </div>
                    </Box>
                  </div>
                ))}
              </Box>
            )}
          </div>
          <div className="rightpanel">
              <Box
                sx={{
                  display: "grid",
                  gap: 2
                }}
                component="form"
                autoComplete="off"
                onSubmit={onSubmit}
              >
                <TextField
                  id="City"
                  label="City"
                  variant="outlined"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  error={error.error}
                  helperText={error.message}
                  InputProps={{
                    endAdornment: (
                      <IconButton edge="end" aria-label="Buscar" onClick={onSubmit}>
                        <SearchIcon style={{ color: "#ffffff" }} />
                      </IconButton>
                    ),
                    onKeyDown: (e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        onSubmit(e);
                      }
                    }
                  }}
                  inputRef={inputRef}
                  sx={{ border: "2px solid", minWidth: "100%" }}
                />
              </Box>
              {weather.city && (
                <Box
                  sx={{
                    mt: 2,
                    display: "grid",
                    gap: 2,
                    textAlign: "center"
                  }}
                >
                  <Typography variant="h1" component="h3" sx={{ color: "#ffffff" }}>
                    {weather.temp}°C
                  </Typography>
                  <div className="card">
                    <Box component="img" alt={weather.conditionText} src={weather.icon} sx={{}} />
                    <Typography variant="h6" component="h4">
                      {weather.conditionText}
                    </Typography>
                  </div>
                </Box>
              )}
              {weather.forecast.length > 0 && (
                <Box
                  sx={{
                    mt: 2
                  }}
                >
                  {weather.forecast.map((day) => (
                    <div key={day.date}>
                      <Box
                        sx={{
                          margin: "10px",
                          padding: "10px",
                          borderRadius: "10px",
                          display: "flex",
                          bgcolor: "#7f89814a",
                          minWidth: "75%"
                        }}
                      >
                        <div className="cards">
                          <div>
                            <Box component="img" alt={day.day.condition.text} src={day.day.condition.icon} />
                          </div>
                          <div>
                            <Typography variant="body1" component="p">
                              {day.date}
                            </Typography>
                          </div>
                          <div>
                            <Typography variant="h5" component="h3" sx={{ borderLeft: "2px solid", padding: 1 }}>
                              {day.day.avgtemp_c.toFixed(0)}°C
                            </Typography>
                          </div>
                        </div>
                      </Box>
                    </div>
                  ))}
                </Box>
              )}
              <Anuncio />
          </div>
        </div>
      </div>
    </div>
  );
}
