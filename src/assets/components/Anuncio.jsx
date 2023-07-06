//Anuncio
import { Typography } from "@mui/material";

export default function Anuncio() {
  return (
    <Typography
      textAlign="center"
      sx={{
        mt: 2,
        fontSize: "10px",
        position: "absolute",
        top: "90%",
        left: "30%",
      }}
    >
      Powered By:{" "}
      <a href="http://www.weatherapi.com/" title="Weather API">
        WeatherApi.com
      </a>
    </Typography>
  );
}
