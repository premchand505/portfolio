'use client'; 

import { motion, Transition } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import Image from "next/image";

const Homesection = () => {
    
    // Framer Motion Transition Configuration
    const fadeInUpTransition: Transition = {
        type: "spring", 
        stiffness: 70, 
        damping: 15, 
    };

    const imageAnimationTransition: Transition = {
        type: "spring", 
        stiffness: 50, 
        damping: 10,
    };
    
    

    return (
        <section
            id="home"
            className="min-h-screen bg-[#030712] flex items-center pt-32 lg:pt-20 px-6 relative overflow-hidden text-left"
        >
            {/* Subtle radial gradient background for mood */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ background: 'radial-gradient(circle at 10% 50%, #3B82F6/20 0%, transparent 40%)' }}></div>

            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between relative z-10">
                
                {/* Left Column: Text Content (Dominant) - UNTOUCHED */}
                <div className="lg:w-3/5 w-full text-[#F8FAFC] order-2 lg:order-1 mt-10 lg:mt-0">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...fadeInUpTransition, delay: 0.3 }}
                        className="text-xl md:text-2xl text-gray-400 font-mono mb-2 tracking-widest uppercase"
                    >
                        Full-Stack Software Architect
                    </motion.p>
                    
                    {/* Name: Dramatically increased size */}
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...fadeInUpTransition, delay: 0.5 }}
                        className="text-6xl md:text-6xl lg:text-8xl font-extrabold z-10 my-0 leading-none"
                    >
                        PREMCHAND
                    </motion.h1>

                    {/* Secondary Title */}
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...fadeInUpTransition, delay: 0.6 }}
                        className="text-3xl md:text-4xl font-extrabold mt-2 mb-6 leading-tight text-[#3B82F6] border-l-4 border-[#F97316] pl-4"
                    >
                        Architecting Scalable Sotware Systems.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...fadeInUpTransition, delay: 0.8 }}
                        className="text-xl text-gray-400 font-light max-w-2xl mt-6"
                    >
                        Specializing in Next.js/React and NestJS/Python (FastAPI) backends. I build resilient microservices, optimizing solutions to deliver measurable results like 25% client conversion increases.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...fadeInUpTransition, delay: 1.0 }}
                        className="flex flex-col sm:flex-row gap-4 mt-10"
                    >
                        <a
                         
                            href="mailto:prem595pop@gmail.com"
                            className="px-8 py-3 border-2 border-[#F97316] text-[#030712] font-semibold rounded-lg text-center 
                                       bg-[#F97316] hover:bg-[#F97316]/80 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-[#F97316]/30"
                        >
                            <FiMail />
                            Email Me
                        </a>
                        <a
                            href="/Gprem_Resume_.pdf"
                            download
                            className="px-8 py-3 border-2 border-[#3B82F6] text-[#F8FAFC] font-semibold rounded-lg text-center 
                                       hover:bg-[#3B82F6]/10 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                        >
                            <FiDownload />
                            View Resume
                        </a>
                    </motion.div>
                </div>

                {/* --- START REVISED IMAGE SECTION --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ ...imageAnimationTransition, delay: 1.2 }}
                    className="lg:w-2/5 w-64 h-64 md:w-80 md:h-80 relative order-1 lg:order-2 my-10 lg:my-0 lg:ml-16
                                 group" // Added group class for hover effect
                >
                    {/* The main container acts as a sharp, offset border effect */}
                    <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-[#F97316]/40 shadow-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Inner image container with a clean border */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-[#3B82F6] shadow-2xl group-hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-shadow duration-300">
                        <Image
                            src="/cropped-profile.png" 
                            alt="Premchand Geddada - Full-Stack Developer" 
                            layout="fill" 
                            objectFit="contain"
                            priority={true}
                        />
                    </div>
                </motion.div>
                {/* --- END REVISED IMAGE SECTION --- */}
            </div>
        </section>
    );
};

export default Homesection;