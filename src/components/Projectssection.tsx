'use client';

import { motion, Transition } from 'framer-motion';
import { FiCode, FiExternalLink, FiZap, FiTarget, FiDatabase, FiActivity, FiTrendingUp } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';


// Framer Motion Transition Configuration for quick fade-in
const transitionConfig: Transition = {
    type: "tween", 
    duration: 0.6, 
    ease: "easeOut"
};

// Helper component for the Tech Tags
const TechTag: React.FC<{ text: string }> = ({ text }) => (
    <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-medium rounded-full mr-2 mb-2 whitespace-nowrap">
        {text}
    </span>
);

// Helper component for compact Metrics Display
interface Metric {
    icon: React.ElementType;
    value: string;
    label: string;
    color: string;
}

const MetricDisplay: React.FC<{ metrics: Metric[] }> = ({ metrics }) => (
    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm border-t border-[#3B82F6]/20 pt-4">
        {metrics.map((metric, index) => (
            <div key={index} className="flex items-center space-x-1">
                <metric.icon className={`w-4 h-4 ${metric.color}`} />
                <span className="text-gray-300 font-medium">{metric.value}</span>
                <span className="text-gray-500 font-light">({metric.label})</span>
            </div>
        ))}
    </div>
);


// Define Project Data with Metrics Icons
const projectData = [
    {
        title: 'Haptic Video Generator',
        tag: 'AI/ML Microservices Platform',
        description:
            'Architected a resilient, cost-optimized microservices system with Next.js, NestJS, and FastAPI. Implemented an asynchronous job processing pipeline via **GCP Pub/Sub** to handle 250MB+ video uploads and achieve **85% accuracy** in haptic pattern generation (FFmpeg/Librosa). Achieved **99.9% uptime**.',
        image: '/haptic-coverpage.png',
        live: 'https://hapticvideo.vercel.app/',
        github: 'https://github.com/premchand505/hapticvideo',
        techStack: ['Next.js', 'NestJS', 'FastAPI', 'GCP Cloud Run', 'Docker'],
        metrics: [
            { icon: FiTarget, value: '85% Accuracy', label: 'ML', color: 'text-green-500' },
            { icon: FiActivity, value: '99.9% Uptime', label: 'Resilience', color: 'text-blue-500' },
        ]
    },
    {
        title: 'EventSphere',
        tag: 'Scalable Event Management Platform',
        description:
            'Built a production-ready, full-stack platform capable of handling **500+ concurrent users**. Features include JWT/OAuth, **Stripe payments**, and real-time chat with **Socket.IO**. Deployed on **Google Cloud Run** guaranteeing **<200ms API response times**.',
        image: '/eventsphere-coverpage.png',
        live: 'https://eventsphere-frontend.vercel.app/',
        github: 'http://github.com/premchand505/eventsphere-frontend',
        techStack: ['Next.js', 'NestJS', 'PostgreSQL', 'Socket.IO', 'Stripe API'],
        metrics: [
            { icon: FiZap, value: '<200ms RT', label: 'API Speed', color: 'text-yellow-500' },
            { icon: FiTrendingUp, value: '500+ Users', label: 'Capacity', color: 'text-pink-500' },
        ]
    },
    {
        title: 'Job Hunt Navigator',
        tag: 'Chrome Extension & Dashboard',
        description:
            'Developed a Manifest V3 Chrome Extension and React dashboard. Engineered a **DOM scraping engine** using Chrome.debugger API, achieving **95% accuracy** on Indeed. Features real-time cross-device synchronization using Firebase Firestore with optimistic UI updates.',
        image: '/eventsphere-coverpage.png',
        live: '#',
        github: 'github.com/premchand505/job-hunt-navigator',
        techStack: ['React', 'TypeScript', 'Chrome API', 'Firebase Auth/Firestore'],
        metrics: [
            { icon: FiTarget, value: '95% Accuracy', label: 'Scraping', color: 'text-green-500' },
            { icon: FiDatabase, value: 'Optimistic UI', label: 'Sync', color: 'text-indigo-400' },
        ]
    },

     {
        title: 'Fitness Edge Landing Page',
        tag: 'Gym Landing Page',
        description:
            'Designed and deployed a targeted landing page that simplified the user journey. Focused content and a clear call-to-action (CTA) funnel drove a 3x improvement in lead qualification compared to the original homepage.',
        image: '/gym-coverpage.png',
        live: 'https://fitnessedge-two.vercel.app/',
        github: 'github.com/premchand505/job-hunt-navigator',
        techStack: ['React', 'JavaScript', 'CSS3', 'HTML%'],
        metrics: [
            { icon: FiTarget, value: '25% Lead Conversion', label: 'LEADS', color: 'text-green-500' },
            { icon: FiTarget, value: 'User Friendly UI', label: 'UI', color: 'text-indigo-400' },
        ]
    },
];

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-[#030712] p-6 md:p-16 scroll-snap-align-start"
        >
            <div className="flex flex-col pt-5 items-center justify-center gap-6 max-w-7xl mx-auto">
                
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={transitionConfig}
                    className="relative inline-block text-4xl text-[#F8FAFC] font-extrabold pb-4 mb-12 mx-auto text-center w-full"
                >
                    Featured  Projects
                    <span className="block  h-1 bg-[#F97316]/90 mt-2 mx-auto rounded-full"></span>
                </motion.h1>

                {/* Projects List */}
                <div className="w-full space-y-16">
                    {projectData.map((project, index) => (
                        <motion.div
                            key={index}
                            // Sleek animation: fade-in only, no heavy horizontal movement
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ ...transitionConfig, delay: index * 0.1 }}
                            
                            // Compact, refined card style
                            className={`flex flex-col rounded-xl overflow-hidden shadow-2xl bg-[#0F172A] 
                                        lg:flex-row border border-[#3B82F6]/30 hover:border-[#F97316]/50 transition-all duration-300 group
                                        hover:shadow-[0_15px_40px_rgba(249,115,22,0.1)]`} 
                        >
                            {/* Image Container (Visual Priority) */}
                            <div 
                                className={`w-full lg:w-3/5 relative h-64 md:h-80 ${ 
                                    index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'
                                }`}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            {/* Text/Details (The primary content block) */}
                            <div 
                                className={`p-6 w-full lg:w-2/5 flex flex-col ${ 
                                    index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'
                                }`}
                            >
                                <p className="text-[#F97316] font-mono text-sm uppercase tracking-widest mb-1">
                                    {project.tag}
                                </p>
                                <h2 className="text-3xl font-extrabold mb-3 text-[#F8FAFC]">{project.title}</h2>
                                <p className="text-gray-400 text-base mb-4 leading-relaxed line-clamp-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap mb-4">
                                    {project.techStack.map((tech) => (
                                        <TechTag key={tech} text={tech} />
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 mb-4">
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2 bg-[#F97316] text-[#030712] font-semibold rounded-lg hover:bg-[#F97316]/80 transition-colors duration-300 shadow-md shadow-[#F97316]/20"
                                    >
                                        <FiExternalLink /> Live Demo
                                    </Link>
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2 border border-[#3B82F6]/50 text-gray-400 font-semibold rounded-lg hover:bg-[#3B82F6]/10 transition-colors duration-300"
                                    >
                                        <FiCode /> Code
                                    </Link>
                                </div>
                                
                                {/* Metrics Display (Compact and Integrated) */}
                                <MetricDisplay metrics={project.metrics} />

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}