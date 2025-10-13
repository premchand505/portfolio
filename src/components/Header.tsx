'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMenu, FiX, FiMail } from 'react-icons/fi';

// Define navigation items
const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'AboutMe', href: '/#aboutme' },
  { name: 'Projects', href: '/#projects' },
];

// Define social media links
const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/premchand505', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/gpremchand', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' }, // Use your actual Twitter link
  { icon: FiInstagram, href: '#', label: 'Instagram' }, // Use your actual Instagram link
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const contactEmail = 'mailto:premchandgeddada@gmail.com'; 

  return (
    <header className="fixed w-full z-50 bg-[#030712]/90 backdrop-blur-sm border-b border-[#3B82F6]/20 transition-all duration-300">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Logo/Name (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex space-x-2 items-center"
        >
          <span className="text-2xl font-extrabold text-[#F8FAFC] tracking-wider hover:text-[#F97316] transition-colors">
            PREMCHAND G
          </span>
        </motion.div>

        {/* Desktop Navigation (Center-Symmetrical) */}
        <nav className="hidden lg:flex space-x-10 items-center">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className="relative group text-[#F8FAFC] hover:text-[#F97316] font-medium transition-colors duration-300 text-base"
              >
                {item.name}
                {/* Symmetrical underline */}
                <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-0 h-[3px] bg-[#F97316] group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Social Icons & Contact (Right) */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex space-x-4 mr-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="text-[#3B82F6]/60 hover:text-[#F97316] transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          
          <motion.a
            href={contactEmail}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="px-4 py-2 border-2 border-[#F97316] text-[#F8FAFC] rounded-lg font-semibold text-sm
                       bg-[#F97316]/10 hover:bg-[#F97316]/20 transition-all duration-300 flex items-center gap-2"
          >
            <FiMail className="w-4 h-4" />
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="text-white p-2 rounded-lg hover:bg-[#3B82F6]/20 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden bg-[#030712] shadow-2xl p-6 border-t border-[#3B82F6]/20"
          >
            <nav className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-lg font-medium text-[#F8FAFC] hover:text-[#F97316] transition-colors duration-200 w-full text-center py-2"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex justify-center space-x-6 mt-6 pt-4 border-t border-[#3B82F6]/20">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-[#3B82F6]/60 hover:text-[#F97316] transition" />
                </a>
              ))}
            </div>
            <a
                href={contactEmail}
                onClick={toggleMenu}
                className="mt-6 px-6 py-3 border-2 border-[#F97316] text-[#F8FAFC] rounded-lg font-semibold 
                           bg-[#F97316]/10 hover:bg-[#F97316]/20 transition-all duration-300 flex items-center gap-2 justify-center w-full"
            >
                <FiMail className="w-5 h-5" />
                Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}