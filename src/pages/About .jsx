// import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // List of skills
  const skills = [
    { name: 'C++', level: '80%' },
    { name: 'DSA', level: '75%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'ReactJS', level: '80%' },
    { name: 'HTML5', level: '98%' },
    { name: 'CSS3', level: '95%' },
    { name: 'SQL', level: '85%' },
    { name: 'GitHub', level: '90%' },
    { name: 'Tailwind', level: '92%' },
    { name: 'PostgreSQL', level: '88%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Introduction */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-3xl font-semibold">Who Am I?</h2>
            <p className="text-lg">
              I&apos;m a passionate web developer with a strong foundation in computer science and a love for building modern, responsive, and user-friendly applications. I specialize in front-end development using ReactJS and have experience working with databases like PostgreSQL.
            </p>
            <p className="text-lg">
              I enjoy solving complex problems using Data Structures and Algorithms (DSA) and have a solid understanding of programming languages like C++ and JavaScript.
            </p>
          </motion.div>

          {/* Right Side: Skills */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-3xl font-semibold">My Skills</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-lg">{skill.name}</span>
                    <span className="text-lg">{skill.level}</span>
                  </div>
                  <motion.div
                    className="h-2 bg-gray-700 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  >
                    <div className="h-full bg-purple-600 rounded-full"></div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;