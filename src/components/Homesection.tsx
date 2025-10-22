'use client'; 

import { motion, Transition } from "framer-motion";
import { FiArrowRight, FiDownload, FiEye } from "react-icons/fi";
import Image from "next/image";
import { useState, useEffect } from "react"; 
import { supabase } from '../lib/supabaseClient'; 
import Link from "next/link";

const Homesection = () => {
    
    // --- State for visitor count ---
    const [visitorCount, setVisitorCount] = useState<number | null>(null);

    // --- useEffect to fetch count on component load ---
    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                const { data, error } = await supabase.rpc('increment_visit_count');

                if (error) {
                    console.error("Error fetching visitor count:", error);
                    setVisitorCount(0); 
                } 
                
                if (data) {
                    setVisitorCount(data); 
                }

            } catch (error) {
                console.error("Failed to fetch visitor count:", error);
                setVisitorCount(0); 
            }
        };

        fetchVisitorCount();
    }, []); 

    
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

    // Handles both opening in a new tab and downloading
    const handleResumeClick = () => {
        const resumeUrl = '/Premchand_Geddada_Resume.pdf'; 
        window.open(resumeUrl, '_blank');
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'Premchand_Geddada_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section
            id="home"
            className="min-h-screen bg-[#030712] flex items-center pt-32 lg:pt-20 px-6 relative overflow-hidden text-left"
        >
            {/* Subtle radial gradient background for mood */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ background: 'radial-gradient(circle at 10% 50%, #3B82F6/20 0%, transparent 40%)' }}></div>

            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between relative z-10">
                
                {/* Left Column: Text Content */}
                <div className="lg:w-3/5 w-full text-[#F8FAFC] order-2 lg:order-1 mt-10 lg:mt-0 ">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...fadeInUpTransition, delay: 0.3 }}
                        className="text-xl md:text-2xl text-gray-400 font-mono mb-2 tracking-widest uppercase"
                    >
                        Full-Stack Developer
                    </motion.p>
                
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...fadeInUpTransition, delay: 0.5 }}
                        className="text-5xl md:text-6xl lg:text-8xl  font-extrabold z-10 my-0 leading-none"
                    >
                        PREMCHAND
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...fadeInUpTransition, delay: 0.6 }}
                        className="text-3xl md:text-4xl font-extrabold mt-2 mb-6 leading-tight text-[#3B82F6] border-l-4 border-[#F97316] pl-4"
                    >
                        I build modern, scalable web applications.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...fadeInUpTransition, delay: 0.8 }}
                        className="text-xl text-gray-400 font-light max-w-2xl mt-6"
                    >
                        My focus is on robust backend systems and smooth user experiences, drawing from my project work with microservices, AI, and cloud technologies.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...fadeInUpTransition, delay: 1.0 }}
                        className="flex flex-col sm:flex-row gap-4 mt-10"
                    >
                        <Link
                            href="/#projects"
                            className="px-8 py-3 border-2 border-[#F97316] text-[#030712] font-semibold rounded-lg text-center 
                                       bg-[#F97316] hover:bg-[#F97316]/80 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-[#F97316]/30"
                        >
                            See My Projects <FiArrowRight />
                        </Link>

                        <button
                            onClick={handleResumeClick}
                            className="px-8 py-3 border-2 border-[#3B82F6] text-[#F8FAFC] font-semibold rounded-lg text-center 
                                       hover:bg-[#3B82F6]/10 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                        >
                            <FiDownload />
                            View Resume
                        </button>
                    </motion.div>
                </div>

                {/* --- Right Column (Image + Visitor Counter) --- */}
                <div className="relative order-1 lg:order-2 lg:w-2/5 lg:ml-16 flex flex-col items-center">
                    {/* V1 Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ ...imageAnimationTransition, delay: 1.2 }}
                        className="w-64 h-64 md:w-80 md:h-80 relative my-10 lg:my-0 group"
                    >
                        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-[#F97316]/40 shadow-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-[#3B82F6] shadow-2xl group-hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-shadow duration-300">
                            
                            {/* --- IMAGE COMPONENT UPDATED --- */}
                            <Image
                                src="/cropped-profile.png" 
                                alt="Premchand Geddada - Full-Stack Developer" 
                                fill={true} // Replaces layout="fill"
                                style={{ objectFit: 'contain' }} // Replaces objectFit="contain"
                                priority={true}
                            />
                            {/* --- END UPDATE --- */}

                        </div>
                    </motion.div>

                    {/* --- NEW VISITOR COUNTER BOX --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...fadeInUpTransition, delay: 1.4 }}
                        className="p-4 bg-[#000000] rounded-lg border border-[#3B82F6]/50 shadow-lg mt-8 w-64 md:w-80"
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">Website Visitors</p>
                            <FiEye className="w-5 h-5 text-[#3B82F6]" />
                        </div>
                        <p className="text-4xl font-extrabold text-[#F97316] mt-2 min-h-[40px]">
                            {/* Display loading state or formatted count */}
                            {visitorCount === null ? (
                                <span className="text-2xl text-gray-400">Loading...</span>
                            ) : (
                                new Intl.NumberFormat('en-US').format(visitorCount)
                            )}
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Homesection;