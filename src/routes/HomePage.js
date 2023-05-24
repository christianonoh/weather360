// HomePage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiFillSetting } from 'react-icons/ai';
import { selectCity, toggleSearchBar } from '../redux/weather/weatherSlice';
import City from '../components/City';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';

const HomePage = () => {
  const cities = useSelector((store) => store.weather.cities);
  const searchBarCollapse = useSelector((state) => state.weather.searchBarCollapse);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    dispatch(selectCity(city));
    if (searchBarCollapse) { dispatch(toggleSearchBar()); }
    navigate(`/details/${city}`);
  };

  return (
    <div>
      <NavBar title="Weather360" featureButton={<AiFillSetting />} />
      {searchBarCollapse && (<SearchBar />)}
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
