// src/components/FarmersDataDisplay.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaWater, FaTree } from 'react-icons/fa';

const FarmersDataDisplay = ({ farmersData }) => {
  return (
    <div className="mt-6 w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Field Insights</h2>
      {farmersData.map((data) => (
        <motion.div
          key={data.id}
          className="bg-gray-700 p-4 rounded-lg mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-semibold">Field {data.id}</h3>
          <div className="flex items-center mb-2">
            <FaLeaf className="text-green-400 mr-2" />
            <span><strong>Soil Type:</strong> {data.soilType}</span>
          </div>
          <div className="flex items-center mb-2">
            <FaWater className="text-blue-400 mr-2" />
            <span><strong>Moisture Level:</strong> {data.moistureLevel}</span>
          </div>
          <div className="flex items-center">
            <FaTree className="text-yellow-400 mr-2" />
            <span><strong>Crop Health:</strong> {data.cropHealth}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FarmersDataDisplay;
