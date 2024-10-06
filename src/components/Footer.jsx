// src/components/Footer.jsx
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="flex items-center space-x-2 mb-4 md:mb-0"
        >
          <span className="text-2xl font-Nasa text-blue-500">Space Cyborgs</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex space-x-8 mb-4 md:mb-0">
          <motion.a 
            href="/" 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.2 }} 
            className="hover:text-blue-500"
          >
            Home
          </motion.a>
          <motion.a 
            href="/about" 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.2 }} 
            className="hover:text-blue-500"
          >
            About
          </motion.a>
          <motion.a 
            href="/satellite-dashboard" 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.2 }} 
            className="hover:text-blue-500"
          >
            Satellite Dashboard
          </motion.a>
          <motion.a 
            href="/weather-forecast" 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.2 }} 
            className="hover:text-blue-500"
          >
            Weather Forecast
          </motion.a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <motion.a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.2 }} 
            className="text-gray-400 hover:text-blue-500"
          >
            <FaTwitter size={24} />
          </motion.a>
          <motion.a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.2 }} 
            className="text-gray-400 hover:text-blue-500"
          >
            <FaFacebookF size={24} />
          </motion.a>
          <motion.a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.2 }} 
            className="text-gray-400 hover:text-blue-500"
          >
            <FaInstagram size={24} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.2 }} 
            className="text-gray-400 hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Space Cyborgs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
