import { useEffect, useState } from "react";

import { fetchWeather } from "../services/weatherService";

export function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;

    const getWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchWeather(city);
        setWeather(data);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [city]);

  return { weather, error, loading };
}
