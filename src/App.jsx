// console.log(import.meta.env.VITE_API_KEY)
import { Box, Container, TextField, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
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

  const styles = {
    border: "solid 10px #B6C0B8",
    margin: "30px",
    padding: "30px",
    borderRadius: "30px",
    minHeight: "95vh",
  };

return (
  <div className="app-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
    <div style={{ ...styles, flex: "1", position: "relative", }}>
      <Container maxWidth="xs">
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative", }}>
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            SunshineSage App
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: 2,
            }}
            component="form"
            autoComplete="off"
            onSubmit={onSubmit}
          >
          </Box>
        </div>
        </Container>
          <Typography variant="h2" component="h1" style={{ color: "white", maxHeight:"50px" }}>
              {weather.conditionText}
          </Typography>
          <div style={{ ...styles, width: "30%", position: "absolute",top:"-5.8%", right:"-3.6%", height: 100, backgroundColor:"#B6C0B8", borderRadius: "0 15px 15px 0"}}>
            <TextField
              id="City"
              label="City"
              variant="outlined"
              size="small"
              required
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
              error={error.error}
              helperText={error.message}
              InputProps={{
                endAdornment: (
                  <IconButton
                    edge="end"
                    color="primary"
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
                    display: "grid",
                    gap: 2,
                    textAlign: "center",
                  }}
                >
                  {weather.forecast.map((day) => (
                    <div key={day.date}>
                      <Typography variant="h6" component="h3">
                        {day.date}
                      </Typography>
                      <Box
                        component="img"
                        alt={day.day.condition.text}
                        src={day.day.condition.icon}
                        sx={{ margin: "0 auto" }}
                      />
                      <Typography variant="body1" component="p">
                        {day.day.avgtemp_c}°C
                      </Typography>
                      <Typography variant="body2" component="p">
                        {day.day.condition.text}
                      </Typography>
                    </div>
                  ))}
                </Box>
              )}
              <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px", position: "absolute", top:"90%", left:"30%", }}>
                Powered By:{" "}
                <a href="http://www.weatherapi.com/" title="Weather API">
                  WeatherApi.com
                </a>
              </Typography>
            </Container>
          </div>
      </div>
    </div>
  );
}
