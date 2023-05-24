/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';
import NavBar from '../../components/NavBar';
import { toggleSearchBar } from '../../redux/weather/weatherSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('NavBar', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  it('renders the NavBar component with default props', () => {
    const { getByText } = render(<NavBar title="My Title" />);
    const titleElement = getByText('My Title');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the NavBar component with provided featureButton prop', () => {
    const featureButton = <button type="button">Feature Button</button>;
    const { getByText } = render(<NavBar title="My Title" featureButton={featureButton} />);
    const featureButtonElement = getByText('Feature Button');
    expect(featureButtonElement).toBeInTheDocument();
  });

  it('dispatches toggleSearchBar action when search button is clicked', () => {
    const { getByRole } = render(<NavBar title="My Title" />);
    const searchButton = getByRole('button');
    fireEvent.click(searchButton);
    expect(mockDispatch).toHaveBeenCalledWith(toggleSearchBar());
  });
});
