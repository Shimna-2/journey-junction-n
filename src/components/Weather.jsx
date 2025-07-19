// src/components/WeatherWayanad.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherWayanad = () => {
  const [current, setCurrent] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [aqi, setAqi] = useState(null);
  const [loading, setLoading] = useState(true);

  const latitude = 11.6854;
  const longitude = 76.1314;

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // 3-day hourly (max)
        const weatherRes = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min&forecast_days=15`
        );
        setCurrent(weatherRes.data.current_weather);
        setHourly(weatherRes.data.hourly);
        setDaily(weatherRes.data.daily);

        // AQI from another open source
        const aqiRes = await axios.get(
          `https://api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&hourly=pm2_5,pm10`
        );
        setAqi(aqiRes.data.hourly);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) {
    return <p className="text-center p-6">Loading weather...</p>;
  }

  const bgImage =
    current.precipitation > 0
      ? "/src/assets/images/rainy.jpeg"
      : "src/assets/images/sunnyforecast.jpeg";

  return (
    <div
      className="bg-cover bg-center p-6 rounded-xl shadow-lg max-w-md mx-auto mt-8 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-2xl font-bold mb-4">Wayanad Weather</h2>

      {current ? (
        <>
          <p>🌡️ {current.temperature}°C</p>
          <p>💨 {current.windspeed} km/h</p>
          <p>🧭 {current.winddirection}°</p>
        </>
      ) : (
        <p>Unable to fetch weather data.</p>
      )}

      {aqi && (
        <div className="mt-4 bg-black bg-opacity-30 p-3 rounded">
          <h3 className="font-semibold">Air Quality</h3>
          <p>PM2.5: {aqi.pm2_5[0].toFixed(1)} µg/m³</p>
          <p>PM10: {aqi.pm10[0].toFixed(1)} µg/m³</p>
        </div>
      )}

      {/* Hourly Forecast: next few hours */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Hourly Forecast</h3>
        <div className="flex space-x-4 overflow-x-auto">
          {[1, 2].map((i) => (
            <div key={i} className="bg-black bg-opacity-30 p-2 rounded">
              <p>{new Date(hourly.time[i]).getHours()}:00</p>
              <p>{hourly.temperature_2m[i]}°C</p>
              <p>{hourly.precipitation[i] > 0 ? "🌧️" : "☀️"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 15-Day Forecast */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">15-Day Forecast</h3>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {daily.time.map((date, idx) => (
            <div
              key={date}
              className="flex justify-between bg-black bg-opacity-30 p-2 rounded"
            >
              <p>{new Date(date).toLocaleDateString()}</p>
              <p>
                🌡️ {daily.temperature_2m_max[idx]}°/
                {daily.temperature_2m_min[idx]}°
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherWayanad;
