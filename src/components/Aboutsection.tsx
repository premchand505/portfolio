'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiTensorflow, SiScikitlearn, SiPandas, SiVercel } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export default function AboutSection() {
  const categories = [
    {
      title: 'Frontend',
      tech: [
        { name: 'React', icon: <FaReact className="text-4xl text-blue-500" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-black" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
      ],
    },
    {
      title: 'Backend',
      tech: [
        { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" /> },
        { name: 'Express', icon: <SiExpress className="text-4xl text-gray-700" /> },
        { name: 'REST API', icon: <TbApi className="text-4xl text-orange-400" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl text-blue-600" /> },
      ],
    },
    {
      title: 'AI / ML',
      tech: [
        { name: 'Python', icon: <FaPython className="text-4xl text-yellow-500" /> },
        { name: 'TensorFlow', icon: <SiTensorflow className="text-4xl text-orange-500" /> },
        { name: 'scikit-learn', icon: <SiScikitlearn className="text-4xl text-blue-400" /> },
        { name: 'Pandas', icon: <SiPandas className="text-4xl text-purple-500" /> },
      ],
    },
    {
      title: 'Others',
      tech: [
        { name: 'Git', icon: <FaGitAlt className="text-4xl text-red-500" /> },
        { name: 'GitHub', icon: <FaGithub className="text-4xl text-black" /> },
        { name: 'Vercel', icon: <SiVercel className="text-4xl text-black" /> },
        { name: 'Docker', icon: <FaDocker className="text-4xl text-blue-500" /> },
      ],
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-r overflow-hidden to-black from-blue-900 p-16 scroll-snap-align-start">
      {/* About Me */}
      <div className="flex flex-col pt-5 items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', damping: 25, stiffness: 40, duration: 1.7 }}
          className="relative inline-block text-3xl text-white font-semibold py-10 group"
        >
          About Me
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-0 left-0 h-1 rounded-lg bg-white group-hover:w-full transition-all duration-300"
          />
        </motion.h1>
        <p className="text-2xl my-10 text-white/80 text-center font-light">
          I am keenly interested in developing full stack applications with interactive
          user experience and enhanced performance for scalability
        </p>
      </div>
      <div className="w-full my-20 flex flex-col gap-10 md:flex-row md:gap-0 justify-around items-center">
        <div className="flex flex-col gap-2 p-6 bg-white/5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <h1 className="text-2xl font-medium text-white">
            Python Full Stack Developer | HMI Engineering Services
          </h1>
          <p className="font-light text-xl text-white/80">
            6 month industrial internship in python full stack development
          </p>
        </div>

       {/*<div className=" flex flex-col gap-2 p-6 bg-white/5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <h1 className="text-2xl font-medium text-white">
            Python Full Stack Developer | HMI Engineering Services
          </h1>
          <p className="font-light text-xl text-white/80">
            6 month industrial internship in python full stack development
          </p>
        </div>
        */}
      </div>
        

      {/* Tech Stack */}
      <div className="flex flex-col pt-5 items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', damping: 25, stiffness: 40, duration: 1.7 }}
          className="relative inline-block text-3xl  text-white font-semibold py-10 group"
        >
          My Tech Stack
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-0 left-0 h-1 rounded-lg bg-white group-hover:w-full transition-all duration-300"
          />
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mt-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: 'spring', stiffness: 100, damping: 25, delay: index * 0.2, duration: 0.6 }}
              className="bg-blue-900/20 rounded-2xl shadow-lg hover:shadow-lg hover:shadow-blue-600/80 p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-xl font-bold mb-6 text-center text-white">{category.title}</h2>
              <div className="grid grid-cols-3 gap-4">
                {category.tech.map((tech, i) => (
                  <div key={i} className="flex flex-col items-center text-center hover:scale-110 transition-transform">
                    {tech.icon}
                    <span className="mt-2 text-sm text-white">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}