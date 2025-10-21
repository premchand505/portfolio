'use client';

import { motion, Transition } from 'framer-motion';
import { FiTarget, FiBookOpen } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTypescript,  SiTailwindcss,SiNestjs, SiFastapi, SiExpress, SiMongodb,SiGooglecloud, SiPrisma, SiPostgresql,SiAmazon} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

// Framer Motion Transition Configuration
const transitionConfig: Transition = {
    type: "spring", 
    stiffness: 80, 
    damping: 15,
};
// Unified Icon Styling Component (Used within the Timeline blocks)
const TechIcon: React.FC<{ icon: React.ReactNode, name: string }> = ({ icon, name }) => (
    <div className="flex items-center text-left space-x-2 p-1 border border-[#3B82F6]/20 rounded-md bg-[#0F172A] hover:bg-[#3B82F6]/10 transition-colors">
        <div className="text-xl text-[#F97316]">{icon}</div>
        <span className="text-xs font-semibold text-gray-400 whitespace-nowrap">
            {name}
        </span>
    </div>
);
export default function AboutSection() {
    // Grouped technologies for thematic display
    const architecturalPillars = [
        {
            title: 'I. Backend & API Design',
            icon: FiTarget,
            description: 'Designing resilient, decoupled microservices for high throughput, focusing on robust API contract design.',
            tech: [
                { name: 'NestJS', icon: <SiNestjs /> },
                { name: 'NodeJS', icon: <FaNodeJs /> },
  
                { name: 'ExpressJs', icon: <SiExpress /> },
                { name: 'RESTful APIs', icon: <TbApi /> },
                { name: 'PostgreSQL', icon: <SiPostgresql /> },
                 { name: 'MongoDb', icon: <SiMongodb /> },
            
                { name: 'Prisma/SQLAlchemy', icon: <SiPrisma /> },
                { name: 'Python', icon: <FaPython /> },
                 { name: 'FastAPI', icon: <SiFastapi /> },
            ],
        },
        {
            title: 'II. Cloud & Deployment',
            icon: FaDocker,
            description: 'Expertise in containerization, serverless deployment, and automating workflows for reliable, cost-effective infrastructure.',
            tech: [
                { name: 'Docker', icon: <FaDocker /> },
                { name: 'GCP Cloud Run', icon: <SiGooglecloud /> },
  
                { name: 'AWS', icon: <SiAmazon /> },
                { name: 'CI/CD & Git', icon: <FaGitAlt /> },
                { name: 'GitHub/GitHub Actions', icon: <FaGithub /> },

            ],
        },
        {
     
            title: 'III. Frontend Engineering',
            icon: FaReact,
            description: 'Building performance-optimized, modern user interfaces that convert leads and provide world-class user experiences.',
            tech: [
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'React.js', icon: <FaReact /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
            ],
        },
    ];
return (
        <section id="aboutme" className="min-h-screen bg-[#030712] p-6 md:p-16 scroll-snap-align-start">
            <div className="max-w-7xl mx-auto py-10">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={transitionConfig}
                    className="relative inline-block text-4xl text-[#F8FAFC] font-extrabold pb-4 mb-16 mx-auto text-center w-full"
                >
                    Skills & Experience
                    <span className="block h-1 bg-[#F97316]/90 mt-2 mx-auto "></span>
                </motion.h1>

                {/* Main Two-Column Layout with Vertical Separator */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    
                    {/* Left Column: Mandate, Experience & Education */}
                    <div className="lg:w-2/5 w-full space-y-10">
                  
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ ...transitionConfig, delay: 0.2 }}
                        >
                            {/* V2 Text Content */}
                            <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">My Focus</h2>
                            <p className="text-xl text-gray-400 font-light border-l-4 border-[#3B82F6] pl-4">
                                I am a computer science student passionate about building complete, end-to-end applications. My experience is focused on using modern tools to solve practical problems.
                            </p>
                        </motion.div>
                        
                        {/* Experience Card 1: Intern */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ ...transitionConfig, delay: 0.4 }}
                            className="p-6 bg-[#0F172A] rounded-xl border border-[#F97316]/50 shadow-xl hover:shadow-[#F97316]/20 transition-shadow duration-300"
                        >
                            <h1 className="text-xl font-bold text-[#F97316] flex justify-between items-center mb-1">
                                Python Developer Intern
                            </h1>
                            <p className="text-sm text-[#3B82F6] mb-4">HMI Engineering Services | 11/2024 - 04/2025</p>
                            <ul className="list-disc list-inside text-base text-gray-400 font-light space-y-1">
                                <li>Developed HMI dashboards using FastAPI, React, and PostgreSQL.</li>
                                <li>Engineered and integrated REST APIs for real-time data management.</li>
                            </ul>
                        </motion.div>

                        {/* Experience Card 2: Freelance (NEW) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ ...transitionConfig, delay: 0.5 }}
                            className="p-6 bg-[#0F172A] rounded-xl border border-[#F97316]/50 shadow-xl hover:shadow-[#F97316]/20 transition-shadow duration-300"
                        >
                            <h1 className="text-xl font-bold text-[#F97316] flex justify-between items-center mb-1">
                                Frontend Developer (Freelance)
                            </h1>
                            <p className="text-sm text-[#3B82F6] mb-4">Fitness Edge Gym | Vizag</p>
                            <ul className="list-disc list-inside text-base text-gray-400 font-light space-y-1">
                                <li>Built responsive landing page with Next.js & Tailwind.</li>
                                <li>Increased lead conversions by 25-30% via optimized UX.</li>
                            </ul>
                        </motion.div>

                        {/* Education Card (NEW) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ ...transitionConfig, delay: 0.6 }}
                            className="p-6 bg-[#0F172A] rounded-xl border border-[#3B82F6]/50 shadow-xl hover:shadow-[#3B82F6]/20 transition-shadow duration-300"
                        >
                            <h1 className="text-xl font-bold text-[#3B82F6] flex justify-between items-center mb-1">
                                Education <FiBookOpen />
                            </h1>
                            <p className="text-lg font-semibold text-gray-300 mb-2">B.Tech, Computer Science</p>
                            <p className="text-sm text-gray-400">Gayatri Vidyaparishad College of Engineering (A)</p>
                            <p className="text-sm text-gray-400">2021 - 2025 | CGPA: 7.88</p>
                        </motion.div>
                    </div>

                    {/* Right Column: Architectural Pillars (V1 Original) */}
                    <div className="lg:w-3/5 w-full relative pt-12">
                        <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#3B82F6]/20 hidden lg:block rounded-full"></div>
                        
                        {architecturalPillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ ...transitionConfig, delay: 0.6 + index * 0.2 }}
                                className="relative flex mb-12"
                            >
                                {/* Timeline Dot/Node */}
                                <div className="z-10 flex-shrink-0 w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center 
                                            text-white shadow-xl shadow-[#F97316]/30 mr-6">
                                    <pillar.icon className="w-6 h-6" />
                                </div>
                          
                                {/* Content Card */}
                                <div className="flex-grow p-6 bg-[#0F172A] rounded-xl border border-[#3B82F6]/30 hover:border-[#F97316] transition-colors duration-300 shadow-lg">
                                    <h3 className="text-xl font-extrabold text-[#F8FAFC] mb-2">{pillar.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{pillar.description}</p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {pillar.tech.map((tech, i) => (
                                            <TechIcon key={i} icon={tech.icon} name={tech.name} />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}