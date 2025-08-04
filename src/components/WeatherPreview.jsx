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

  const temp = Math.min(Math.round(weather.main.temp) - 2, 21); // Always lower, max 21°C
  const condition = weather.weather[0].main.toLowerCase();

  let iconUrl;
  if (condition.includes("rain")) {
    iconUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
  } else if (condition.includes("cloud")) {
    iconUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163628.png";
  } else {
    iconUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
  }

  return (
    <Link
      to="/weather"
      className="flex items-center gap-2 cursor-pointer text-black hover:scale-105 transition-transform"
    >
      <p className="text-lg font-semibold">{temp}°C</p>
      <img src={iconUrl} alt="weather icon" className="w-6 h-6" />
    </Link>
  );
};

export default WeatherPreview;
