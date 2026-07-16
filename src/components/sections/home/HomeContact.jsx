"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/core/SectionHeader";

export default function HomeContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 600);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#060B18] border-t border-gold/10">
      <div className="absolute inset-0 rajasthan-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          tagline="Royal Concierge"
          title="Plan Your Royal Journey"
          description="Have specific questions about itineraries, driver details, or custom booking demands? Reach out to our dedicated travel experts."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="font-serif text-2xl font-semibold text-[#FAF6F0] mb-2 tracking-wide">
                Direct Contact
              </h3>
              
              <div className="flex flex-col gap-5 text-sm text-sandstone/70 font-sans">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/20 rounded-sm bg-gold/5 flex items-center justify-center text-gold shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase text-gold font-bold mb-1">Corporate Head Office</span>
                    <span>102, Palace Road, Near City Palace, Udaipur, Rajasthan, India - 313001</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/20 rounded-sm bg-gold/5 flex items-center justify-center text-gold shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase text-gold font-bold mb-1">Helpline Number</span>
                    <a href="tel:+919876543210" className="hover:text-gold transition-colors text-sm sm:text-base font-semibold text-[#FAF6F0]">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/20 rounded-sm bg-gold/5 flex items-center justify-center text-gold shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase text-gold font-bold mb-1">Corporate Email</span>
                    <a href="mailto:info@royalrajasthantravels.com" className="hover:text-gold transition-colors">info@royalrajasthantravels.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-64 border border-gold/20 rounded-sm overflow-hidden bg-charcoal group">
              <div className="absolute inset-0 bg-[#0A1128] flex flex-col items-center justify-center p-6 text-center">
                <div className="absolute inset-0 rajasthan-pattern opacity-10" />
                <div className="w-12 h-12 border border-gold flex items-center justify-center rounded-sm rotate-45 mb-4 text-gold animate-bounce">
                  <MapPin size={20} className="-rotate-45" />
                </div>
                <span className="font-serif text-sm font-semibold text-[#FAF6F0] tracking-wider">Royal Office Udaipur</span>
                <span className="font-sans text-[10px] text-gold uppercase tracking-widest mt-1">Udaipur City Center</span>
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel border border-gold/15 p-8 rounded-sm shadow-xl relative overflow-hidden">
              <h3 className="font-serif text-2xl font-semibold text-[#FAF6F0] mb-6 tracking-wide border-b border-white/5 pb-4">
                Send Royal Inquiry
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center gap-4 text-gold"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center text-gold bg-gold/5 mb-2">
                    <Send size={24} />
                  </div>
                  <h4 className="font-serif text-xl font-bold">Khammaghani!</h4>
                  <p className="font-sans text-xs sm:text-sm text-sandstone/70 max-w-sm">
                    Thank you for reaching out to Royal Rajasthan Travels. A dedicated travel planner will contact you within 2-4 hours with options.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 border border-gold hover:bg-gold hover:text-charcoal transition-colors font-sans text-xs uppercase tracking-wider font-semibold rounded-sm text-gold"
                  >
                    Send Another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-sans uppercase tracking-widest text-gold font-bold">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Maharana Pratap"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/15 focus:border-gold rounded-sm px-4 py-3 text-sm outline-none transition-colors text-foreground font-medium"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-sans uppercase tracking-widest text-gold font-bold">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/15 focus:border-gold rounded-sm px-4 py-3 text-sm outline-none transition-colors text-foreground font-medium"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-sans uppercase tracking-widest text-gold font-bold">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. visitor@palace.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/15 focus:border-gold rounded-sm px-4 py-3 text-sm outline-none transition-colors text-foreground font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-sans uppercase tracking-widest text-gold font-bold">Travel Requirements</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Outline details such as: travel duration, cities to visit, vehicle preferences..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/15 focus:border-gold rounded-sm px-4 py-3 text-sm outline-none transition-colors text-foreground font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-hover hover:from-gold-hover hover:via-gold hover:to-gold-dark text-charcoal font-sans text-xs md:text-sm uppercase tracking-widest font-bold rounded-sm shadow-lg flex items-center justify-center gap-2 group cursor-pointer transition-all duration-300 mt-2 active:scale-98"
                  >
                    <span>Send Royal Message</span>
                    <Send size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
