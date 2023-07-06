// console.log(import.meta.env.VITE_API_KEY)
import { Box, Container, TextField, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Anuncio from "./assets/components/Anuncio";
import AppName from "./assets/components/AppName";
import './App.css'; // Importa el archivo CSS

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
  });

    const onSubmit = async () => {
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

      setWeather({
        city: currentData.location.name,
        country: currentData.location.country,
        temp: currentData.current.temp_c,
        condition: currentData.current.condition.text,
        icon: currentData.current.condition.icon,
        conditionText: currentData.current.condition.text,
        forecast: forecastData.forecast.forecastday,
      });
    } catch (error) {
      setError({ error: true, message: error.message });
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
            <div>
              <Typography variant="h2" component="h1" style={{ color: "white", maxHeight: "50px" }}>
                {weather.conditionText}
              </Typography>
            </div>
          </div>
          <div className="rightpanel">
            <TextField
              id="City"
              label="City"
              variant="outlined"
              required
              className="full-width"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              error={error.error}
              helperText={error.message}
              InputProps={{
                endAdornment: (
                  <IconButton
                    edge="end"
                    aria-label="Buscar"
                    onClick={onSubmit}
                  >
                    <SearchIcon style={{ color: "#ffffff" }} />
                  </IconButton>
                ),
                onKeyDown: (e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    onSubmit();
                  }
                }
              }}
              inputRef={inputRef}
            />
            <div>
              <Container maxWidth="xs">
                {weather.city && (
                  <Box
                    sx={{
                      display: "grid",
                      gap: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h4" component="h2">
                      {weather.city}, {weather.country}
                    </Typography>
                    <Box
                      component="img"
                      alt={weather.conditionText}
                      src={weather.icon}
                      sx={{ margin: "0 auto" }}
                    />
                    <Typography variant="h5" component="h3">
                      {weather.temp}°C
                    </Typography>
                    <Typography variant="h6" component="h4">
                      {weather.conditionText}
                    </Typography>
                  </Box>
                )}
                {weather.forecast.length > 0 && (
                  <Box
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {weather.forecast.map((day) => (
                      <div key={day.date}>

                          <Box
                          sx={{
                            margin: "30px",
                            padding: "30px",
                            borderRadius: "10px",
                            display: "flex",
                            bgcolor: "#8E9B91",
                            minWidth: "75%"
                          }}

                          >
                            <Box
                              component="img"
                              alt={day.day.condition.text}
                              src={day.day.condition.icon}
                            />
                            <Typography variant="h6" component="h3">
                              {day.date}
                            </Typography>
                            <Typography variant="body1" component="p">
                              {day.day.avgtemp_c}°C
                            </Typography>
                          </Box>
                      </div>
                    ))}
                  </Box>
                )}
                <Anuncio />
              </Container>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
}
