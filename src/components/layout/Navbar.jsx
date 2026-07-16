"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Taxi Booking", href: "/booking" },
  { name: "Packages", href: "/packages" },
  { name: "Destinations", href: "/destinations" },
  { name: "Contact", href: "/contact" },
  { name: "Pages",href:"" },


];


const Pages = [
  { name: "Fleet", href: "/fleet" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
]


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled
          ? "py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] border-b border-gold/15 bg-opacity-90 backdrop-blur-md"
          : "py-6 bg-transparent"
          }`}
        style={{
          backgroundColor: scrolled ? "var(--navbar-bg)" : "transparent",
        }}
      >
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 border border-gold flex items-center justify-center rounded-sm rotate-45 transition-transform duration-500 group-hover:rotate-[135deg]">
              <span className="font-serif text-gold text-lg font-bold -rotate-45 group-hover:rotate-[-135deg] transition-transform duration-500">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-widest text-foreground transition-colors">
                ROYAL RAJASTHAN
              </span>
              <span className="text-[9px] uppercase tracking-[0.38em] text-gold font-semibold -mt-1 font-sans">
                Travels & Rentals
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sans text-xs xl:text-sm uppercase tracking-wider font-medium transition-colors hover:text-gold ${isActive ? "text-gold" : "text-foreground/80"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-[-6px] left-0 w-full h-[1.5px] bg-gradient-to-r from-gold-dark via-gold to-gold-hover"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            {/* {Pages.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sans text-xs xl:text-sm uppercase tracking-wider font-medium transition-colors hover:text-gold ${isActive ? "text-gold" : "text-foreground/80"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-[-6px] left-0 w-full h-[1.5px] bg-gradient-to-r from-gold-dark via-gold to-gold-hover"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })} */}




          </nav>

          {/* Utility Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Quick Call */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 px-4 py-2 border border-gold bg-gold/10 hover:bg-gold hover:text-charcoal transition-all duration-300 font-sans text-xs uppercase tracking-wider font-semibold rounded-sm text-gold"
            >
              <PhoneCall size={14} />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 lg:hidden relative z-50">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-gold/20 rounded-sm text-gold transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#0A1128]/98 backdrop-blur-lg flex flex-col justify-center lg:hidden"
          >
            <div className="absolute inset-0 rajasthan-pattern opacity-10" />

            <div className="relative z-10 px-8 flex flex-col items-center justify-between h-[75vh]">
              {/* Logo in overlay */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 border border-gold flex items-center justify-center rounded-sm rotate-45 mb-4">
                  <span className="font-serif text-gold text-xl font-bold -rotate-45">R</span>
                </div>
                <span className="font-serif text-2xl font-bold tracking-widest text-[#FAF6F0]">
                  ROYAL RAJASTHAN
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-semibold font-sans mt-0.5">
                  Travels & Rentals
                </span>
              </div>

              {/* Navigation list */}
              <nav className="flex flex-col items-center gap-5 mt-8 overflow-y-auto max-h-[40vh] w-full no-scrollbar">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-lg font-serif tracking-widest uppercase hover:text-gold block py-1 font-semibold ${isActive ? "text-gold" : "text-[#FAF6F0]/80"
                          }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Call CTA in overlay */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.5 }}
                className="mt-6 flex flex-col items-center gap-3 w-full"
              >
                <div className="w-12 h-[1px] bg-gold/30" />
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 w-full max-w-[280px] py-3.5 border border-gold bg-gold/10 hover:bg-gold hover:text-charcoal text-[#FAF6F0] transition-all duration-300 font-sans text-xs uppercase tracking-widest font-bold rounded-sm"
                >
                  <PhoneCall size={14} />
                  <span>Call Booking Helpline</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
