// src/components/CoordinatesDisplay.js
import React from 'react';
import { motion } from 'framer-motion';

const CoordinatesDisplay = ({ coordinates }) => {
  return (
    <motion.div className="coordinates bg-gray-800 p-6 rounded-lg mt-4 shadow-lg w-full max-w-lg text-center transition-transform duration-300 hover:scale-105">
      <h2 className="text-3xl font-semibold mb-2">Your Current Location</h2>
      <p><strong>Latitude:</strong> {coordinates.lat}</p>
      <p><strong>Longitude:</strong> {coordinates.lng}</p>
    </motion.div>
  );
};

export default CoordinatesDisplay;
