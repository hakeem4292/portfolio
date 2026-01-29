"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GroovyAnimation from "@/components/GroovyAnimation";

export default function Home() {
  return (
    <main className="bg-slate-950 relative">
      <GroovyAnimation />
      <Navigation />
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}


