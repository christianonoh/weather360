const fetchWeatherData = () => {
  const state = {
    cities: [
      { id: 1, name: 'New York', country: 'USA' },
      { id: 2, name: 'London', country: 'UK' },
      { id: 3, name: 'Tokyo', country: 'JP' },
      { id: 4, name: 'Lagos', country: 'NG' },
      { id: 5, name: 'Enugu', country: 'NG' },
      { id: 6, name: 'San Jose', country: 'USA' },
    ],
    selectedCity: null,
    weatherData: {
      coord: { lon: 77.2311, lat: 28.6128 },
      weather: [
        {
          id: 721, main: 'Haze', description: 'haze', icon: '50d',
        },
      ],
      base: 'stations',
      main: {
        temp: 305.24,
        feels_like: 303.74,
        temp_min: 305.24,
        temp_max: 305.24,
        pressure: 1007,
        humidity: 27,
      },
      visibility: 3000,
      wind: { speed: 2.06, deg: 240 },
      clouds: { all: 91 },
      dt: 1684805616,
      sys: {
        type: 1,
        id: 9165,
        country: 'IN',
        sunrise: 1684799806,
        sunset: 1684849145,
      },
      timezone: 19800,
      id: 1261481,
      name: 'New Delhi',
      cod: 200,
    },
    loading: false,
    error: null,
    searchBarCollapse: false,
  };
  return state.weatherData;
};

export default fetchWeatherData;
