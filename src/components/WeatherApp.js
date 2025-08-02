import React, { useState, useEffect } from 'react';
import { WiHumidity, WiStrongWind, WiThermometer, WiThunderstorm, WiSnow, WiFog } from 'react-icons/wi';
import { IoSearch, IoLocation } from 'react-icons/io5';
import { BsCloudSun, BsCloudRain, BsCloud, BsSun } from 'react-icons/bs';
import axios from 'axios';
import './WeatherApp.css';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiUrl = process.env.REACT_APP_WEATHER_API_URL;

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain.toLowerCase()) {
      case 'clear':
        return <BsSun className="weather-icon" />;
      case 'clouds':
      case 'broken clouds':
      case 'scattered clouds':
      case 'overcast clouds':
      case 'few clouds':
        return <BsCloud className="weather-icon" />;
      case 'rain':
      case 'drizzle':
      case 'light rain':
      case 'moderate rain':
      case 'heavy rain':
        return <BsCloudRain className="weather-icon" />;
      case 'thunderstorm':
        return <WiThunderstorm className="weather-icon" />;
      case 'snow':
        return <WiSnow className="weather-icon" />;
      case 'mist':
      case 'fog':
      case 'haze':
        return <WiFog className="weather-icon" />;
      default:
        return <BsCloudSun className="weather-icon" />;
    }
  };

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
      setWeather(response.data);
      setError('');
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found. Please check the spelling and try again.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const checkWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }
    await fetchWeather(city);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkWeather();
    }
  };

  // Fetch Addis Ababa weather on component mount
  useEffect(() => {
    fetchWeather('Addis Ababa');
  }, []);

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1 className="app-title">
          <IoLocation className="title-icon" />
          Weather Forecast
        </h1>
        
        <div className="search-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
              className="search-input"
            />
            <button 
              onClick={checkWeather}
              disabled={loading}
              className="search-button"
            >
              {loading ? (
                <div className="loading-spinner"></div>
              ) : (
                <IoSearch className="search-icon" />
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {weather && (
          <div className="weather-info">
            <div className="weather-main">
              <div className="weather-icon-container">
                {getWeatherIcon(weather.weather[0].main)}
              </div>
              <h2 className="temperature">
                {Math.round(weather.main.temp)}°C
              </h2>
              <h3 className="city-name">{weather.name}</h3>
            </div>

            <div className="weather-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <WiHumidity />
                </div>
                <div className="detail-text">
                  <p className="detail-value">{weather.main.humidity}%</p>
                  <p className="detail-label">Humidity</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <WiStrongWind />
                </div>
                <div className="detail-text">
                  <p className="detail-value">{weather.wind.speed} km/h</p>
                  <p className="detail-label">Wind Speed</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <WiThermometer />
                </div>
                <div className="detail-text">
                  <p className="detail-value">{Math.round(weather.main.feels_like)}°C</p>
                  <p className="detail-label">Feels Like</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp; 