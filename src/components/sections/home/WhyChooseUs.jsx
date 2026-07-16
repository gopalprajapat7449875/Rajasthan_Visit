"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Compass, Clock, Wallet, CheckSquare, Heart } from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "Professional Drivers",
    desc: "English-speaking, commercial-licensed, local expert guides who are highly vetted, respectful, and safe.",
    icon: Compass,
  },
  {
    id: 2,
    title: "24/7 Concierge Support",
    desc: "Direct round-the-clock telephone and WhatsApp helpline to support you at any stage of your journey.",
    icon: Clock,
  },
  {
    id: 3,
    title: "Live GPS Tracking",
    desc: "All vehicles are equipped with real-time GPS tracking and emergency SOS systems for maximum security.",
    icon: ShieldAlert,
  },
  {
    id: 4,
    title: "100% Transparent Pricing",
    desc: "Zero hidden charges. Toll taxes, allowances, and parking fees are calculated clearly on booking sheets.",
    icon: Wallet,
  },
  {
    id: 5,
    title: "Sanitized & Pristine Fleet",
    desc: "Deep vacuumed, disinfected cabs with complementary hand sanitizers, tissues, and fresh bottled water.",
    icon: CheckSquare,
  },
  {
    id: 6,
    title: "Royal Hospitality Touch",
    desc: "Complimentary wet wipes, newspapers, and local tourist tips are provided by default in every ride.",
    icon: Heart,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#060B18] border-t border-gold/10">
      <div className="absolute inset-0 rajasthan-pattern opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.25em] text-gold font-bold">
                Royal Standards
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FAF6F0] mb-6 leading-tight tracking-wide">
              Hospitality is Our Sacred Heritage
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-sandstone/70 leading-relaxed font-light mb-8">
              At Royal Rajasthan Travels, we believe in the age-old Vedic principle: &ldquo;Atithi Devo Bhava&rdquo; (The Guest is God). We merge modern GPS-tracked safety standards with high-end customer hospitality, ensuring your journey through the land of Maharajas is nothing short of majestic.
            </p>
            
            <div className="flex items-center gap-4 p-4 border border-gold/20 bg-gold/5 rounded-sm w-full max-w-sm">
              <div className="w-12 h-12 border border-gold flex items-center justify-center rounded-sm rotate-45 flex items-center justify-center text-gold shrink-0">
                <span className="font-serif text-xl font-bold -rotate-45">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[#FAF6F0] font-bold font-sans">Vetted & Safe Cabs</span>
                <span className="text-[10px] text-gold font-medium font-sans">ISO 9001:2015 Certified Agency</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex gap-4 p-5 border border-white/5 bg-white/[0.01] hover:border-gold/25 transition-all duration-300 rounded-sm"
                >
                  <div className="text-gold shrink-0 mt-0.5">
                    <Icon size={20} className="stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-serif text-base font-semibold text-[#FAF6F0] mb-2">
                      {reason.title}
                    </h3>
                    <p className="font-sans text-xs text-sandstone/60 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
