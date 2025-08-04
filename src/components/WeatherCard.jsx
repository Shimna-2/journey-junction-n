import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WeatherCard = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const lat = 11.6856;
  const lon = 76.132;
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const [currentRes, forecastRes] = await Promise.all([
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
          ),
          axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
          ),
        ]);
        setCurrentWeather(currentRes.data);
        setForecast(forecastRes.data.list);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch weather data.");
      }
    };

    fetchWeather();
  }, []);

  const formatTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const formatHour = (dt_txt) =>
    new Date(dt_txt).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      hour12: true,
    });

  const formatDate = (dt_txt) =>
    new Date(dt_txt).toLocaleDateString("en-IN", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

  const dailyForecast = forecast.reduce((acc, item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!acc[date]) acc[date] = item;
    return acc;
  }, {});
  const nextFiveDays = Object.values(dailyForecast).slice(0, 5);

  if (error)
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  if (!currentWeather || forecast.length === 0)
    return (
      <div className="text-white text-center mt-10">Loading weather...</div>
    );

  const { main, weather, wind, sys } = currentWeather;
  const weatherMain = weather[0].main.toLowerCase();
  const icon =
    weatherMain.includes("rain") || weatherMain.includes("drizzle")
      ? "10d"
      : weather[0].icon;

  const adjustTemp = (temp) => Math.min(Math.round(temp) - 2, 21); // Always lower, max 21°C

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 w-full max-w-4xl text-white shadow-2xl relative">
        {/* Go Back Button */}
        <button
          onClick={() => navigate("/home")}
          className="absolute top-4 left-4 px-4 py-2 bg-white text-slate-900 rounded-md shadow hover:bg-gray-100 transition"
        >
          ← Go Back
        </button>

        {/* Current Weather */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 mt-6">
          <div className="flex flex-col items-center">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather-icon"
              className="w-24 h-24"
            />
            <h2 className="text-5xl font-bold">{adjustTemp(main.temp)}°C</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-100 w-full md:w-auto">
            <div className="bg-white/10 p-4 rounded-xl text-center">
              <p className="font-semibold">Feels Like</p>
              <p>{adjustTemp(main.feels_like)}°C</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl text-center">
              <p className="font-semibold">Humidity</p>
              <p>{main.humidity}%</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl text-center">
              <p className="font-semibold">Wind</p>
              <p>{wind.speed} m/s</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl text-center">
              <p className="font-semibold">Sunrise</p>
              <p>{formatTime(sys.sunrise)}</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl text-center">
              <p className="font-semibold">Sunset</p>
              <p>{formatTime(sys.sunset)}</p>
            </div>
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-center">
            🌤️ Next Hours
          </h3>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide px-2">
            {forecast.slice(0, 6).map((item, idx) => (
              <div
                key={idx}
                className="min-w-[80px] bg-white/10 text-center rounded-lg p-3 hover:bg-white/20 transition"
              >
                <p className="text-xs mb-1">{formatHour(item.dt_txt)}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt="icon"
                  className="w-10 h-10 mx-auto"
                />
                <p className="mt-1 font-medium text-sm">
                  {adjustTemp(item.main.temp)}°C
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            📆 5-Day Forecast
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {nextFiveDays.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 p-3 rounded-xl flex flex-col items-center hover:bg-white/20 transition"
              >
                <p className="text-sm">{formatDate(item.dt_txt)}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt="icon"
                  className="w-10 h-10 my-1"
                />
                <p className="font-medium">{adjustTemp(item.main.temp)}°C</p>
                <p className="text-xs text-gray-300">{item.weather[0].main}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
