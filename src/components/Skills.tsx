"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
    Atom,
    Server,
    Database,
    Code2,
    Globe,
    Terminal,
    Layout,
    Layers,
    Zap,
    Cloud,
    FileCode,
    Cpu
} from "lucide-react";

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const skills = [
        { name: "React.js", icon: Atom },
        { name: "Node.js", icon: Server },
        { name: "MongoDB", icon: Database },
        { name: "TypeScript", icon: Code2 },
        { name: "Next.js", icon: Globe },
        { name: "Express.js", icon: Terminal },
        { name: "Tailwind CSS", icon: Layout },
        { name: "Docker", icon: Layers },
        { name: "Socket.io", icon: Zap },
        { name: "AWS EC2", icon: Cloud },
        { name: "S3", icon: Database },
        { name: "JavaScript", icon: FileCode }
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const sectionVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const badgeVariants: any = {
        hidden: { opacity: 0, scale: 0.8, y: 10 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
        <section id="skills" className="py-32" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Technical Skills</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full glow-cyan" />
                    <p className="mt-8 text-slate-400 text-lg max-w-2xl mx-auto">
                        A curated set of technologies I use to build high-performance web applications.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={badgeVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="p-8 rounded-[2rem] bg-slate-900/30 border border-slate-800/50 hover:border-cyan-500/40 transition-all duration-300 group cursor-default flex flex-col items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-slate-500 group-hover:text-cyan-400 border border-slate-800 group-hover:border-cyan-500/20 transition-all duration-500 overflow-hidden">
                                <skill.icon size={24} strokeWidth={1.5} />
                            </div>
                            <span className="text-slate-400 group-hover:text-cyan-400 transition-colors font-bold tracking-wider text-sm uppercase">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                    
                </motion.div>
            </div>
        </section>
    );
}
