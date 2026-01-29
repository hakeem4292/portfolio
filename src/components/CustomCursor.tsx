"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const trailX = useSpring(cursorX, springConfig);
    const trailY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("button") ||
                target.closest("a") ||
                target.getAttribute("role") === "button"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Glowing Trail/Flow */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-cyan-500/30"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 2 : 1,
                    background: isHovering
                        ? "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)"
                        : "transparent",
                    borderColor: isHovering ? "rgba(6, 182, 212, 0.5)" : "rgba(6, 182, 212, 0.2)",
                }}
                transition={{
                    scale: { type: "spring", damping: 15, stiffness: 150 },
                }}
            >
                {/* Internal Flow Gradient */}
                <div className="absolute inset-[-2px] rounded-full opacity-50 blur-[2px] border-2 border-transparent bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-cyan-500/20 animate-spin-slow" />
            </motion.div>
        </div>
    );
}
