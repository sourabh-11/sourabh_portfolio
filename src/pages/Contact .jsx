// import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from 'react-icons/fa'; // Icons from react-icons

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-black overflow-hidden relative">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-black opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center relative z-10">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h1>

        {/* Form */}
        <motion.form
          className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-lg text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-lg text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Enter your message"
                className="w-full px-4 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-lg  placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        {/* Social Media Icons */}
        <motion.div
          className="flex space-x-6 mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="https://github.com/sourabh-11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-all duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/sourabh-jangid001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-all duration-300"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://instagram.com/sourabh_jangid01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-all duration-300"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://leetcode.com/sourabhjangid2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-all duration-300"
          >
            <FaCode size={32} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;