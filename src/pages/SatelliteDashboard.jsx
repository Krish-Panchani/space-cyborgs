// src/pages/SatelliteDashboard.jsx
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement // Add PointElement for the line chart
);

const SatelliteDashboard = () => {
  // Sample satellite data (replace with actual data)
  const vegetationData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Vegetation Index',
        data: [30, 40, 45, 50, 60, 80],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Precipitation (mm)',
        data: [20, 30, 25, 35, 40, 50],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const temperatureData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [15, 16, 18, 20, 24, 30],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.4)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // Options for the Bar and Line charts
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Satellite Data Overview',
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-4 text-blue-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Satellite Data Dashboard
      </motion.h1>
      <p className="text-lg text-center mb-8 text-gray-300">
        Analyze satellite data to gain insights on vegetation health, precipitation, and more.
      </p>

      {/* Bar Chart for Vegetation and Precipitation Data */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
      >
        <Bar data={vegetationData} options={options} />
      </motion.div>

      {/* Line Chart for Temperature Data */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
      >
        <Line data={temperatureData} options={{ ...options, title: { text: 'Temperature Trends' } }} />
      </motion.div>

      {/* Key Insights Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div 
          className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-blue-400">Key Insight 1</h2>
          <p className="text-gray-300">The highest vegetation index was observed in May, indicating optimal growing conditions.</p>
        </motion.div>
        <motion.div 
          className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-blue-400">Key Insight 2</h2>
          <p className="text-gray-300">Increased precipitation in June may lead to enhanced crop yield but also flood risk.</p>
        </motion.div>
        <motion.div 
          className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-blue-400">Key Insight 3</h2>
          <p className="text-gray-300">Continuous monitoring helps in early drought detection through vegetation indices.</p>
        </motion.div>
        <motion.div 
          className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-blue-400">Key Insight 4</h2>
          <p className="text-gray-300">Utilizing satellite imagery allows for precision agriculture and sustainable practices.</p>
        </motion.div>
      </div>

      {/* Indicators Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-blue-300">Average Vegetation Index</h3>
          <p className="text-gray-200">45</p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-blue-300">Total Rainfall (last 30 days)</h3>
          <p className="text-gray-200">120 mm</p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-blue-300">Average Temperature</h3>
          <p className="text-gray-200">22°C</p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-blue-300">Crop Health Status</h3>
          <p className="text-gray-200">Healthy</p>
        </motion.div>
      </div>

      {/* Notifications Section */}
      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Notifications</h3>
        <ul className="space-y-2">
          <li className="text-gray-300">⚠️ Warning: High risk of flooding in low-lying areas.</li>
          <li className="text-gray-300">🌱 New satellite data available for analysis.</li>
          <li className="text-gray-300">📈 Vegetation index shows significant improvement.</li>
          <li className="text-gray-300">🌧️ Rain forecasted for the next week.</li>
        </ul>
      </div>
    </div>
  );
};

export default SatelliteDashboard;
