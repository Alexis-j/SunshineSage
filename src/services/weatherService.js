export const fetchWeather = async (query) => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${query}&days=1`
    );

    if (!res.ok) {
      throw new Error("Error al obtener datos del clima");
    }

    const data = await res.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    return {
  city: data.location.name,
  country: data.location.country,
  temp: data.current.temp_c,
  feelsLike: data.current.feelslike_c,
  condition: data.current.condition.text,
  icon: "https:" + data.current.condition.icon,
  max: data.forecast.forecastday[0].day.maxtemp_c,
  min: data.forecast.forecastday[0].day.mintemp_c,
  date: new Date(data.location.localtime),

  // 🔥 NUEVO
  hourly: data.forecast.forecastday[0].hour
};
  } catch (err) {
    throw new Error(err.message || "Error desconocido");
  }
};
