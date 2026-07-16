"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plane, Compass, RefreshCw, Map, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/core/SectionHeader";

const services = [
  {
    id: "airport",
    title: "Airport Transfer",
    description: "Punctual, stress-free pickup and drop services to and from major airports in Udaipur, Jaipur, Jodhpur, and Delhi.",
    icon: Plane,
  },
  {
    id: "oneway",
    title: "One Way Outstation",
    description: "Affordable one-way intercity cabs. Travel between cities in Rajasthan with transparent per-kilometer billing.",
    icon: Compass,
  },
  {
    id: "roundtrip",
    title: "Round Trip Journeys",
    description: "Perfect for weekend getaways. Our professional driver remains with you throughout the multi-day tour.",
    icon: RefreshCw,
  },
  {
    id: "sightseeing",
    title: "Local Sightseeing",
    description: "Explore any historic city in detail with customizable half-day (4h/40km) or full-day (8h/80km) tour packages.",
    icon: Map,
  },
  {
    id: "corporate",
    title: "Corporate Travels",
    description: "Premium sedans and executive MUVs for corporate meetings, business delegations, and client hospitality.",
    icon: Briefcase,
  },
  {
    id: "wedding",
    title: "Wedding Transportation",
    description: "Add royal elegance to your destination wedding with luxury sedans and Maharaja Tempo Traveller convoys.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#0A1128] border-t border-gold/10">
      <div className="absolute inset-0 rajasthan-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          tagline="Royal Hospitality"
          title="Bespoke Travel Services"
          description="We tailor every ride to guarantee safety, convenience, and unparalleled comfort. Select the perfect service for your travel style."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="luxury-card flex flex-col p-8 rounded-sm group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div className="w-14 h-14 rounded-sm border border-gold/25 flex items-center justify-center text-gold mb-6 bg-gold/5 group-hover:bg-gold group-hover:text-charcoal transition-all duration-500 ease-out shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                  <Icon size={24} className="stroke-[1.5]" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#FAF6F0] mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-sandstone/70 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <Link
                  href={`/booking?serviceType=${service.id}`}
                  className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-bold transition-all duration-300 group-hover:gap-2.5 font-sans"
                >
                  <span>Book Ride</span>
                  <ArrowRight size={14} />
                </Link>

                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-dark to-gold-hover group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
