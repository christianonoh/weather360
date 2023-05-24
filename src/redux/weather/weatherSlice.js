// weatherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk action creator
const apiKey = '5e744b46c6e7c17d533d616cd24a9a77';
export const fetchWeatherData = createAsyncThunk('weather/fetchWeatherData', async (city) => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    headers: {},
  };
  const response = await axios.request(config);
  if (response.data) {
    return response.data;
  }
  return [];
});

// Slice
const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    cities: [
      { id: 1, name: 'New York', country: 'USA' },
      { id: 2, name: 'London', country: 'UK' },
      { id: 3, name: 'Tokyo', country: 'JP' },
      { id: 4, name: 'Lagos', country: 'NG' },
      { id: 5, name: 'Enugu', country: 'NG' },
    ],
    selectedCity: null,
    weatherData: null,
    loading: false,
    error: null,
    searchBarCollapse: false,
  },
  reducers: {
    selectCity: (state, action) => {
      const newState = {
        ...state,
        selectedCity: action.payload,
      };
      return newState;
    },
    toggleSearchBar: (state) => {
      const newState = {
        ...state,
        searchBarCollapse: !state.searchBarCollapse,
      };
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        const newState = {
          ...state,
          loading: true,
          error: null,
        };
        return newState;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        const newState = {
          ...state,
          weatherData: action.payload,
          loading: false,
          error: null,
        };
        // console.log(newState);
        return newState;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          error: action.payload,
        };
        return newState;
      });
  },
});

// Extract the action creators from the slice
export const { selectCity, toggleSearchBar } = weatherSlice.actions;

export default weatherSlice.reducer;
