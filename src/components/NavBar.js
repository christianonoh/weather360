import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { toggleSearchBar } from '../redux/weather/weatherSlice';

const NavBar = ({ title, featureButton }) => {
  const dispatch = useDispatch();
  return (
    <nav>
      {featureButton}
      <div className="logo">
        {title}
      </div>
      <button type="submit" onClick={() => dispatch(toggleSearchBar())}>
        <IoSearch />
      </button>
    </nav>
  );
};
NavBar.defaultProps = {
  featureButton: '',
};

NavBar.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  featureButton: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default NavBar;
