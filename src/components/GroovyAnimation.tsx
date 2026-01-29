"use client";

import Lottie from "lottie-react";
import animationData from "./Groovy Walk Cycle.json";

export default function GroovyAnimation() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Background Animation Container */}
            <div className="absolute inset-0 w-full h-full opacity-[0.25] flex items-center justify-center pointer-events-none">
                <div className="w-[140%] md:w-[110%] lg:w-[100%] h-full flex items-center justify-center">
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                    />
                </div>
            </div>

            {/* Subtle Gradient Masks to protect content readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 opacity-60" />
            <div className="absolute inset-0 bg-slate-950/20" />
        </div>
    );
}
