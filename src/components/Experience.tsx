"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const experiences = [
        {
            company: "SMEC Technologies",
            role: "Junior MERN Developer Intern",
            period: "2025 - Present",
            description: [
                "Developing scalable microservices architecture using Node.js and Express.",
                "Designing and implementing RESTful APIs for complex web applications.",
                "Optimizing database performance with MongoDB aggregation pipelines.",
                "Collaborating with cross-functional teams to deliver high-quality software.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-32 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Experience</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full glow-cyan" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:left-1/2"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="mb-16 relative"
                        >
                            
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-slate-950 border-2 border-cyan-500 rounded-full glow-cyan" />

                            <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto md:text-left"}`}>
                                <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 group">
                                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                        <div className="p-2 bg-cyan-500/10 rounded-xl text-cyan-400">
                                            <Briefcase size={20} />
                                        </div>
                                        <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest">{exp.period}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">{exp.role}</h3>
                                    <p className="text-slate-400 font-semibold mb-6">{exp.company}</p>
                                    <ul className={`text-slate-400 text-sm space-y-3 list-none p-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                        {exp.description.map((item, i) => (
                                            <li key={i} className={`flex items-start gap-3 ${index % 2 === 0 ? "md:flex-row-reverse" : "flex-row text-left"}`}>
                                                <span className="text-cyan-500 mt-1 font-bold">›</span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
