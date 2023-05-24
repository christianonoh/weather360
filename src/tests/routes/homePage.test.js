import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HomePage from '../../routes/HomePage';
import { selectCity, toggleSearchBar } from '../../redux/weather/weatherSlice';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('../../redux/weather/weatherSlice', () => ({
  selectCity: jest.fn(),
  toggleSearchBar: jest.fn(),
}));

describe('HomePage', () => {
  const cities = [
    { id: 1, name: 'City1', country: 'Country1' },
    { id: 2, name: 'City2', country: 'Country2' },
  ];
  const searchBarCollapse = true;

  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    useNavigate.mockClear();

    useSelector.mockReturnValueOnce(cities);
    useSelector.mockReturnValueOnce(searchBarCollapse);
  });

  test('renders the HomePage component', () => {
    render(<HomePage />);
    expect(screen.getByText('Weather360')).toBeInTheDocument();
    expect(screen.getByText('Cities')).toBeInTheDocument();
    expect(screen.getByText('City1')).toBeInTheDocument();
    expect(screen.getByText('City2')).toBeInTheDocument();
  });

  test('dispatches selectCity and toggleSearchBar on city click', () => {
    const dispatch = jest.fn();
    const navigate = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useNavigate.mockReturnValue(navigate);

    render(<HomePage />);

    fireEvent.click(screen.getByText('City1'));

    expect(dispatch).toHaveBeenCalledWith(selectCity('City1'));
    expect(dispatch).toHaveBeenCalledWith(toggleSearchBar());
    expect(navigate).toHaveBeenCalledWith('/details/City1');
  });
});
