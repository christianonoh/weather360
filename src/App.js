// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import DetailsPage from './routes/DetailsPage';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/details/:cityId" element={<DetailsPage />} />
  </Routes>
);

export default App;
