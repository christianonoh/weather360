// DetailsPage.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCity, fetchWeatherData } from '../redux/weather/weatherSlice';
import Details from '../components/Details';
import SearchBar from '../components/SearchBar';

const DetailsPage = () => {
  const selectedCity = useSelector((state) => state.weather.selectedCity);
  const weatherData = useSelector((state) => state.weather.weatherData);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCity) {
      dispatch(fetchWeatherData(selectedCity));
    }

    // Cleanup function
    return () => {
      dispatch(selectCity(null));
    };
  }, [selectedCity, dispatch]);

  const handleBackClick = () => {
    dispatch(selectCity(null));
  };

  return (
    <section className="details-container">
      <button type="button" onClick={handleBackClick}>&lt; Back</button>
      <div className="weather">
        <SearchBar />
        {loading && <h2>Loading...</h2>}
        {error && (
          <h2>
            Error:
            {error}
          </h2>
        )}
        {!loading && !error && weatherData === null && (
          <h2>Please enter a city to see the weather</h2>
        )}
        {!loading && !error && weatherData && (
          <>
            <h1>Weather Details</h1>
            <Details
              key={weatherData.id}
              weather={weatherData.main}
              name={weatherData.name}
              wind={weatherData.wind}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default DetailsPage;
