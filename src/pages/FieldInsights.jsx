// src/pages/FieldInsights.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FieldInsights = () => {
  // Sample data for insights
  const insightsData = [
    {
      title: 'Soil Moisture Level',
      value: '35%',
      description: 'Optimal moisture for healthy crop growth.',
    },
    {
      title: 'Crop Health Index',
      value: '78%',
      description: 'Indicates healthy growth with some areas requiring attention.',
    },
    {
      title: 'Pest Infestation Risk',
      value: 'Low',
      description: 'Minimal risk detected. Continue monitoring regularly.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-4 text-blue-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Field Insights & Reports
      </motion.h1>
      <p className="text-lg text-center mb-8 text-gray-300">
        Get real-time insights into your field conditions and crop health.
      </p>

      {/* Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insightsData.map((insight, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">{insight.title}</h2>
            <p className="text-3xl font-bold text-white">{insight.value}</p>
            <p className="text-gray-300">{insight.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FieldInsights;
