import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => (
  <div className="search">
    <input type="text" id="search" placeholder="Enter city name..." />
    <button type="button">
      <BsSearch />
    </button>
  </div>
);

export default SearchBar;
