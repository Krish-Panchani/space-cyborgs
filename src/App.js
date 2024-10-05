import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, FeatureGroup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { EditControl } from 'react-leaflet-draw';
import L from "leaflet"; // Import Leaflet for calculations
import { FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import './App.css'; // Custom styles if needed

// Custom hook to handle marker and coordinates
const MapComponent = ({ setCoordinates }) => {
  const [markerPosition, setMarkerPosition] = useState(null);

  useMapEvents({
    click(e) {
      setMarkerPosition(e.latlng);
      setCoordinates(e.latlng);
    },
  });

  return (
    <>
      {markerPosition && (
        <Marker position={markerPosition} icon={L.divIcon({ className: 'custom-marker' })}>
          <Popup className="bg-gray-800 text-white">
            <FaMapMarkerAlt className="inline-block mr-1" />
            Latitude: {markerPosition.lat} <br /> Longitude: {markerPosition.lng}
          </Popup>
        </Marker>
      )}
    </>
  );
};

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [polygonDetails, setPolygonDetails] = useState(null);

  // Fetch user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);
          setCoordinates({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching location: ", error);
          setCurrentLocation([51.505, -0.09]);
          setCoordinates({ lat: 51.505, lng: -0.09 });
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setCurrentLocation([51.505, -0.09]);
      setCoordinates({ lat: 51.505, lng: -0.09 });
    }
  }, []);

  // Handle polygon drawing
  const handlePolygonDraw = (e) => {
    const layer = e.layer;
    const coordinates = layer.getLatLngs()[0];
    setPolygonDetails(coordinates);
  };

  return (
    <div className="App bg-gradient-to-b from-blue-900 to-black text-white min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <h1 className="text-5xl font-bold mb-4 text-center">OpenStreetMap with React Leaflet</h1>

      {currentLocation ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg"
        >
          <MapContainer center={currentLocation} zoom={13} scrollWheelZoom={false} style={{ height: "500px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={currentLocation} icon={L.divIcon({ className: 'custom-marker' })}>
              <Popup className="bg-gray-800 text-white">
                You are here! <br /> Latitude: {currentLocation[0]}, Longitude: {currentLocation[1]}
              </Popup>
            </Marker>

            <FeatureGroup>
              <EditControl
                position='topright'
                onCreated={handlePolygonDraw}
                draw={{
                  polygon: true,
                  rectangle: false,
                  circle: false,
                  polyline: false,
                  marker: false,
                }}
                styles={{
                  icon: {
                    backgroundColor: '#F00',
                    color: '#FFF',
                    border: '2px solid #F00',
                  },
                }}
              />
            </FeatureGroup>

            <MapComponent setCoordinates={setCoordinates} />
          </MapContainer>
        </motion.div>
      ) : (
        <p className="text-xl mt-4">Loading map...</p>
      )}

      {coordinates && (
        <motion.div className="coordinates bg-gray-800 p-6 rounded-lg mt-4 shadow-lg w-full max-w-lg text-center transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold mb-2">Your Current Location</h2>
          <p><strong>Latitude:</strong> {coordinates.lat}</p>
          <p><strong>Longitude:</strong> {coordinates.lng}</p>
        </motion.div>
      )}

      {polygonDetails && (
        <motion.div className="polygon-details bg-gray-800 p-6 rounded-lg mt-4 shadow-lg w-full max-w-lg text-center transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold mb-2">Polygon Coordinates</h2>
          {polygonDetails.map((latlng, index) => (
            <p key={index}>
              Point {index + 1}: Latitude: {latlng.lat}, Longitude: {latlng.lng}
            </p>
          ))}
          <p><strong>Area:</strong> {calculatePolygonArea(polygonDetails)} sq meters</p>
        </motion.div>
      )}
    </div>
  );
}

// Function to calculate the area of the polygon in square meters
const calculatePolygonArea = (latLngs) => {
  if (latLngs.length < 3) return 0; // Need at least 3 points to make a polygon
  const polygon = L.polygon(latLngs);
  return L.GeometryUtil.geodesicArea(polygon.getLatLngs()[0]).toFixed(2); // Calculate the area in square meters
};

export default App;
