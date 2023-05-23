import React from 'react';
import PropTypes from 'prop-types';

const City = ({ city, country, handleCityClick }) => (
  <div className="city" role="button" tabIndex={0} onClick={() => handleCityClick(city)} onKeyDown={(e) => e.key === 'Enter' && handleCityClick(city)}>
    <h2>{city}</h2>
    <h3>{country}</h3>
  </div>
);

City.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  handleCityClick: PropTypes.func.isRequired,
};

export default City;
