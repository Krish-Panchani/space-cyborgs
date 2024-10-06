// src/components/InsightsDisplay.jsx
import React from 'react';
import { motion } from 'framer-motion';

const InsightsDisplay = ({ insightsData }) => {
  return (
    <motion.div 
      className="insights-display bg-gray-800 p-6 rounded-lg mt-4 shadow-lg w-full transition-transform"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-blue-400 text-center">
        Insights for Farmers
      </h2>
      <ul className="space-y-6">
        {insightsData.map((insight, index) => (
          <motion.li 
            key={index} 
            className="p-4 border border-gray-700 rounded-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-bold mb-2 text-blue-300">{insight.title}</h3>
            <p className="text-gray-200">{insight.description}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default InsightsDisplay;
