"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, ShieldCheck, Map } from "lucide-react";

function Counter({ value, suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime || 1);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gold">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsData = [
    { id: 1, value: "15", suffix: "+", label: "Years Experience", desc: "Serving travelers since 2011", icon: Award },
    { id: 2, value: "4800", suffix: "+", label: "Happy Customers", desc: "Highly rated on TripAdvisor", icon: Users },
    { id: 3, value: "45", suffix: "+", label: "Tour Packages", desc: "Bespoke heritage itineraries", icon: Map },
    { id: 4, value: "24", suffix: "/7", label: "Reliable Support", desc: "Always available for helpline", icon: ShieldCheck },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-[#060B18] overflow-hidden border-y border-gold/15">
      <div className="absolute inset-0 rajasthan-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-5 rounded-sm border border-gold/10 bg-white/[0.02] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-gold/35 flex items-center justify-center text-gold mb-3 bg-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                  <Icon size={18} />
                </div>
                <Counter value={stat.value} suffix={stat.suffix} />
                <h3 className="font-sans text-xs md:text-sm uppercase tracking-widest text-[#FAF6F0] font-bold mt-2">
                  {stat.label}
                </h3>
                <p className="font-sans text-[10px] md:text-xs text-sandstone/60 mt-1">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
