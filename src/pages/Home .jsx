// import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import myImage from "../assets/home1.jpg";

const Home = () => {
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
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Side: About Me */}
        <motion.div
          className="w-full md:w-1/2 text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Sourabh</h1>
          <p className="text-xl mb-6">
            A passionate web developer specializing in building modern, responsive, and user-friendly websites.
          </p>
          <Link to={'about'} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-300">
            View My Work
          </Link>
        </motion.div>

        {/* Right Side: Image with Dark Overlay */}
        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={myImage} // Replace with your image
            alt="Developer"
            className="rounded-[30px] shadow-2xl w-[400px] h-[400px] object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-[30px]"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
