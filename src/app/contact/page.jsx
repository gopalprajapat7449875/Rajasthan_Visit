"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/core/SectionHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Taxi Booking",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "Taxi Booking", message: "" });
    }, 600);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 relative z-10">
      <SectionHeader
        tagline="Corporate Helpdesk"
        title="Contact Our Offices"
        description="Get in touch with our corporate booking managers in Udaipur or Jaipur for taxi hires, custom group tours, or luxury coach rentals."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="border border-gold/15 bg-white/[0.01] p-6 rounded-sm flex gap-4">
            <div className="w-12 h-12 border border-gold/25 rounded-sm bg-gold/5 flex items-center justify-center text-gold shrink-0">
              <MapPin size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase text-gold font-bold mb-1 font-sans">Udaipur Head Office</span>
              <span className="font-sans text-xs text-sandstone/70 leading-relaxed">
                102, Palace Road, Near City Palace, Udaipur, Rajasthan, India - 313001
              </span>
            </div>
          </div>

          <div className="border border-gold/15 bg-white/[0.01] p-6 rounded-sm flex gap-4">
            <div className="w-12 h-12 border border-gold/25 rounded-sm bg-gold/5 flex items-center justify-center text-gold shrink-0">
              <Phone size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase text-gold font-bold mb-1 font-sans">Helpline Direct</span>
              <a href="tel:+919876543210" className="font-serif text-base font-bold text-[#FAF6F0] hover:text-gold transition-colors">
                +91 98765 43210
              </a>
              <span className="text-[10px] text-sandstone/50 font-sans mt-0.5">Available 24/7 on calls and WhatsApp</span>
            </div>
          </div>

          <div className="border border-gold/15 bg-white/[0.01] p-6 rounded-sm flex gap-4">
            <div className="w-12 h-12 border border-gold/25 rounded-sm bg-gold/5 flex items-center justify-center text-gold shrink-0">
              <Mail size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase text-gold font-bold mb-1 font-sans">Email Address</span>
              <a href="mailto:info@royalrajasthantravels.com" className="font-sans text-sm text-sandstone/70 hover:text-gold transition-colors">
                info@royalrajasthantravels.com
              </a>
              <a href="mailto:booking@royalrajasthantravels.com" className="font-sans text-sm text-sandstone/70 hover:text-gold transition-colors mt-0.5">
                booking@royalrajasthantravels.com
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="glass-panel border border-gold/15 p-8 rounded-sm shadow-xl relative overflow-hidden">
            <h3 className="font-serif text-2xl font-semibold text-[#FAF6F0] mb-6 tracking-wide border-b border-white/5 pb-4">
              Submit Direct Inquiry
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
                  Your inquiry message was received. Our team will review your travel details and send a formal quota to your email/phone within 2 hours.
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
                      placeholder="e.g. Vikramaditya"
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
                    placeholder="e.g. guest@palace.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/15 focus:border-gold rounded-sm px-4 py-3 text-sm outline-none transition-colors text-foreground font-medium"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-sans uppercase tracking-widest text-gold font-bold">Inquiry Category</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#0F1A30] border border-white/15 focus:border-gold rounded-sm px-4 py-3 text-sm outline-none text-foreground [color-scheme:dark]"
                  >
                    <option value="Taxi Booking">Outstation Taxi Booking</option>
                    <option value="Tour Package">Rajasthan Tour Package inquiry</option>
                    <option value="Luxury Coach">Maharaja Coach Rental</option>
                    <option value="Wedding Transport">Wedding Convoy services</option>
                    <option value="Other">Other support questions</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-sans uppercase tracking-widest text-gold font-bold">Detailed Requirements</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Briefly state passenger count, preferred travel dates, pickup cities, and key destinations..."
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

      <div className="relative h-96 border border-gold/15 rounded-sm overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-6 text-center">
          <div className="absolute inset-0 rajasthan-pattern opacity-10" />
          <div className="w-12 h-12 border border-gold flex items-center justify-center rounded-sm rotate-45 mb-4 text-gold animate-bounce">
            <MapPin size={20} className="-rotate-45" />
          </div>
          <span className="font-serif text-lg font-semibold text-[#FAF6F0] tracking-wider">Udaipur Head Office Location</span>
          <span className="font-sans text-xs text-gold uppercase tracking-widest mt-1">Palace Road Udaipur</span>
        </div>
      </div>
    </div>
  );
}
