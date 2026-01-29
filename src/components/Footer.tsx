"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-slate-900 bg-slate-950/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-slate-500 text-sm font-medium"
                >
                    © {new Date().getFullYear()} Muhammed Hakeem. All rights reserved.
                </motion.div>

                <div className="flex items-center gap-8">
                    {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-xs font-bold text-slate-600 hover:text-cyan-400 transition-colors uppercase tracking-widest"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
