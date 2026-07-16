"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050B18] text-[#FAF6F0] pt-16 pb-8 overflow-hidden border-t border-gold/15">
      {/* Background traditional pattern decoration */}
      <div className="absolute inset-0 rajasthan-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Royal Rajasthan Travels Branding */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 border border-gold flex items-center justify-center rounded-sm rotate-45">
                <span className="font-serif text-gold text-base font-bold -rotate-45">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-widest text-[#FAF6F0]">
                  ROYAL RAJASTHAN
                </span>
                <span className="text-[9px] uppercase tracking-[0.38em] text-gold font-semibold -mt-1 font-sans">
                  Travels & Rentals
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#FAF6F0]/60 font-sans leading-relaxed mt-2">
              Experience the luxury hospitality and rich cultural heritage of Rajasthan. We provide premium car rental, outstation taxi booking, and tailored holiday tour packages across the land of kings.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <a href="#" className="w-9 h-9 rounded-sm border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-colors text-white/70" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-sm border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-colors text-white/70" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-sm border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-colors text-white/70" aria-label="Youtube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-sm border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-colors text-white/70" aria-label="TripAdvisor">
                <Compass size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-gold text-lg tracking-wider font-semibold border-b border-white/5 pb-2">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-[#FAF6F0]/70 font-sans">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-gold transition-colors">Taxi Booking</Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-gold transition-colors">Packages</Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-gold transition-colors">Destinations</Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-gold transition-colors">Our Fleet</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors">Travel Blog</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold transition-colors">FAQs</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-gold text-lg tracking-wider font-semibold border-b border-white/5 pb-2">
              Popular Cities
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#FAF6F0]/70 font-sans">
              <li>
                <Link href="/destinations#jaipur" className="hover:text-gold transition-colors">Jaipur - The Pink City</Link>
              </li>
              <li>
                <Link href="/destinations#udaipur" className="hover:text-gold transition-colors">Udaipur - The Lake City</Link>
              </li>
              <li>
                <Link href="/destinations#jaisalmer" className="hover:text-gold transition-colors">Jaisalmer - The Golden Dunes</Link>
              </li>
              <li>
                <Link href="/destinations#jodhpur" className="hover:text-gold transition-colors">Jodhpur - The Blue Fortress</Link>
              </li>
              <li>
                <Link href="/destinations#pushkar" className="hover:text-gold transition-colors">Pushkar - Sacred Pilgrimage</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-gold text-lg tracking-wider font-semibold border-b border-white/5 pb-2">
              Royal Office
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm text-[#FAF6F0]/70 font-sans">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>102, Palace Road, Near City Palace, Udaipur, Rajasthan, India - 313001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:info@royalrajasthantravels.com" className="hover:text-gold transition-colors">info@royalrajasthantravels.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <div className="w-full h-[1px] bg-white/5 my-8" />

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6F0]/50 font-sans text-center sm:text-left">
          <p>© {new Date().getFullYear()} Royal Rajasthan Travels. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-gold transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
