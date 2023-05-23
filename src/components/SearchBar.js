import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCity } from '../redux/weather/weatherSlice';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => setSearchValue(event.target.value);
  const handleSubmit = () => {
    console.log(searchValue);
    dispatch(selectCity(searchValue));
    navigate(`/details/${searchValue}`);
  };
  return (
    <div className="search">
      <input type="text" id="search" value={searchValue} placeholder="Enter city name..." onChange={handleChange} />
      <button type="button" onClick={handleSubmit}>
        <BsSearch />
      </button>
    </div>
  );
};

export default SearchBar;
