import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaGlobe, FaInfoCircle, FaBook, FaCloudSun, FaHandHoldingHeart, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for controlling sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Links data
  const links = [
    { path: '/', title: 'Home', icon: <FaGlobe className="text-xl" /> },
    { path: '/field-insights', title: 'Field Insights', icon: <FaBook className="text-xl" /> },
    { path: '/satellite-dashboard', title: 'Satellite Dashboard', icon: <FaCloudSun className="text-xl" /> },
    { path: '/weather-forecast', title: 'Weather Forecast', icon: <FaCloudSun className="text-xl" /> },
    { path: '/mandi-portal', title: 'Mandi Portal', icon: <FaHandHoldingHeart className="text-xl" /> },
    { path: '/about', title: 'About', icon: <FaInfoCircle className="text-xl" /> },
  ];

  return (
    <nav className="bg-black py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaRocket className="text-2xl text-blue-500" />
          <span className="text-2xl font-Nasa">SAIC</span>
        </motion.div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white">
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white">
          {links.map(link => (
            <li key={link.title}>
              <Link to={link.path} className="hover:text-blue-500 transition-colors duration-200 flex items-center space-x-2">
                {link.icon}
                <span>{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        className={`fixed inset-0 z-50 bg-black bg-opacity-75 transition-transform transform md:hidden`}
        initial={{ opacity: 0, x: '100%' }} // Start off-screen
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }} // Slide in/out effect
        exit={{ opacity: 0, x: '100%' }} // Slide out effect
        transition={{ duration: 0.3 }} // Duration of the animation
      >
        <div className="bg-white h-full w-64 shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-Nasa">Mandi Mart</span>
            <button onClick={toggleSidebar} className="text-black">
              <FaTimes className="text-2xl" />
            </button>
          </div>
          <ul className="flex flex-col space-y-4">
            {links.map(link => (
              <li key={link.title}>
                <Link
                  to={link.path}
                  className="hover:text-blue-500 transition-colors duration-200 flex items-center space-x-2"
                  onClick={toggleSidebar}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
