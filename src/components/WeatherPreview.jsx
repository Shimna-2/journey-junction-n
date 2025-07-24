// src/components/WeatherPreview.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const WeatherPreview = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const lat = 11.6856;
  const lon = 76.132;
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );
        setWeather(res.data);
      } catch (err) {
        console.error(err);
        setError("Couldn't load weather.");
      }
    };

    fetchData();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!weather) return <div className="text-white">Loading...</div>;

  const icon = weather.weather[0].icon;
  const temp = Math.round(weather.main.temp);

  return (
    <Link
      to="/weather"
      className="flex flex-col items-center cursor-pointer text-white hover:scale-105 transition-transform"
    >
      <p className="text-xl font-semibold mb-1">{temp}°C in Wayanad</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
        className="w-20 h-20"
      />
    </Link>
  );
};

export default WeatherPreview;
