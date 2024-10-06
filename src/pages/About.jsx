// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaSatellite, FaUserAstronaut, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-12 px-4 font-Nasa">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
        className="text-5xl text-center font-bold mb-12"
      >
        About Space Cyborgs
      </motion.h1>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
        className="our-mission mb-16 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Space Cyborgs is dedicated to harnessing the power of satellite data for
          transforming the future of agriculture. Our mission is to equip farmers with
          real-time insights from space, enabling better decision-making for crop health,
          irrigation, and sustainability.
        </p>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="team-section py-16 bg-gray-800 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Meet the Team</h2>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Team Member 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, type: 'spring' }}
            className="team-member bg-black p-6 rounded-lg w-64 shadow-md"
          >
            <FaRocket className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-medium">Krish Panchani</h3>
            <p className="text-gray-400 mt-2">Web Design & Dev</p>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, type: 'spring' }}
            className="team-member bg-black p-6 rounded-lg w-64 shadow-md"
          >
            <FaSatellite className="text-6xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-medium">Vruxak Patel</h3>
            <p className="text-gray-400 mt-2">Web Design & Dev</p>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, type: 'spring' }}
            className="team-member bg-black p-6 rounded-lg w-64 shadow-md"
          >
            <FaUserAstronaut className="text-6xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-medium">Yash Oza</h3>
            <p className="text-gray-400 mt-2">ML Dev</p>
          </motion.div>

          {/* Team Member 4 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, type: 'spring' }}
            className="team-member bg-black p-6 rounded-lg w-64 shadow-md"
          >
            <FaRocket className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-medium">Bhavya Fattania</h3>
            <p className="text-gray-400 mt-2">ML Dev</p>
          </motion.div>

          {/* Team Member 5 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, type: 'spring' }}
            className="team-member bg-black p-6 rounded-lg w-64 shadow-md"
          >
            <FaSatellite className="text-6xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-medium">Abi Raval</h3>
            <p className="text-gray-400 mt-2">Data Researcher</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="contact-section my-16 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">Get in Touch</h2>
        <p className="text-lg leading-relaxed">
          Have questions? Reach out to us via email at{' '}
          <a href="mailto:krishpanchani1346@gmail.com" className="text-blue-300 underline">
            krishpanchani1346@gmail.com
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default About;
