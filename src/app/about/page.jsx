"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Award, Heart, Shield } from "lucide-react";
import SectionHeader from "@/components/core/SectionHeader";

export default function AboutPage() {
  const corporateValues = [
    {
      id: 1,
      title: "Atithi Devo Bhava",
      desc: "An ancient Sanskrit code meaning 'The Guest is God'. We treat every passenger with royal reverence and hospitality.",
      icon: Heart,
    },
    {
      id: 2,
      title: "Vetted Safety Protocols",
      desc: "All fleet rides are GPS-monitored, drivers are background-checked, and cabins go through deep disinfection routines.",
      icon: Shield,
    },
    {
      id: 3,
      title: "Heritage Tour Expertise",
      desc: "With 15+ years exploring Rajasthan's roads, we reveal the state's hidden stepwells, palaces, and local craft bazaars.",
      icon: Compass,
    },
    {
      id: 4,
      title: "ISO-Certified Operations",
      desc: "Committed to quality services, transparent flat-rate outstation invoicing, and strict professional driver rules.",
      icon: Award,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 relative z-10">
      <SectionHeader
        tagline="Imperial Journey"
        title="About Royal Rajasthan Travels"
        description="Learn about our 15-year heritage of hosting global travelers and providing premier taxi rentals across the land of Maharajas."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs uppercase tracking-widest text-gold font-bold font-sans">Our Origins</span>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#FAF6F0] leading-snug">
            Bridging Heritage Hospitality with Modern Comfort
          </h3>
          <p className="font-sans text-sm text-sandstone/70 leading-relaxed font-light">
            Founded in Udaipur in 2011, Royal Rajasthan Travels was born out of a simple vision: to make Rajasthan's historic landscapes accessible to global travelers while maintaining the high hospitality standards expected in royal palaces. 
          </p>
          <p className="font-sans text-sm text-sandstone/70 leading-relaxed font-light">
            We started with just three sedans. Today, our fleet extends to dozens of premium Toyota Crystas, Hycross Hybrids, and customized Maharaja Tempo Travellers. We have served over 4,800 guests, ranging from solo international backpackers to premium destination wedding parties and corporate VIP groups.
          </p>
          <p className="font-sans text-sm text-gold font-semibold leading-relaxed">
            Wherever you go, from the wind-swept forts of Jaipur to the tranquil lakes of Udaipur and rolling golden dunes of Jaisalmer, we promise a safe, comfortable, and majestic road trip.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[450px] rounded-sm overflow-hidden border border-gold/20 shadow-2xl flex items-center justify-center bg-[#050B18] group"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsDEC1xt9ZHd_ImRjQRMnc5jPJh1YKjcZw3Fno1GE3A&s"
            alt="Royal Udaipur Palace"
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-80" />
          
          <div className="relative z-10 flex flex-col items-center justify-center p-8 bg-[#0A1128]/80 border border-gold/25 backdrop-blur-md max-w-xs text-center rounded-sm">
            <div className="w-12 h-12 border border-gold flex items-center justify-center rounded-sm rotate-45 mb-4 text-gold font-serif text-lg font-bold">
              <span className="-rotate-45">15</span>
            </div>
            <span className="font-serif text-lg font-bold text-[#FAF6F0] tracking-wide">Years of Royalty</span>
            <span className="font-sans text-[10px] text-gold uppercase tracking-widest mt-1">Hospitality Excellence</span>
          </div>
        </motion.div>
      </div>

      <div className="mb-20">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-gold font-bold font-sans">Core Values</span>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#FAF6F0] mt-2">What Drives Us</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="luxury-card p-6 rounded-sm flex flex-col items-start gap-4 text-left"
              >
                <div className="w-12 h-12 rounded-sm border border-gold/25 bg-gold/5 flex items-center justify-center text-gold">
                  <Icon size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#FAF6F0]">{val.title}</h4>
                <p className="font-sans text-xs text-sandstone/60 leading-relaxed">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="border border-gold/20 bg-white/[0.01] p-8 md:p-12 rounded-sm relative overflow-hidden">
        <div className="absolute inset-0 rajasthan-pattern opacity-5 pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-3 flex flex-col items-center text-center gap-3">
            <div className="w-24 h-24 rounded-full border-2 border-gold overflow-hidden bg-charcoal animate-pulse-slow">
              <div className="w-full h-full flex items-center justify-center font-serif text-gold text-2xl font-bold bg-gold/10">
                MSS
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-bold text-[#FAF6F0]">Bharat kumar prajapat</span>
              <span className="font-sans text-[10px] text-gold uppercase tracking-widest mt-0.5">Founder & Director</span>
            </div>
          </div>

          <div className="md:col-span-9 flex flex-col gap-4 text-left border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <span className="font-serif text-5xl text-gold/20 leading-none -mb-4 font-black font-sans">&ldquo;</span>
            <p className="font-sans text-sm text-sandstone/70 leading-relaxed font-light italic">
              When a traveler steps into our vehicle, they are not just renting a cab, they are trusting us with their safety, time, and memory of Rajasthan. We take this trust with high respect. Our drivers are trained to act not just as operators, but as warm hosts and knowledgeable road partners who care for your safety and comfort. Welcome to the royal lands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
