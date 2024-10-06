import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FieldDetails = ({ setFieldDetails }) => {
  const [fieldName, setFieldName] = useState('');
  const [fieldDescription, setFieldDescription] = useState('');
  const [cropType, setCropType] = useState('');

  // Handle form submission to send the field details to the parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { fieldName, fieldDescription, cropType };
    setFieldDetails(details);
    alert('Field details submitted successfully!');
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg mt-4 shadow-lg w-full max-w-lg transition-transform duration-300 hover:scale-105"
    >
      <h2 className="text-3xl font-semibold mb-4">Field Details</h2>
      
      <div className="mb-4">
        <label htmlFor="fieldName" className="block text-sm font-medium text-gray-300">Field Name</label>
        <input
          type="text"
          id="fieldName"
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
          placeholder="Enter field name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="fieldDescription" className="block text-sm font-medium text-gray-300">Field Description</label>
        <textarea
          id="fieldDescription"
          value={fieldDescription}
          onChange={(e) => setFieldDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
          placeholder="Enter a brief description of the field"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cropType" className="block text-sm font-medium text-gray-300">Crop Type</label>
        <input
          type="text"
          id="cropType"
          value={cropType}
          onChange={(e) => setCropType(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
          placeholder="Enter crop type"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
      >
        Submit
      </button>
    </motion.form>
  );
};

export default FieldDetails;