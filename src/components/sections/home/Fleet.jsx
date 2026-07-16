"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Briefcase, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/core/SectionHeader";
import { fleet } from "@/data/mockData";

export default function Fleet() {
  const homeFleet = fleet.slice(0, 6);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#0A1128] border-t border-gold/10">
      <div className="absolute inset-0 rajasthan-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          tagline="The Royal Garage"
          title="Our Premium Fleet"
          description="Travel across Rajasthan in ultimate style and comfort. Our meticulously maintained vehicles are sanitized, fully insured, and chauffeured by vetted professionals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeFleet.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="luxury-card rounded-sm overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-56 bg-gradient-to-b from-[#101F42] to-[#0A1128] flex items-center justify-center overflow-hidden p-4 group">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-[#0A1128]/80 border border-gold/25 backdrop-blur-md text-[10px] uppercase tracking-wider text-gold font-bold font-sans">
                  {vehicle.type}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-semibold text-[#FAF6F0] mb-2 tracking-wide">
                  {vehicle.name}
                </h3>
                
                <div className="flex items-center gap-4 text-xs text-sandstone/70 font-sans mb-4 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-gold" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={14} className="text-gold" />
                    <span>{vehicle.luggage}</span>
                  </div>
                </div>

                <p className="font-sans text-xs text-sandstone/60 leading-relaxed mb-6 flex-grow italic">
                  &ldquo;{vehicle.popularFor}&rdquo;
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-sandstone/50 font-sans">Rates starting at</span>
                    <span className="font-serif text-lg font-bold text-gold">
                      ₹{vehicle.pricePerKm} <span className="text-xs text-sandstone/70 font-sans font-medium">/ km</span>
                    </span>
                  </div>

                  <Link
                    href={`/booking?vehicle=${vehicle.id}`}
                    className="flex items-center gap-1 px-4 py-2 border border-gold hover:bg-gold hover:text-charcoal transition-all duration-300 font-sans text-xs uppercase tracking-wider font-bold rounded-sm text-gold"
                  >
                    <span>Rent Cab</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/fleet"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-gold/40 hover:border-gold text-gold font-sans text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 group"
          >
            <span>View Full Royal Garage</span>
            <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
