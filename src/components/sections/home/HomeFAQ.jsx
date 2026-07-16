"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/core/SectionHeader";
import { faqs } from "@/data/mockData";

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const homeFaqs = faqs.slice(0, 5);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#0A1128] border-t border-gold/10">
      <div className="absolute inset-0 rajasthan-pattern opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          tagline="Clarifying Rides"
          title="Frequently Asked Questions"
          description="Find quick answers regarding our booking terms, customized palace tour plans, commercial fleet specifications, and driver details."
        />

        <div className="flex flex-col gap-4">
          {homeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
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
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-gold/40 hover:border-gold text-gold font-sans text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 group"
          >
            <span>View Full Help Center</span>
            <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
