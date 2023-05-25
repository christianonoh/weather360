import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk action creator
const apiKey = '5e744b46c6e7c17d533d616cd24a9a77';
export const fetchWeatherData = createAsyncThunk('weather/fetchWeatherData', async (city) => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    headers: {},
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

// Slice
const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    cities: [
      { id: 1, name: 'New York', country: 'USA' },
      { id: 2, name: 'London', country: 'UK' },
      { id: 3, name: 'Tokyo', country: 'Japan' },
      { id: 4, name: 'Lagos', country: 'Nigeria' },
      { id: 5, name: 'Enugu', country: 'Nigeria' },
      { id: 6, name: 'San Jose', country: 'USA' },
      { id: 7, name: 'Paris', country: 'France' },
      { id: 8, name: 'Sydney', country: 'Australia' },
      { id: 9, name: 'Moscow', country: 'Russia' },
      { id: 10, name: 'Cairo', country: 'Egypt' },
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
    filterCity: (state, action) => {
      console.log(action.payload);
      const newState = {
        ...state,
        cities:
        state.cities.filter((e) => e.name.toLowerCase().includes(action.payload.toLowerCase())),
        loading: false,
        error: null,
      };
      return newState;
    },
    toggleSearchBar: (state) => {
      const newState = {
        ...state,
        searchBarCollapse: !state.searchBarCollapse,
      };
      console.log(newState.searchBarCollapse);
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
export const { selectCity, toggleSearchBar, filterCity } = weatherSlice.actions;

export default weatherSlice.reducer;
