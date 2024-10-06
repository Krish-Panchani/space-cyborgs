// src/components/PolygonDisplay.jsx
import React from 'react';
import { motion } from 'framer-motion';
import L from 'leaflet';

const PolygonDisplay = ({ polygonDetails }) => {
  const calculatePolygonArea = (latLngs) => {
    if (latLngs.length < 3) return 0; // Need at least 3 points to make a polygon
    const polygon = L.polygon(latLngs);
    return L.GeometryUtil.geodesicArea(polygon.getLatLngs()[0]).toFixed(2); // Calculate the area in square meters
  };

  return (
    <motion.div className="polygon-details bg-gray-800 p-6 rounded-lg mt-4 shadow-lg w-full max-w-lg text-center transition-transform duration-300 hover:scale-105">
      <h2 className="text-3xl font-semibold mb-2">Polygon Coordinates</h2>
      {polygonDetails.length > 0 ? (
        <>
          {polygonDetails.map((latlng, index) => (
            <p key={index}>
              Point {index + 1}: Latitude: {latlng.lat}, Longitude: {latlng.lng}
            </p>
          ))}
          <p>
            <strong>Area:</strong> {calculatePolygonArea(polygonDetails)} sq meters
          </p>
        </>
      ) : (
        <p>No polygon details available.</p>
      )}
    </motion.div>
  );
};

export default PolygonDisplay;
