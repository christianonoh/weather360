import React from 'react';
import PropTypes from 'prop-types';
import { IoSearch } from 'react-icons/io5';

const NavBar = ({ title, featureButton }) => (
  <nav>
    {featureButton}
    <div className="logo">
      {title}
    </div>
    <button type="submit" onClick={() => console.log('working')}>
      <IoSearch />
    </button>
  </nav>
);
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
