// console.log(import.meta.env.VITE_API_KEY)
import { LoadingButton } from "@mui/lab";
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";


const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=`;


export default function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
const [weather, setWeather] = useState ({
  city: "",
  country: "",
  temp:"",
  condition:"",
  icon:"",
  conditionText:"",
});


  const onSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setError({
      error:false,
      message:"",
    })
    try {
      if(!city.trim()) throw { message: "El campo en la ciudad es obligatorio"}
      const response = await fetch(`${API_WEATHER}${city}`)
      const data = await response.json();

      if (data.error) throw { message: data.erro.essage };

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        conditionText: data.current.condition.text,
      });

    } catch (error) {
      setError({
        error: true,
        message: error.message,
      });
    } finally {
      setLoading(false)
    }
  };
  return (
  <Container
    maxWidth="xs"
    sx={{mt: 2 }}
  >
    <Typography
    variant="h3"
    component="h1"
    align="center"
    gutterBottom
    >

    SunshineSage App
    </Typography>
    <Box
      sx={{
        display: "grid", gap: 2}}
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
    >
      <TextField
        id="City"
        label="City"
        variant="outlined"
        size="small"
        required
        fullWidth
        value={city}
        onChange={(e) => setCity(e.target.value)}
        error= {error.error}
        helperText={error.message}

      />
      <LoadingButton
        type="Submit"
        variant="contained"
        loading={loading}
        loadingIndicator="Cargando..."
      >
        buscar
      </LoadingButton>
    </Box>

    {weather.city && (
      <Box
        sx={{
          mt: 2,
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
          sx={{ margin:"0 auto"}}
        />
        <Typography variant="h5" component="h3">
        {weather.temp}°C
        </Typography>

        <Typography variant="h&" component="h4">
        {weather.conditionText}°C
        </Typography>
      </Box>
    )}

    <Typography
      textAlign="center"
      sx={{ mt: 2, fontSize: "10px" }}
    >
      Powered By:{" "}
      <a
        href="http://www.weatherapi.com/"
        title="Weather API"
      >
        WeatherApi.com
      </a>
    </Typography>
  </Container>
  );
}
