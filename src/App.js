// src/App.js
import React, { useEffect, useState } from 'react';
import MapComponent from './components/MapComponent';
import CoordinatesDisplay from './components/CoordinatesDisplay';
import PolygonDisplay from './components/PolygonDisplay';
import { motion } from 'framer-motion';

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [currentLocation, setCurrentLocation] = useState([51.505, -0.09]); // Default coordinates
  const [polygonDetails, setPolygonDetails] = useState([]);

  // Fetch user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLocation = [latitude, longitude];
          setCurrentLocation(userLocation); // Set current location
          setCoordinates({ lat: latitude, lng: longitude }); // Set coordinates for display
        },
        () => {
          console.error("Error fetching location. Using default.");
        }
      );
    }
  }, []);

  return (
    <div className="App bg-gradient-to-b from-blue-900 to-black text-white min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <h1 className="text-5xl font-bold mb-4 text-center">OpenStreetMap with React Leaflet</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg"
      >
        <MapComponent
          currentLocation={currentLocation}
          setCoordinates={setCoordinates}
          setPolygonDetails={setPolygonDetails}
        />
      </motion.div>

      {coordinates && <CoordinatesDisplay coordinates={coordinates} />}
      {polygonDetails.length > 0 && <PolygonDisplay polygonDetails={polygonDetails} />}
    </div>
  );
}

export default App;
