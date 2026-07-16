"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({
  tagline,
  title,
  description,
  align = "center",
  light = false,
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col mb-12 md:mb-16 max-w-3xl ${
        isCenter ? "items-center text-center mx-auto" : "items-start text-left"
      }`}
    >
      {tagline && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.85, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 mb-2.5"
        >
          <span className="w-6 h-[1px] bg-gold" />
          <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.25em] text-gold font-bold">
            {tagline}
          </span>
          <span className="w-6 h-[1px] bg-gold" />
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide leading-tight ${
            light ? "text-charcoal" : "text-[#FAF6F0]"
          }`}
        >
          {title}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`font-sans text-xs sm:text-sm md:text-base mt-4 leading-relaxed font-light ${
            light ? "text-charcoal/80" : "text-sandstone/80"
          }`}
        >
          {description}
        </motion.p>
      )}
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-16 h-[2px] bg-gold mt-6 origin-center"
      />
    </div>
  );
}
