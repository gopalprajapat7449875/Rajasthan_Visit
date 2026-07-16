"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Users, Briefcase, ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/core/SectionHeader";
import { fleet } from "@/data/mockData";

export default function FleetPage() {
  const [filterType, setFilterType] = useState("all");

  const filteredFleet = fleet.filter((vehicle) => {
    if (filterType === "all") return true;
    if (filterType === "sedan") return vehicle.type.toLowerCase().includes("sedan");
    if (filterType === "suv") return vehicle.type.toLowerCase().includes("suv") || vehicle.type.toLowerCase().includes("muv");
    if (filterType === "coach") return vehicle.type.toLowerCase().includes("coach") || vehicle.type.toLowerCase().includes("minivan");
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 relative z-10">
      <SectionHeader
        tagline="Imperial Showroom"
        title="Our Complete Fleet Guide"
        description="Select the perfect chauffeur-driven vehicle for your tour. We offer economical standard sedans, luxury hybrid MUVs, and Maharaja executive coaches."
      />

      <div className="flex gap-2 mb-10 border-b border-white/10 pb-4">
        {[
          { id: "all", label: "All Vehicles" },
          { id: "sedan", label: "Sedans" },
          { id: "suv", label: "SUVs & MUVs" },
          { id: "coach", label: "Tempo Travellers" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilterType(tab.id)}
            className={`px-4 py-2 text-xs md:text-sm font-sans uppercase tracking-wider font-semibold rounded-sm transition-all duration-300 ${
              filterType === tab.id
                ? "bg-gold text-charcoal shadow-md"
                : "text-foreground/75 hover:bg-white/5 border border-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFleet.map((vehicle, index) => (
          <motion.div
            layout
            key={vehicle.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="luxury-card rounded-sm overflow-hidden flex flex-col h-full"
          >
            <div className="relative h-56 bg-gradient-to-b from-[#101F42] to-[#0A1128] flex items-center justify-center p-4">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-contain"
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

              <p className="font-sans text-xs text-sandstone/60 leading-relaxed mb-6 italic">
                &ldquo;{vehicle.popularFor}&rdquo;
              </p>

              <div className="flex flex-col gap-2 mb-6">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold font-sans">Included Cabin Comforts</span>
                {vehicle.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-sandstone/70">
                    <Check size={12} className="text-gold shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-sandstone/50 font-sans font-medium">Billed Rate</span>
                  <span className="font-serif text-base md:text-lg font-bold text-gold">
                    ₹{vehicle.pricePerKm} <span className="text-xs text-sandstone/70 font-sans font-medium">/ km</span>
                  </span>
                  <span className="text-[9px] text-sandstone/40">Local Rate: ₹{vehicle.dayRate}/day</span>
                </div>

                <Link
                  href={`/booking?vehicle=${vehicle.id}`}
                  className="flex items-center gap-1.5 px-4 py-2 border border-gold hover:bg-gold hover:text-charcoal text-gold font-sans text-xs uppercase tracking-wider font-bold rounded-sm transition-all duration-300"
                >
                  <span>Rent Cab</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
