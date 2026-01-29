"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };


    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
            </div>

            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    Available for new opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    className="text-5xl md:text-8xl font-bold tracking-tight mb-6 px-4 md:px-0"
                    variants={itemVariants}
                >
                    <span className="bg-gradient-to-r from-slate-100 via-cyan-400 to-slate-100 bg-clip-text text-transparent leading-tight block">
                        Muhammed Hakeem
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    variants={itemVariants}
                >
                    Full-Stack MERN Developer specializing in{" "}
                    <span className="text-slate-100 font-medium">scalable microservices</span> and{" "}
                    <span className="text-slate-100 font-medium">cloud deployment</span>
                </motion.p>


                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    variants={itemVariants}
                >
                    {/* Primary CTA */}
                    <motion.a
                        href="#projects"
                        className="group px-8 py-4 bg-cyan-500 text-slate-950 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-400 transition-all duration-300 glow-cyan-hover"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Projects
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </motion.a>

                    {/* Secondary CTA */}
                    <motion.a
                        href="#contact"
                        className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-500/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Mail size={20} />
                        Contact Me
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center pt-2">
                        <motion.div
                            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
