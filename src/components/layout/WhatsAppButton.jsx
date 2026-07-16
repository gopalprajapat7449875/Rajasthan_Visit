"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "919876543210";
  const defaultText = "Hello Royal Rajasthan Travels, I would like to inquire about a taxi booking or tour package.";
  const encodedText = encodeURIComponent(defaultText);
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  return (
    <div className="fixed bottom-6 right-6 z-35 flex items-center justify-center">
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-[#25D366] opacity-35 animate-ping" />
      <span className="absolute inline-flex h-16 w-16 rounded-full bg-[#D4AF37] opacity-15 animate-pulse-slow" />

      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)] transition-shadow border-2 border-white/20"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-current" />
      </motion.a>
    </div>
  );
}
