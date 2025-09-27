'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Haptic Video Generator',
      description:
        'A full-stack web app that converts video audio into dynamic haptic feedback patterns. Built with React, FastAPI, FFmpeg, and Librosa. Users can preview haptics in-browser and download JSON/AHAP bundles.',
      image: '/haptic-coverpage.png',
      link: '/project1',
      hosting:'',
    },
    {
      title: 'EventSphere',
      description:
        'A social event-hosting platform where users can create and join events, explore nearby events using interactive maps, and engage in live chat rooms during events. Built with React, Node.js, Socket.IO, and Map APIs.',
      image: '/haptic-coverpage.png',
      link: '/project2',
      hosting:'',
    },
    {
      title: 'Fitness Edge Landingpage',
      description:
        'Landing page for Fitness Edge, featuring modern UI, subscription details, and a showcase of features like calorie logging, personalized plans, and mentorship integration. Built with React and TailwindCSS.',
      image: '/gym-coverpage.png',
      link: '/project3',
      hosting:'',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen overflow-hidden bg-gradient-to-r from-blue-900 to-black scroll-snap-align-start"
    >
      <div className="flex flex-col pt-5 items-center justify-center gap-6">
        {/* Heading with underline animation */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', damping: 25, stiffness: 40, duration: 1.7 }}
          className="relative inline-block text-3xl font-semibold py-10 text-white group"
        >
          My Projects
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-0 left-0 h-1 rounded-lg bg-white group-hover:w-full transition-all duration-300"
          />
        </motion.h1>

        {/* Projects List */}
        <div className="max-w-6xl rounded-lg bg-transparent backdrop-blur-sm w-full py-6 px-6 space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`flex flex-col md:gap-3 md:flex-row items-center md:space-x-8 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="rounded-2xl w-full md:w-2/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-3 w-full md:w-3/5 mt-6 md:mt-0 text-white">
                <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
                <p className="text-white-200 mb-4">{project.description}</p>
                <div className='flex gap-3'>
                  <Link
                  href={project.hosting}
                  className="flex justify-around items-center w-44 bg-white text-black px-5 py-2 rounded-xl shadow hover:scale-105 transition"
                >
                  View Project <FiArrowRight />
                </Link>
                <Link
                  href={project.link}
                  className="flex justify-around items-center w-44 bg-white text-black px-5 py-2 rounded-xl shadow hover:scale-105 transition"
                >
                  Case Study <FiArrowRight />
                </Link></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}