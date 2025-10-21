'use client';

import { useEffect } from 'react';
import Homesection from '../components/Homesection';
import Aboutsection from '../components/Aboutsection';
import Projectssection from '../components/Projectssection';
export default function Home() {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#030712]">
      <Homesection />
      <Aboutsection />
      <Projectssection />
    </div>
  );
}