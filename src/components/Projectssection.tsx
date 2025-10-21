'use client';

import { motion, Transition } from 'framer-motion';
import { FiCode, FiExternalLink, FiZap, FiTarget, FiDatabase, FiActivity, FiTrendingUp } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

// Framer Motion Transition Configuration
const transitionConfig: Transition = {
    type: "tween", 
    duration: 0.6, 
    ease: "easeOut"
};

// Helper component for the Tech Tags (V1 Style)
const TechTag: React.FC<{ text: string }> = ({ text }) => (
    <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-medium rounded-full mr-2 mb-2 whitespace-nowFrap">
        {text}
    </span>
);

// Helper component for compact Metrics Display (V1)
interface Metric {
    icon: React.ElementType;
    value: string;
    label: string;
    color: string;
}

const MetricDisplay: React.FC<{ metrics: Metric[] }> = ({ metrics }) => (
    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm border-t border-[#3B82F6]/20 pt-6">
        {metrics.map((metric, index) => (
            <div key={index} className="flex items-center space-x-1">
                <metric.icon className={`w-4 h-4 ${metric.color}`} />
                <span className="text-gray-300 font-medium">{metric.value}</span>
                <span className="text-gray-500 font-light">({metric.label})</span>
            </div>
        ))}
    </div>
);

// Define Project Data (V2 Text + V1 Metrics)
const projectData = [
    {
        title: 'EventSphere',
        tag: 'Full-Stack Event Platform',
        description:
            'A production-ready event management platform built with a modern stack. The backend, architected with NestJS and PostgreSQL, was optimized to achieve <strong class="text-[#F8FAFC] font-semibold"><200ms API response times</strong>. The system supports real-time chat via Socket.IO and handles secure payments with Stripe.',
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
        title: 'Haptic Video Generator',
        tag: 'AI/ML Microservices',
        description:
            'A cloud-native platform that processes large video files to generate AI-powered haptic feedback. Using a microservice architecture with FastAPI for the ML pipeline, the system achieved an impressive <strong class="text-[#F8FAFC] font-semibold">85% accuracy</strong> in haptic pattern generation from audio.',
        image: '/haptic-coverpage.png',
        live: 'https://haptic-studio.vercel.app/',
        github: 'https://github.com/premchand505/haptic-studio',
        techStack: ['Next.js', 'NestJS', 'FastAPI', 'GCP', 'Docker'],
        metrics: [
            { icon: FiTarget, value: '85% Accuracy', label: 'ML', color: 'text-green-500' },
            { icon: FiActivity, value: '99.9% Uptime', label: 'Resilience', color: 'text-blue-500' },
        ]
    },
    {
        title: 'Job Hunt Navigator',
        tag: 'Chrome Extension',
        description:
            'A browser tool to automate job application tracking. The core feature is a DOM scraping engine built with the Chrome.debugger API, which reached <strong class="text-[#F8FAFC] font-semibold">95% accuracy</strong> on Indeed job listings. User data is synced in real-time across devices using Firebase Firestore.',
        image: '/eventsphere-coverpage.png', // NOTE: Update this image path
        live: '#',
        github: 'github.com/premchand505/job-hunt-navigator',
        techStack: ['React', 'TypeScript', 'Chrome API', 'Firebase'],
        metrics: [
            { icon: FiTarget, value: '95% Accuracy', label: 'Scraping', color: 'text-green-500' },
            { icon: FiDatabase, value: 'Optimistic UI', label: 'Sync', color: 'text-indigo-400' },
        ]
    },
     {
        title: 'Fitness Edge Landing Page',
        tag: 'Freelance Client Project',
        description:
            'Designed and deployed a responsive, high-conversion landing page for a local gym. Focused the UX and CTA funnel to help drive a <strong class="text-[#F8FAFC] font-semibold">25-30% increase</strong> in lead conversions compared to the original homepage.',
        image: '/gym-coverpage.png',
        live: 'https://fitnessedge-two.vercel.app/',
        github: 'github.com/premchand505/job-hunt-navigator', // NOTE: Update this GitHub link
        techStack: ['Next.js', 'Tailwind CSS', 'React', 'JavaScript'],
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
                
                {/* Heading (V1 Style) */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={transitionConfig}
                    className="relative inline-block text-4xl text-[#F8FAFC] font-extrabold pb-4 mb-12 mx-auto text-center w-full"
                >
                    Featured Projects
                    <span className="block h-1 bg-[#F97316]/90 mt-2 mx-auto rounded-full"></span>
                </motion.h1>

                {/* Projects List (V2 Layout) */}
                <div className="w-full space-y-20">
                    {projectData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
                        >
                            
                            {/* Image Container (V1 Colors) */}
                            <div className={`relative h-80 rounded-xl overflow-hidden border border-[#3B82F6]/30 shadow-2xl 
                                         hover:border-[#F97316]/50 transition-all duration-300
                                         ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                
                                {/* --- IMAGE COMPONENT UPDATED --- */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill={true} // Replaces layout="fill"
                                    style={{ objectFit: 'cover' }} // Replaces objectFit="cover"
                                    className="transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* --- END UPDATE --- */}

                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                            </div>

                            {/* Text/Details Container (V1 Colors) */}
                            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <p className="text-[#F97316] font-mono text-sm uppercase tracking-widest mb-2">
                                    {project.tag}
                                </p>
                                <h2 className="text-3xl font-extrabold mb-4 text-[#F8FAFC]">{project.title}</h2>
                                <p className="text-gray-400 text-base mb-6 leading-relaxed"
                                   dangerouslySetInnerHTML={{ __html: project.description }} />

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech) => (
                                        <TechTag key={tech} text={tech} />
                                    ))}
                                </div>
                                
                                {/* Action Buttons (V1 Style) */}
                                <div className="flex gap-4">
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

                                {/* Metrics Display (V1 Component) */}
                                <MetricDisplay metrics={project.metrics} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}