import React from 'react';
import PropTypes from 'prop-types';
import { WiHumidity } from 'react-icons/wi';
import { RiWindyFill } from 'react-icons/ri';
import clouds from '../assets/cloud.png';

const Details = ({ name, weather, wind }) => (
  <div className="weather-info">
    <img src={clouds} alt="clouds" />
    <h1>
      {weather.temp}
      °C
    </h1>
    <h2>{name}</h2>
    <div className="details">
      <div className="col">
        <WiHumidity className="icon icon-humidity" />
        <div className="humidity">
          <p>
            {weather.humidity}
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

Details.propTypes = {
  name: PropTypes.string.isRequired,
  weather: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
  }).isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number.isRequired,
    deg: PropTypes.number.isRequired,
  }).isRequired,
};

export default Details;
