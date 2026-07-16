"use client";

import React, { useState } from "react";
import { Search, Plus, Minus, HelpCircle, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/core/SectionHeader";
import { faqs } from "@/data/mockData";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) => {
    return (
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 relative z-10">
      <SectionHeader
        tagline="Travel Assistance"
        title="Royal Help Center"
        description="Search for immediate answers regarding cab rentals, tour customizations, safety standards, driver credentials, and cancellation policies."
      />

      <div className="glass-panel border border-gold/15 p-3.5 rounded-sm flex items-center gap-3 mb-10 max-w-md mx-auto">
        <Search size={18} className="text-gold shrink-0" />
        <input
          type="text"
          placeholder="Search questions (e.g. driver, cancellation, billing)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent border-0 outline-none text-xs sm:text-sm text-foreground placeholder:text-foreground/35"
        />
      </div>

      <div className="flex flex-col gap-4 mb-16">
        <AnimatePresence mode="popLayout">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  layout
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="border border-gold/15 bg-white/[0.01] hover:bg-white/[0.02] rounded-sm transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-serif font-semibold text-[#FAF6F0] hover:text-gold transition-colors focus:outline-none"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <div className="text-gold shrink-0 p-1 border border-gold/20 rounded-sm">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-5 pt-0 border-t border-white/5 text-xs sm:text-sm text-sandstone/70 leading-relaxed font-sans font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="py-16 text-center text-sandstone/60 font-sans text-sm border border-dashed border-white/10 rounded-sm">
              No matching questions found. Try search keywords like 'driver', 'price', 'airport' or 'cancel'.
            </div>
          )}
        </AnimatePresence>
      </div>

      <div className="border border-gold/25 bg-gold/5 p-6 rounded-sm text-center flex flex-col items-center gap-4 max-w-xl mx-auto">
        <HelpCircle className="text-gold" size={28} />
        <h3 className="font-serif text-lg font-bold text-[#FAF6F0]">Still Have Questions?</h3>
        <p className="font-sans text-xs text-sandstone/60 max-w-sm">
          If you didn't find the answers in our help center, contact our reservation helpline. We are active 24/7.
        </p>
        <a
          href="tel:+919876543210"
          className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gold-dark to-gold-hover text-charcoal font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-transform active:scale-98"
        >
          <PhoneCall size={14} />
          <span>Call Support Desk</span>
        </a>
      </div>
    </div>
  );
}
