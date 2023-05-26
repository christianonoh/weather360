import React from 'react';
import PropTypes from 'prop-types';
import { WiHumidity } from 'react-icons/wi';
import { RiWindyFill } from 'react-icons/ri';
import clear from '../assets/clear.png';
import clouds from '../assets/clouds.png';
import drizzle from '../assets/drizzle.png';
import dust from '../assets/dust.png';
import fog from '../assets/fog.png';
import haze from '../assets/haze.png';
import mist from '../assets/mist.png';
import rain from '../assets/rain.png';
import smoke from '../assets/smoke.png';
import snow from '../assets/snow.png';
import thunderstorm from '../assets/thunderstorm.png';

const weatherImages = {
  clear,
  clouds,
  drizzle,
  dust,
  fog,
  haze,
  mist,
  rain,
  smoke,
  snow,
  thunderstorm,
};

const Details = ({
  name, main, wind, weather, country,
}) => {
  const weatherCondition = weather[0].main.toLowerCase();
  const weatherImage = weatherImages[weatherCondition];

  return (
    <div className="weather-info">
      <h2>
        {name}
        ,
        {' '}
        {country}
      </h2>
      <img src={weatherImage} alt={weatherCondition} />
      <h1>
        {main.temp}
        °C
      </h1>
      <h3>{weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}</h3>
      <div className="details">
        <div className="col">
          <WiHumidity className="icon icon-humidity" />
          <div className="humidity">
            <p>
              {main.humidity}
              %
            </p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <RiWindyFill className="icon icon-wind" />
          <div className="wind">
            <p>
              {wind.speed}
              %
            </p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  name: PropTypes.string.isRequired,
  main: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
  }).isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number.isRequired,
    deg: PropTypes.number.isRequired,
  }).isRequired,
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      main: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ).isRequired,
  country: PropTypes.string.isRequired,
};

export default Details;
