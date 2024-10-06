// src/App.js or src/pages/Home.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Adjust based on your folder structure
import About from './pages/About'; // Adjust based on your folder structure
// src/App.js
import SatelliteDashboard from './pages/SatelliteDashboard';
import FarmersJournal from './pages/FarmersJournal';
import WeatherForecast from './pages/WeatherForecast';
import FieldInsights from './pages/FieldInsights';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-b from-blue-900 to-black">
        <Navbar />

        {/* Notification Area */}
        <div className="mt-4 mx-4">
          <Notification />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/satellite-dashboard" element={<SatelliteDashboard />} />
          <Route path="/weather-forecast" element={<WeatherForecast />} />
          <Route path="/field-insights" element={<FieldInsights />} />
          <Route path="/farmers-journal" element={<FarmersJournal />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
