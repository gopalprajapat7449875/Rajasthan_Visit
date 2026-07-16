"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import BookingFormWidget from "@/components/booking-form/BookingFormWidget";

export default function Hero() {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 0.8, y: 0, duration: 1, delay: 0.5 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2 },
          "-=0.7"
        )
        .fromTo(
          descriptionRef.current,
          { opacity: 0, y: 30 },
          { opacity: 0.7, y: 0, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          formRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2 },
          "-=0.8"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-[#0A1128]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-35 scale-105 pointer-events-none"
        poster="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=80"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-camels-walking-in-the-sand-desert-during-sunset-34079-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-[#0A1128]/80 z-5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,11,24,0.9)_100%)] z-5 pointer-events-none" />
      <div className="absolute inset-0 rajasthan-pattern opacity-10 pointer-events-none z-5" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        <div
          ref={subtitleRef}
          className="mb-4 flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 rounded-full backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.25em] text-gold font-semibold">
            Padharo Mhare Des
          </span>
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
        </div>

        <h1
          ref={titleRef}
          className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-[#FAF6F0] tracking-wider leading-tight max-w-4xl"
        >
          Ride Like Royalty in <br className="hidden sm:inline" />
          <span className="text-gold-gradient font-black">Royal Rajasthan</span>
        </h1>

        <p
          ref={descriptionRef}
          className="font-sans text-sm sm:text-base md:text-lg text-sandstone max-w-2xl mt-4 mb-10 leading-relaxed font-light"
        >
          Experience premium outstation taxi rentals and bespoke heritage tour packages across Rajasthan's finest destinations. Udaipur, Jaipur, Jodhpur, and Jaisalmer await your arrival.
        </p>

        <div ref={formRef} className="w-full">
          <BookingFormWidget />
        </div>
      </div>
    </section>
  );
}
