"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/core/SectionHeader";
import { testimonials } from "@/data/mockData";

export default function Testimonials() {
  const doubleTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#0A1128] border-t border-gold/10">
      <div className="absolute inset-0 rajasthan-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          tagline="Guest Experiences"
          title="What Our Clients Say"
          description="Read verified testimonials from travelers around the globe who chose our premium taxi booking and custom packages."
        />
      </div>

      <div className="relative w-full overflow-hidden py-4 flex mask-image-horizontal">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A1128] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A1128] to-transparent z-10 pointer-events-none" />

        <div 
          className="flex gap-6 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]"
        >
          {doubleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="inline-block whitespace-normal w-[320px] sm:w-[380px] p-6 sm:p-8 rounded-sm border border-gold/15 bg-white/[0.02] backdrop-blur-md shadow-lg flex flex-col justify-between shrink-0 group hover:border-gold/45 transition-colors duration-300 select-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`fill-current ${
                          i < t.rating ? "text-gold" : "text-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  <Quote size={20} className="text-gold/20 group-hover:text-gold/40 transition-colors duration-300" />
                </div>

                <p className="font-sans text-xs sm:text-sm text-sandstone/70 leading-relaxed italic mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4 mt-auto">
                <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-serif text-gold font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-semibold text-[#FAF6F0]">{t.name}</span>
                  <span className="font-sans text-[10px] text-sandstone/50">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
