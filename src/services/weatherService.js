export const fetchWeather = async (city) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`
  );

  const data = await res.json();

  if (data.error) throw new Error(data.error.message);

  return {
    city: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  };
};
