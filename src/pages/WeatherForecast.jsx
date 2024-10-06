// src/pages/WeatherForecast.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { WiDaySunny, WiRain, WiStrongWind, WiHumidity, WiSunrise, WiSunset } from 'react-icons/wi';

const WeatherForecast = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });

  const API_KEY = 'API-KEY'; // Your OpenWeather API key

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates({ lat: latitude, lon: longitude });
          },
          (error) => {
            setError('Unable to retrieve location.');
            setLoading(false);
            console.error('Geolocation error:', error);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (coordinates.lat && coordinates.lon) {
        try {
          // Fetch Current Weather
          const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=metric`;
          const currentWeatherResponse = await axios.get(currentWeatherURL);
          setCurrentWeather(currentWeatherResponse.data);

          // Fetch 5-Day Forecast
          const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=metric`;
          const forecastResponse = await axios.get(forecastURL);
          setForecastData(forecastResponse.data.list);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch weather data');
          setLoading(false);
          console.error('API fetch error:', err);
        }
      }
    };

    fetchWeatherData();
  }, [coordinates]);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-4 text-blue-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Weather Forecast
      </motion.h1>

      {loading && <p className="text-lg text-center text-gray-300">Loading weather data...</p>}
      {error && <p className="text-lg text-center text-red-500">{error}</p>}
      
      {currentWeather && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Current Weather Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-blue-400 text-center">Current Weather</h2>
            <p className="text-4xl font-bold text-center text-white">{Math.round(currentWeather.main.temp)}°C</p>
            <p className="text-lg text-center text-gray-300">{currentWeather.weather[0].description}</p>
            <div className="flex justify-center mt-4">
              <WiDaySunny className="text-4xl text-yellow-400" />
            </div>
          </motion.div>

          {/* Humidity Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-blue-400 text-center">Humidity</h2>
            <p className="text-4xl font-bold text-center text-white">{currentWeather.main.humidity}%</p>
            <p className="text-lg text-center text-gray-300">Humidity level in the air.</p>
            <div className="flex justify-center mt-4">
              <WiHumidity className="text-4xl text-blue-400" />
            </div>
          </motion.div>

          {/* Wind Speed Card */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-blue-400 text-center">Wind Speed</h2>
            <p className="text-4xl font-bold text-center text-white">{currentWeather.wind.speed} m/s</p>
            <p className="text-lg text-center text-gray-300">Current wind speed.</p>
            <div className="flex justify-center mt-4">
              <WiStrongWind className="text-4xl text-green-400" />
            </div>
          </motion.div>
        </div>
      )}

      {/* Forecast Data */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-4">5-Day Forecast</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {forecastData.slice(0, 5).map((forecast, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-white text-center">
                {new Date(forecast.dt * 1000).toLocaleDateString()}
              </h3>
              <p className="text-lg font-bold text-center text-yellow-400">
                {Math.round(forecast.main.temp)}°C
              </p>
              <p className="text-sm text-center text-gray-300">{forecast.weather[0].description}</p>
              <div className="flex justify-center mt-2">
                <WiDaySunny className="text-3xl text-yellow-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
