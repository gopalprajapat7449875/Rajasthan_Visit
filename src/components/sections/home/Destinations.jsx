"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/core/SectionHeader";
import { destinations } from "@/data/mockData";

export default function Destinations() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#0A1128]">
      <div className="absolute inset-0 rajasthan-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          tagline="Imperial Cities"
          title="Popular Rajasthan Destinations"
          description="Explore the rich royal heritage, magnificent fortresses, peaceful desert dunes, and tranquil lakes in our hand-picked historic cities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative h-[420px] rounded-sm overflow-hidden border border-gold/15 shadow-xl flex flex-col justify-end p-6 cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/45 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 bg-[#0A1128]/80 border border-gold/25 backdrop-blur-md rounded-sm text-gold text-xs font-sans font-bold">
                <Star size={12} className="fill-current text-gold" />
                <span>{dest.rating}</span>
              </div>

              <div className="relative z-10 flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold mb-1 font-sans">
                  {dest.tagline}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#FAF6F0] mb-2 tracking-wide">
                  {dest.name}
                </h3>
                <p className="font-sans text-xs text-sandstone/70 mb-4 leading-relaxed line-clamp-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  {dest.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                  <span className="text-[10px] uppercase tracking-wider text-sandstone/60 font-sans font-medium">
                    Rec. {dest.durationRecommended}
                  </span>
                  
                  <Link
                    href={`/destinations#${dest.id}`}
                    className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-bold hover:text-gold-hover transition-colors font-sans group/btn"
                  >
                    <span>Explore City</span>
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              <div className="absolute inset-3 border border-gold/0 group-hover:border-gold/30 rounded-sm pointer-events-none transition-all duration-500 scale-95 group-hover:scale-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
