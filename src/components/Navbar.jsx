// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaGlobe, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
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
          <span className="text-2xl font-Nasa">Space Cyborgs</span>
        </motion.div>

        {/* Links */}
        <ul className="flex space-x-8 text-white">
          <li>
            <Link to="/" className="hover:text-blue-500 transition-colors duration-200 flex items-center space-x-2">
              <FaGlobe className="text-xl" />
              <span>Home</span>
            </Link>
          </li>
          {/* You can add more nav links here for additional pages */}
          <li>
            <Link to="/about" className="hover:text-blue-500 transition-colors duration-200 flex items-center space-x-2">
              <FaInfoCircle className="text-xl" />
              <span>About</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
