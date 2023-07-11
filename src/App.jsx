import React from "react";
import { useState, useRef } from "react";
import { Box, TextField, Typography, IconButton } from "@mui/material";
import AppName from "./assets/components/AppName";
import Anuncio from "./assets/components/Anuncio";
import {  Search as SearchIcon } from "@mui/icons-material";

import './App.css'; // Importa el archivo CSS
import { BorderBottom } from "@mui/icons-material";

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
    hourlyForecast: [],
    tomorrowForecast: []
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
      const currentIndex = forecastData.forecast.forecastday[0].hour.findIndex((hour) => {
        const hourDateTime = new Date(hour.time);
        return hourDateTime > currentDateTime;
      });

      let hourlyForecast = forecastData.forecast.forecastday[0].hour.slice(currentIndex, currentIndex + 8);
      let tomorrowForecast = forecastData.forecast.forecastday[1].hour.slice(0, 8);

      // Completar con los resultados del día siguiente si no hay suficientes
      if (hourlyForecast.length < 8) {
        tomorrowForecast = forecastData.forecast.forecastday[1].hour.slice(0, 7 - hourlyForecast.length);
        hourlyForecast = hourlyForecast.concat(tomorrowForecast);
      }

      setWeather({
        city: currentData.location.name,
        country: currentData.location.country,
        temp: currentData.current.temp_c,
        condition: currentData.current.condition.text,
        icon: currentData.current.condition.icon,
        conditionText: currentData.current.condition.text,
        forecast: forecastData.forecast.forecastday,
        hourlyForecast: hourlyForecast,
        tomorrowForecast: tomorrowForecast,
      });
    } catch (error) {
      setError({
        error: true,
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

      // Obtén el elemento rightpanel
    var rightPanel = document.querySelector('.rightpanel');

    // Agrega la clase "expanded" después de un retraso de 0.5 segundos (500 milisegundos)
    setTimeout(function() {
      rightPanel.classList.add('expanded');
    }, 500);

  return (
    <div className="app">
      <div className="app-container">
        <div className="panels">
        <div className="leftpanel">
          <div className="leftpaneltop">

            <AppName />
            <Box sx={{display: {lg: "block" , xs:"none"}}}>
              <Typography variant="h6" component="h3" sx={{ color: "#ffffff", m: 5 ,textAlign: "right"  }}>
                {weather.city} {weather.country}
              </Typography>
              <Typography variant="h1" component="h3" sx={{ color: "#ffffff", mt:35 }}>
                {weather.condition}
              </Typography>
            </Box>
          </div>
          <div className="leftpanelbottom">
            <div className="small-cards">
              {weather.hourlyForecast.map((hour) => (  //stos son los resultados por horas
                <div style={{ display: "flex", mt: 2, color: "#ffffff" }} key={hour.time}>
                  <Box
                    sx={{
                      margin: "10px",
                      padding: "10px",
                      borderRadius: "10px",
                      bgcolor: "#7f89814a",
                      width: "100%",
                      display: {lg: "block" , xs:"none"}
                    }}
                  >
                    <div>
                      <div>
                        <Typography variant="h5" component="h3" sx={{ borderBottom: "2px solid", padding: 1 }}>
                          {hour.temp_c.toFixed(0)}°C
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body1" component="p" sx={{ padding: 0.5 }}>
                          {new Date(hour.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </Typography>
                      </div>
                    </div>
                  </Box>
                </div>
              ))}
            </div>
          </div>

        </div>
          <div className="rightpanel" style={{ flexGrow: 1 }}>
              <Box
                sx={{
                  display: "grid",
                  gap: 2,
                  m: 2,
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
                    },
                    inputProps: {
                      style: { color: "white" }
                    }
                  }}
                  InputLabelProps={{
                    style: { color: "#ffffff" }
                  }}
                  inputRef={inputRef}
                  sx={{
                    minWidth: "100%",
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white"
                    },
                    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white"
                    },
                    "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white"
                    }
                  }}
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
