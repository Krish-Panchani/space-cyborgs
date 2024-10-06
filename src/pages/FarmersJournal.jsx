import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPen, FaCalendarDay } from 'react-icons/fa';

const FarmersJournal = () => {
  const [entries, setEntries] = useState([
    { id: 1, date: '2024-10-06', activity: 'Planted corn in field B', notes: 'Expected harvest in 90 days' },
    { id: 2, date: '2024-10-01', activity: 'Irrigated field A', notes: 'Soil moisture optimal after irrigation' },
    { id: 3, date: '2024-09-28', activity: 'Applied fertilizer to field C', notes: 'Used organic fertilizer' }
  ]);

  return (
    <motion.div
      className="bg-gradient-to-b from-blue-900 to-black min-h-screen p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-Nasa text-center text-white mb-8">Farmer's Journal</h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Log New Activity</h2>
          <form className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <FaCalendarDay size={20} className="text-blue-400" />
              <input
                type="date"
                className="bg-gray-700 text-white p-2 rounded-md w-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <FaPen size={20} className="text-blue-400" />
              <input
                type="text"
                placeholder="Activity"
                className="bg-gray-700 text-white p-2 rounded-md w-full"
              />
            </div>
            <textarea
              placeholder="Notes (optional)"
              className="bg-gray-700 text-white p-2 rounded-md w-full"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Add Entry
            </button>
          </form>
        </div>

        <div className="text-white">
          <h2 className="text-3xl font-semibold mb-4">Journal Entries</h2>
          <div className="space-y-6">
            {entries.map((entry) => (
              <motion.div
                key={entry.id}
                className="bg-gray-700 p-4 rounded-lg shadow-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg font-semibold">{entry.activity}</p>
                <p className="text-gray-400">{entry.date}</p>
                <p className="mt-2">{entry.notes}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FarmersJournal;
