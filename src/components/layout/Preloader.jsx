"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050B18] text-[#FAF6F0]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 rajasthan-pattern opacity-10" />

          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mb-8 flex items-center justify-center text-gold"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.5">
                <circle cx="50" cy="50" r="45" strokeDasharray="5, 5" />
                <circle cx="50" cy="50" r="38" />
                <path d="M 50 12 L 53 25 L 66 22 L 59 33 L 72 37 L 61 45 L 73 53 L 59 57 L 66 68 L 53 65 L 50 78 L 47 65 L 34 68 L 41 57 L 27 53 L 39 45 L 27 37 L 41 33 L 34 22 L 47 25 Z" />
                <circle cx="50" cy="50" r="10" strokeWidth="1" />
                <circle cx="50" cy="50" r="3" fill="#D4AF37" />
              </svg>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl text-gold tracking-widest uppercase font-semibold mb-2"
            >
              KHAMMAGHANI
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-sandstone font-sans mb-8"
            >
              Royal Rajasthan Travels
            </motion.p>

            <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-hover"
                style={{ width: `${progress}%` }}
              />
            </div>

            <motion.span 
              className="text-sm font-sans tracking-widest text-gold/80"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
