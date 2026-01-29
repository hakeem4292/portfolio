"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Loopstore",
            description: "A premium E-commerce ecosystem focusing on real-time user engagement and high-performance architecture.",
            features: [
                "Real-time notifications via WebSockets",
                "Secure Google OAuth authentication",
                "Seamless Razorpay payment gateway",
                "Scalable AWS EC2 deployment"
            ],
            tech: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
            github: "https://github.com/smec-community-dev/loop-store-hakeem-sanjay",
            demo: "http://loopstore.hakeem.mysmeclabs.com/",
        },
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section id="projects" className="py-32">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Featured Projects</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full glow-cyan" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group bg-slate-900/30 border border-slate-800/50 rounded-3xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500 flex flex-col"
                        >
                            <div className="p-10 flex-1">
                                <div className="flex justify-between items-start mb-8">
                                    <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15 }}
                                        className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all duration-500"
                                    >
                                        <ExternalLink size={24} />
                                    </motion.a>

                                    <motion.a
                                        href={project.github}
                                        whileHover={{ scale: 1.2, rotate: 12 }}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        <Github size={24} />
                                    </motion.a>
                                </div>

                                <h3 className="text-3xl font-bold mb-4 text-slate-100 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                                    {project.description}
                                </p>

                                <div className="space-y-4 mb-10">
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Technical Highlights</h4>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {project.features.map(feature => (
                                            <li key={feature} className="text-sm text-slate-400 flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full glow-cyan" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-4 py-1.5 bg-slate-950/50 text-slate-400 text-xs font-mono rounded-full border border-slate-800 group-hover:border-cyan-500/30 transition-colors"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
