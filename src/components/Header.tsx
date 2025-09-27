'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {  motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => setIsOpen(!isOpen);
  

  return (
    <header className="fixed  text-white-50 w-full z-50  bg-blue-800 transition-all duration-300">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25, delay: 0.4, duration: 1.2 }}
          className="flex space-x-2 items-center"
        >
          <Image
            className="mt-2 h-10 w-15 rounded-xl object-contain"
            src="headerlogo.svg"
            alt="Premchand-dev"
            width={60}
            height={40}
          />
          <span className="text-xl font-bold bg-white bg-clip-text text-transparent">
            Premchand-dev
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden space-x-8">
          {['Home', 'AboutMe', 'Projects'].map((item, index) => {
            const linkTarget = `/#${item.toLowerCase()}`;
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.7 + index * 0.2 }}
              >
                <Link
                  href={linkTarget}
                  className="relative group text-white-50 hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Desktop Social Icons and Hire Me Button */}
        <div className="lg:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="text-white-50 hover:text-blue-400 transition-colors duration-300"
            href="https://github.com/premchand505"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="text-white-50 hover:text-blue-400 transition-colors duration-300"
            href="https://www.linkedin.com/in/gpremchand"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="text-white-50 hover:text-blue-400 transition-colors duration-300"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FiTwitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="text-white-50 hover:text-blue-400 transition-colors duration-300"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram className="w-5 h-5" />
          </motion.a>
         
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-white-50"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden rounded-lg overflow-hidden mx-1 bg-black-800 shadow-lg px-5 py-5 space-y-5 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <nav className="flex flex-col space-y-3">
          {['Home', 'AboutMe', 'Projects'].map((item) => {
            const linkTarget = `/#${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={linkTarget}
                onClick={toggleMenu}
                className="text-white-50 font-medium py-2 hover:text-blue-400"
              >
                {item}
              </Link>
            );
          })}
        </nav>
        <div className="pt-4 border-t border-black-600">
          <div className="flex space-x-7">
            <a
              href="https://github.com/premchand505"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub className="h-5 w-5 text-white-50 hover:text-blue-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/gpremchand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-5 w-5 text-white-50 hover:text-blue-400" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter className="h-5 w-5 text-white-50 hover:text-blue-400" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram className="h-5 w-5 text-white-50 hover:text-blue-400" />
            </a>
          </div>
         
       
        </div>
      </motion.div>

      
    </header>
  );
}