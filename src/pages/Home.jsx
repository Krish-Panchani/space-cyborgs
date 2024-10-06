// src/App.js
import React, { useEffect, useState } from 'react';
import MapComponent from '../components/MapComponent';
import CoordinatesDisplay from '../components/CoordinatesDisplay';
import PolygonDisplay from '../components/PolygonDisplay';
import FarmersDataDisplay from '../components/FarmersDataDisplay';
import InsightsDisplay from '../components/InsightsDisplay'; // Import the new component
import { motion } from 'framer-motion';

const insightsData = [
  { title: 'Precipitation', description: 'Data from IMERG for global precipitation measurement.' },
  { title: 'Floods', description: 'Monitoring floods using OPERA and SAR technologies.' },
  { title: 'Drought', description: 'Insights from Landsat and ECOSTRESS for drought assessment.' },
  { title: 'Vegetation Growth', description: 'Monitoring growth with MODIS and VIIRS data.' },
  { title: 'Air Quality', description: 'Air quality insights from MODIS and VIIRS.' },
  { title: 'Clouds', description: 'Cloud monitoring using MISR and AMSR2.' },
  { title: 'Soil Moisture', description: 'Soil moisture data from SMAP for irrigation planning.' },
  { title: 'Evapotranspiration', description: 'Data from ECOSTRESS and MODIS for water management.' }
];

function Home() {
  const [coordinates, setCoordinates] = useState(null);
  const [currentLocation, setCurrentLocation] = useState([51.505, -0.09]); // Default coordinates
  const [polygonDetails, setPolygonDetails] = useState([]);
  const [farmersData, setFarmersData] = useState([]);

  const dummyData = [
    {
      id: 1,
      soilType: 'Loamy',
      moistureLevel: '30%',
      cropHealth: 'Healthy',
    },
  ];

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

  // Update polygon details when a polygon is drawn
  const handlePolygonDraw = (latlngs) => {
    setPolygonDetails(latlngs); // Update polygon details with the drawn coordinates
    setFarmersData(dummyData); // Update farmers data (this can be customized further)
  };

  return (
    <div className='App  text-white p-4'>
      <h1 className="text-5xl font-bold mb-4 text-center">Satellite Agriculture Insights and Community</h1>
      <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center py-8 px-4 gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg"
        >
          <MapComponent
            currentLocation={currentLocation}
            setCoordinates={setCoordinates}
            setPolygonDetails={handlePolygonDraw} // Pass the handler to set polygon details
          />
        </motion.div>

        <div className="flex flex-row sm:flex-col items-center justify-center ">
          {coordinates && <CoordinatesDisplay coordinates={coordinates} />}
          {polygonDetails.length > 0 && <PolygonDisplay polygonDetails={polygonDetails} />}
          {farmersData.length > 0 && <FarmersDataDisplay farmersData={farmersData} />} {/* Show Farmers Data */}
        </div>
      </div>
          <InsightsDisplay insightsData={insightsData} /> {/* Display insights data */}
    </div>
  );
}

export default Home;
