"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/core/SectionHeader";
import { destinations } from "@/data/mockData";

export default function DestinationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 relative z-10">
      <SectionHeader
        tagline="Travel Encyclopedias"
        title="Explore Rajasthan Cities"
        description="Comprehensive travel guidebooks for our six top-rated heritage cities, covering recommended durations, best seasons, and top sightseeing spots."
      />

      <div className="flex flex-col gap-16 md:gap-24">
        {destinations.map((dest, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              id={dest.id}
              key={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row items-center gap-10 md:gap-14 border-b border-white/5 pb-12 last:border-0 last:pb-0 scroll-mt-28 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className="w-full lg:w-[45%] shrink-0">
                <div className="relative h-[320px] sm:h-[400px] rounded-sm overflow-hidden border border-gold/15 shadow-2xl group">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-[#0A1128]/80 border border-gold/25 backdrop-blur-md rounded-sm text-gold text-xs font-sans font-bold">
                    <Star size={12} className="fill-current text-gold" />
                    <span>{dest.rating}</span>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-start gap-4 text-left">
                <span className="text-xs uppercase tracking-widest text-gold font-bold font-sans">
                  {dest.tagline}
                </span>
                
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#FAF6F0] tracking-wide">
                  {dest.name}
                </h3>

                <p className="font-sans text-sm text-sandstone/70 leading-relaxed font-light">
                  {dest.description}
                </p>

                <div className="grid grid-cols-2 gap-4 w-full bg-white/[0.01] border border-white/5 p-4 my-2 rounded-sm font-sans text-xs text-sandstone/70">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-gold shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-sandstone/40 uppercase">Best Time</span>
                      <span className="font-semibold text-[#FAF6F0]">{dest.bestTimeToVisit}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gold shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-sandstone/40 uppercase">Recommended Stay</span>
                      <span className="font-semibold text-[#FAF6F0]">{dest.durationRecommended}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold font-sans">Must-Visit Landmarks</span>
                  <div className="flex flex-wrap gap-2">
                    {dest.popularSpots.map((spot, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm text-xs font-sans text-sandstone/85"
                      >
                        {spot}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/booking?destination=${dest.name}&tripType=roundtrip`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-hover text-charcoal font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 active:scale-98"
                >
                  <span>Book Taxi to {dest.name}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
