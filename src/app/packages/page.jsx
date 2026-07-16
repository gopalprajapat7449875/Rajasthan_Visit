"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Star, ChevronRight, Check } from "lucide-react";
import SectionHeader from "@/components/core/SectionHeader";
import { packages } from "@/data/mockData";

export default function PackagesPage() {
  const [filterTheme, setFilterTheme] = useState("all");
  const [filterDuration, setFilterDuration] = useState("all");

  const handleFilterReset = () => {
    setFilterTheme("all");
    setFilterDuration("all");
  };

  const filteredPackages = packages.filter((pkg) => {
    let matchTheme = true;
    if (filterTheme !== "all") {
      if (filterTheme === "desert" && !pkg.id.includes("desert")) matchTheme = false;
      if (filterTheme === "heritage" && !pkg.id.includes("heritage")) matchTheme = false;
      if (filterTheme === "palace" && !pkg.id.includes("palace")) matchTheme = false;
      if (filterTheme === "honeymoon" && !pkg.id.includes("honeymoon")) matchTheme = false;
      if (filterTheme === "family" && !pkg.id.includes("family")) matchTheme = false;
    }

    let matchDuration = true;
    if (filterDuration !== "all") {
      const days = parseInt(pkg.duration.split(" ")[0], 10);
      if (filterDuration === "short" && days > 3) matchDuration = false;
      if (filterDuration === "medium" && (days < 4 || days > 6)) matchDuration = false;
      if (filterDuration === "long" && days < 7) matchDuration = false;
    }

    return matchTheme && matchDuration;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 relative z-10">
      <SectionHeader
        tagline="Royal Itineraries"
        title="Custom Tour Packages"
        description="Select a handcrafted itinerary to tour the historic forts, serene lakes, and rolling desert dunes. Customize any package to suit your needs."
      />

      <div className="glass-panel border border-gold/15 p-6 rounded-sm mb-10 flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex flex-col gap-1 w-full sm:w-48">
            <span className="text-[10px] font-sans uppercase tracking-widest text-gold font-bold">Tour Category</span>
            <select
              value={filterTheme}
              onChange={(e) => setFilterTheme(e.target.value)}
              className="w-full bg-[#0F1A30] border border-white/10 focus:border-gold rounded-sm px-3 py-2 text-xs outline-none text-foreground [color-scheme:dark]"
            >
              <option value="all">All Packages</option>
              <option value="desert">Desert Safari</option>
              <option value="heritage">Heritage Tours</option>
              <option value="palace">Palace & Hillstation</option>
              <option value="honeymoon">Honeymoon Specials</option>
              <option value="family">Family Explorer</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 w-full sm:w-48">
            <span className="text-[10px] font-sans uppercase tracking-widest text-gold font-bold">Duration</span>
            <select
              value={filterDuration}
              onChange={(e) => setFilterDuration(e.target.value)}
              className="w-full bg-[#0F1A30] border border-white/10 focus:border-gold rounded-sm px-3 py-2 text-xs outline-none text-foreground [color-scheme:dark]"
            >
              <option value="all">All Durations</option>
              <option value="short">Short (2-3 Days)</option>
              <option value="medium">Medium (4-6 Days)</option>
              <option value="long">Long (7+ Days)</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleFilterReset}
          className="text-xs uppercase tracking-wider text-sandstone/60 hover:text-gold transition-colors font-sans border-b border-transparent hover:border-gold pb-0.5 cursor-pointer"
        >
          Reset All Filters
        </button>
      </div>

      <AnimatePresence mode="popLayout">
        {filteredPackages.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPackages.map((pkg) => (
              <motion.div
                layout
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="luxury-card rounded-sm overflow-hidden flex flex-col h-full group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 bg-[#0A1128]/80 border border-gold/25 backdrop-blur-md rounded-sm text-gold text-xs font-sans">
                    <Star size={11} className="fill-current text-gold" />
                    <span className="font-bold">{pkg.rating}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1 px-2.5 py-1 bg-gold text-charcoal text-[10px] uppercase font-sans font-bold rounded-sm">
                    <Clock size={11} />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-[#FAF6F0] mb-2 tracking-wide leading-snug">
                    {pkg.name}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-sandstone/70 font-sans mb-4">
                    <MapPin size={13} className="text-gold shrink-0" />
                    <span className="line-clamp-1">{pkg.destinations.join(" → ")}</span>
                  </div>

                  <p className="font-sans text-xs text-sandstone/60 leading-relaxed mb-6 flex-grow">
                    {pkg.description}
                  </p>

                  <div className="flex flex-col gap-1.5 mb-6 border-t border-white/5 pt-4">
                    {pkg.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-sandstone/60">
                        <Check size={12} className="text-gold shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-sandstone/50 font-sans">Starting cost</span>
                      <span className="font-serif text-lg font-bold text-gold">
                        ₹{pkg.price.toLocaleString("en-IN")} <span className="text-xs text-sandstone/70 font-sans font-medium">/ pax</span>
                      </span>
                    </div>

                    <Link
                      href={`/booking?package=${pkg.id}`}
                      className="flex items-center gap-1 px-4 py-2 border border-gold hover:bg-gold hover:text-charcoal transition-all duration-300 font-sans text-xs uppercase tracking-wider font-bold rounded-sm text-gold"
                    >
                      <span>Inquire</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center text-sandstone/60 font-sans text-sm border border-dashed border-white/10 rounded-sm"
          >
            No tour packages match the selected filters. Try broadening your selection parameters.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
