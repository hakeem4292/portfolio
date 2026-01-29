"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
    const contactLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com/hakeem4292", sub: "View my code contributions" },
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammed-hakeem-k-a4a5a132b", sub: "Connect professionally" },
        { icon: Mail, label: "Email", href: "mailto:hakeemark4292@gmail.com", sub: "Send a direct message" },
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

    const itemVariants: any = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="contact" className="py-32">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Get In Touch</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full glow-cyan" />
                    <p className="mt-8 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        I&apos;m currently looking for new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-6 md:p-10 rounded-[2rem] bg-slate-900/30 border border-slate-800/50 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[60px] group-hover:bg-cyan-500/10 transition-colors duration-500" />

                        <form className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Muhammed Hakeem"
                                        className="w-full px-6 py-4 bg-slate-950 border border-slate-800 rounded-2xl focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-700 text-slate-200"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="hakeem@example.com"
                                        className="w-full px-6 py-4 bg-slate-950 border border-slate-800 rounded-2xl focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-700 text-slate-200"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="I'd love to chat about..."
                                    className="w-full px-6 py-4 bg-slate-950 border border-slate-800 rounded-2xl focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-700 text-slate-200 resize-none"
                                />
                            </div>
                            <button className="w-full py-5 bg-cyan-500 text-slate-950 font-bold rounded-2xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 glow-cyan-hover">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Links */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col justify-center gap-8"
                    >
                        {contactLinks.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                variants={itemVariants}
                                className="flex items-center gap-8 p-8 rounded-[2rem] bg-slate-900/30 border border-slate-800/50 hover:border-cyan-500/40 hover:bg-slate-900/50 transition-all duration-500 group"
                            >
                                <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-cyan-400 border border-slate-800 group-hover:border-cyan-500/20 transition-all duration-500">
                                    <link.icon size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">{link.label}</h4>
                                    <p className="text-slate-500 text-sm">{link.sub}</p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
