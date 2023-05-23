// HomePage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCity } from '../redux/weather/weatherSlice';
import City from '../components/City';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const cities = useSelector((store) => store.weather.cities);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    dispatch(selectCity(city));
    navigate(`/details/${city}`);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar />
      <h2>Cities</h2>
      <div className="city-container">
        {cities.map((city) => (
          <City
            key={city.id}
            city={city.name}
            country={city.country}
            handleCityClick={handleCityClick}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
