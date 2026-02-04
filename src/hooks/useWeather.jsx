import { useEffect, useState } from "react";

export function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);

        setWeather({
          city: data.location.name,
          country: data.location.country,
          temp: data.current.temp_c,
          condition: data.current.condition.text,
          icon: data.current.condition.icon,
        });
      } catch (err) {
        setError(err.message);
      }
    };
    fetchWeather();
  }, [city]);

  return { weather, error };
}
