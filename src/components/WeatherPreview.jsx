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

  // ❌ Don't show "Loading..." — just return null until we have data or an error
  if (!weather && !error) return null;

  if (error) {
    return <div className="text-red-500 text-xs">{error}</div>;
  }

  const temp = Math.round(weather.main.temp) - 6; // reduce by 2°C
  const condition = weather.weather[0].main.toLowerCase();

  let iconUrl;
  if (condition.includes("rain")) {
    iconUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png"; // rain icon
  } else if (condition.includes("cloud")) {
    iconUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163628.png"; // cloudy icon
  } else {
    iconUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"; // sunny icon
  }

  return (
    <Link
      to="/weather"
      className="flex items-center gap-2 cursor-pointer text-black-900 hover:scale-105 transition-transform"
    >
      <p className="text-xs font-semibold">{temp}°C</p>
      <img src={iconUrl} alt="weather icon" className="w-5 h-5" />
    </Link>
  );
};

export default WeatherPreview;
