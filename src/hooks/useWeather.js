import { useEffect, useState } from "react";

import { fetchWeather } from "../services/weatherService";

export function useWeather(query) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    let cancelled = false;

    const getWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchWeather(query);

        if (!cancelled) {
          setWeather(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setWeather(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    getWeather();

    return () => {
      cancelled = true;
    };
  }, [query]);

  return { weather, error, loading };
}
