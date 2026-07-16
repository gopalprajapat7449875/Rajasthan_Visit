"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Star, ChevronRight, Check } from "lucide-react";
import SectionHeader from "@/components/core/SectionHeader";
import { packages } from "@/data/mockData";

export default function Packages() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#0A1128] border-t border-gold/10">
      <div className="absolute inset-0 rajasthan-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          tagline="Handcrafted Journeys"
          title="Exclusive Rajasthan Packages"
          description="Immerse yourself in authentic royal living with our meticulously curated tour packages. All tours include premium cars, expert drivers, and selected hotel reservations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="luxury-card rounded-sm overflow-hidden flex flex-col sm:flex-row h-full group"
            >
              <div className="relative w-full sm:w-[42%] h-64 sm:h-auto min-h-[220px] overflow-hidden shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#0A1128] via-transparent to-transparent opacity-80 sm:opacity-90 z-5" />
                
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-2 py-0.5 bg-[#0A1128]/80 border border-gold/25 backdrop-blur-md rounded-sm text-gold text-xs font-sans">
                  <Star size={11} className="fill-current text-gold" />
                  <span className="font-bold">{pkg.rating}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-4 text-xs font-sans text-gold font-semibold uppercase tracking-wider mb-2">
                    <div className="flex items-center gap-1">
                      <Clock size={13} />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl font-semibold text-[#FAF6F0] mb-3 tracking-wide leading-snug">
                    {pkg.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-sandstone/70 font-sans mb-4">
                    <MapPin size={13} className="text-gold shrink-0" />
                    <span>{pkg.destinations.join(" → ")}</span>
                  </div>

                  <div className="flex flex-col gap-1.5 mb-6">
                    {pkg.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-sandstone/60">
                        <Check size={12} className="text-gold shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-sandstone/50 font-sans">Starting at</span>
                    <span className="font-serif text-base md:text-lg font-bold text-gold">
                      ₹{pkg.price.toLocaleString("en-IN")} <span className="text-xs text-sandstone/70 font-sans font-medium">/ person</span>
                    </span>
                  </div>

                  <Link
                    href={`/booking?package=${pkg.id}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-gold hover:bg-gold hover:text-charcoal text-gold font-sans text-[10px] md:text-xs uppercase tracking-wider font-bold rounded-sm transition-all duration-300"
                  >
                    <span>Inquire</span>
                    <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-gold/40 hover:border-gold text-gold font-sans text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 group"
          >
            <span>Explore All Royal Packages</span>
            <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
