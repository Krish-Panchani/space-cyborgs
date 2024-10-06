// src/pages/MandiPortal.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaSortAmountDown, FaSortAmountUp, FaFilter } from 'react-icons/fa';

const MandiPortal = () => {
  const [mandiData, setMandiData] = useState([]);
  const [originalData, setOriginalData] = useState([]); // Store original data
  const [searchTerm, setSearchTerm] = useState('');
  const [activeButton, setActiveButton] = useState('getDetails'); // Default active button

  // Fetch Mandi Details
  const fetchMandiDetails = async () => {
    const response = await fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=25');
    const data = await response.json();
    setMandiData(data.records);
    setOriginalData(data.records); // Set the original data
    setActiveButton('getDetails'); // Set active button to Get Mandi Details
  };

  // Use effect to fetch data on component mount
  useEffect(() => {
    fetchMandiDetails(); // Call the function to fetch data
  }, []); // Empty dependency array means it runs once on mount

  // Sort Functions
  const sortByPrice = () => {
    const sortedData = [...mandiData].sort((a, b) => a.modal_price - b.modal_price);
    setMandiData(sortedData);
    setActiveButton('sortByPrice'); // Update active button state
  };

  const sortByDistrict = () => {
    const sortedData = [...mandiData].sort((a, b) => a.district.localeCompare(b.district));
    setMandiData(sortedData);
    setActiveButton('sortByDistrict'); // Update active button state
  };

  const sortByState = () => {
    const sortedData = [...mandiData].sort((a, b) => a.state.localeCompare(b.state));
    setMandiData(sortedData);
    setActiveButton('sortByState'); // Update active button state
  };

  // Improved Search Functionality
  const handleSearch = () => {
    if (!searchTerm) {
      setMandiData(originalData); // Reset to original data if search term is empty
      return;
    }
    const filteredData = originalData.filter(item =>
      item.market.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.commodity.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMandiData(filteredData);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-blue-800">Mandi Portal</h1>
        <p className="text-gray-600">Get Complete Details of the Market</p>
      </motion.div>

      <div className="flex flex-col md:flex-row md:items-center mb-4">
        <button
          className={`py-2 px-4 rounded-lg shadow-md transition duration-300 mr-2 ${activeButton === 'getDetails' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={fetchMandiDetails}
        >
          Get Mandi Details
        </button>

        <button
          className={`py-2 px-4 rounded-lg shadow-md transition duration-300 mr-2 ${activeButton === 'sortByPrice' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={sortByPrice}
        >
          <FaSortAmountDown className="inline mr-2" /> Sort By Price
        </button>

        <button
          className={`py-2 px-4 rounded-lg shadow-md transition duration-300 mr-2 ${activeButton === 'sortByDistrict' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={sortByDistrict}
        >
          <FaSortAmountUp className="inline mr-2" /> Sort By District
        </button>

        <button
          className={`py-2 px-4 rounded-lg shadow-md transition duration-300 ${activeButton === 'sortByState' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={sortByState}
        >
          <FaFilter className="inline mr-2" /> Sort By State
        </button>
      </div>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter Market / Crop Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 mr-2 w-full"
        />
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>

      <div id="display_mandi" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mandiData.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-tomato-600">{item.district}, {item.state}</h3>
            <h2 className="text-gray-700">
              Rs {item.modal_price}, {item.commodity}
            </h2>
            <ul className="text-gray-600 mt-2">
              <li>Arrival Date: {item.arrival_date}</li>
              <li>Market: {item.market}</li>
              <li>Variety: {item.variety}</li>
              <div className='flex items-center gap-4'>
              <li>
                <span className="bg-green-100 text-green-800 font-semibold py-1 px-2 rounded inline-block">
                  Max Rate: Rs {item.max_price}
                </span>
              </li>
              <li>
                <span className="bg-red-100 text-red-800 font-semibold py-1 px-2 rounded inline-block">
                  Min Rate: Rs {item.min_price}
                </span>
              </li>
              </div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MandiPortal;
