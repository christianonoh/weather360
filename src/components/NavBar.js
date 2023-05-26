import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { toggleSearchBar } from '../redux/weather/weatherSlice';

const NavBar = ({ title, featureButton }) => {
  const dispatch = useDispatch();
  return (
    <nav>
      {featureButton}
      <Link to="/" className="logo">
        {title}
      </Link>
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
