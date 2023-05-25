import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCity } from '../redux/weather/weatherSlice';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => setSearchValue(event.target.value);

  const handleSubmit = () => {
    dispatch(selectCity(searchValue));
    navigate(`/details/${searchValue}`);
    setSearchValue('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        id="search"
        value={searchValue}
        placeholder="Enter city name..."
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={handleSubmit}>
        <IoSearch />
      </button>
    </div>
  );
};

export default SearchBar;
