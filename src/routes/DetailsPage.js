import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import { selectCity, fetchWeatherData, toggleSearchBar } from '../redux/weather/weatherSlice';
import Details from '../components/Details';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const DetailsPage = () => {
  const selectedCity = useSelector((state) => state.weather.selectedCity);
  const weatherData = useSelector((state) => state.weather.weatherData);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);
  const searchBarCollapse = useSelector((state) => state.weather.searchBarCollapse);
  const [firstLoad, setFirstLoad] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (searchBarCollapse) { dispatch(toggleSearchBar()); }
    navigate('/');
  };

  useEffect(() => {
    if (!loading && !error && weatherData === null) {
      if (!firstLoad) { dispatch(toggleSearchBar()); }
    }
    setFirstLoad(false);
  }, [loading, error, weatherData, firstLoad, dispatch]);

  return (
    <div className="wrapper">
      <NavBar title={<img src={logo} id="logo" alt="Logo" />} featureButton={<button type="button" onClick={handleBackClick}><IoChevronBackCircleSharp alt="&lt; Back" /></button>} />
      <section className="details-container">
        {searchBarCollapse && (<SearchBar />)}
        <div className="weather">
          {loading && <h2 className="message">Loading...</h2>}
          {error && (
          <h2 className="message">
            {error.charAt(0).toUpperCase() + error.slice(1)}
            <br />
            Please enter a valid city to view the weather
          </h2>
          )}
          {!loading && !error && weatherData === null && (
          <h2 className="message">Please enter a city to view the weather</h2>
          )}
          {!loading && !error && weatherData && (
          <>
            <Details
              key={weatherData.id}
              main={weatherData.main}
              name={weatherData.name}
              wind={weatherData.wind}
              weather={weatherData.weather}
              country={weatherData.sys.country}
            />
          </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DetailsPage;
