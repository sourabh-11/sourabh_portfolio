// import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import weather from "../assets/weather.png"; // Importing the image
import portfoliimg from "../assets/portfolio.png"; // Importing the image

const projects = [
  { id: 1, title: "Portfolio web ", description: "Welcome to my portfolio! I am a passionate full-stack web developer specializing in modern, scalable, and user-friendly applications", link: "/projects/inventory", img: portfoliimg },
  { id: 2, title: "E-Learning Platform", description: "React & Express-based learning system with progress tracking.", link: "/projects/elearning", img: "/assets/images/elearning.jpg" },
  { id: 3, title: "Task Management System", description: "A Kanban-style task manager with drag-and-drop support.", link: "/projects/taskmanager", img: weather }, // Fixed this line
  { id: 4, title: "Weather App", description: "A React-based weather app with real-time updates.", link: "https://github.com/sourabh-11/weather", img: weather },
];

const Projects = () => {
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
      <div className="container mx-auto px-4 py-16 relative z-10 text-white">
        <h1 className="text-5xl font-bold text-center mb-10">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:bg-opacity-20 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
            >
              <img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h2>
              <p className="mb-4 text-gray-800">{project.description}</p>
              <Link
                to={project.link}
                className="bg-purple-600 hover:bg-purple-700 text-gray-800 font-semibold py-2 px-4 rounded-lg"
              >
                View Project
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
