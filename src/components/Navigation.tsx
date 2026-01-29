"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass py-3" : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    <motion.a
                        href="#"
                        className="text-xl font-bold tracking-tighter flex items-center gap-2 group"
                    >
                        <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 group-hover:rotate-12 transition-transform duration-300">
                            H
                        </div>
                        <span className="bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">Hakeem</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
                                whileHover={{ y: -2 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-300 hover:text-cyan-400"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <motion.div
                    initial={false}
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl md:hidden ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                >
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                variants={{
                                    open: { opacity: 1, y: 0, transition: { delay: i * 0.1 + 0.2 } },
                                    closed: { opacity: 0, y: 20 }
                                }}
                                className="text-3xl font-bold text-slate-100 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
