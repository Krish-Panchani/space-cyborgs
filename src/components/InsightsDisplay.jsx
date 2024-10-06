// src/components/InsightsDisplay.jsx
import React from 'react';
import { motion } from 'framer-motion';

const InsightsDisplay = ({ insightsData }) => {
  return (
    <motion.div className="insights-display bg-gray-800 p-6 rounded-lg mt-4 shadow-lg w-full transition-transform ">
      <h2 className="text-3xl  font-semibold mb-4">Insights for Farmers</h2>
      <ul className="space-y-4 flex gap-4">
        {insightsData.map((insight, index) => (
          <li key={index} className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-bold">{insight.title}</h3>
            <p>{insight.description}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default InsightsDisplay;
