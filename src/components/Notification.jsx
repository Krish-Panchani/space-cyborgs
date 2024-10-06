// src/components/Notification.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBullhorn, FaLeaf, FaCloudRain } from 'react-icons/fa';

const announcementData = [
  { icon: <FaBullhorn />, text: 'New agricultural insights available for crop planning.' },
  { icon: <FaLeaf />, text: 'Monitor vegetation growth with real-time satellite data.' },
  { icon: <FaCloudRain />, text: 'Upcoming precipitation forecast for your region.' },
];

const Notification = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  // Set interval for announcements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcementData.length);
    }, 5000); // Change announcement every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black backdrop-blur-md text-white p-4 rounded-xl shadow-lg overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentAnnouncement}
          initial={{ y: 50, opacity: 0, scale: 0.95 }}  // Smoothly enter from below, slightly zoomed out
          animate={{ y: 0, opacity: 1, scale: 1 }}     // Come to the center and zoom in slightly
          exit={{ y: -50, opacity: 0, scale: 0.95 }}   // Exit to the top with fading and slight zoom-out
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 15,
            opacity: { duration: 0.7 },
          }}
          className="flex items-center space-x-4 p-3"
        >
          {/* Icon Section with a little scaling effect */}
          <motion.div
            className="text-3xl text-blue-300"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {announcementData[currentAnnouncement].icon}
          </motion.div>

          {/* Text Section */}
          <div className="text-lg font-medium text-blue-200">
            {announcementData[currentAnnouncement].text}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative Animated Border at the Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-blue-600"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{
          duration: 4.5,  // Animate the bottom border over the duration of the announcement
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default Notification;
