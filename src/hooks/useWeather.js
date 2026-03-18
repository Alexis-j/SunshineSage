import { useEffect, useState } from "react";

import { fetchWeather } from "../services/weatherService";

export function useWeather(query) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchWeather(query);
        setWeather(data);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [query]);

  return { weather, error, loading };
}
