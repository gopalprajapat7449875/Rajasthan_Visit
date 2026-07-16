"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, Image as ImageIcon } from "lucide-react";
import SectionHeader from "@/components/core/SectionHeader";

const galleryImages = [
  {
    id: 1,
    title: "Amer Fort Sunrise",
    category: "palaces",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0iUwaPbBSdsA-Xz8LPImReho5sxAlw4KP4iNLQtdN3Rw-v87G5Lrs0RG&s=10",
    location: "Jaipur",
  },
  {
    id: 2,
    title: "Lake Pichola Luxury Boat",
    category: "palaces",
    image: "https://www.rajasthanplaces.com/wp-content/uploads/2024/08/Pichola-Lake-Boat-Ride.webp",
    location: "Udaipur",
  },
  {
    id: 3,
    title: "Sunset Camel Caravan",
    category: "desert",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEo4jF1OMs1t2hv9Ypu-0-EhVIv9-Szc09gH5HQEzjR_3rF1vPn6jCXU&s=10",
    location: "Thar Desert, Jaisalmer",
  },
  {
    id: 4,
    title: "Mehrangarh Fort Skyline",
    category: "palaces",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6JsRf5z122G9haHu8dqPZoi2y22AWvP_Ui6jUmmstSAdqmv9KgglL3U&s=10",
    location: "Jodhpur",
  },
  {
    id: 5,
    title: "Sacred Brahma Ghats",
    category: "culture",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0R_4YAdLqjDQj5_nQMLtSKQJqj4nBsn8L8a1K2p0HOSilwQsKqOYlc8&s=10",
    location: "Pushkar",
  },
  {
    id: 6,
    title: "Traditional Kalbelia Performance",
    category: "culture",
    image: "https://cdn.shopify.com/s/files/1/0806/3439/files/kalbeliya-1_large.jpg?v=1474121178",
    location: "Jaisalmer Camps",
  },
  {
    id: 7,
    title: "Luxury Innova Cab Fleet",
    category: "fleet",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FJwTEGrqPQH1P4N744xrgLiwszpJo0gRbdMhX0xcwobgzFB0c15DIOk&s=10",
    location: "Jaipur Office",
  },
  {
    id: 8,
    title: "Hawa Mahal Front Facade",
    category: "palaces",
    image: "https://www.shutterstock.com/shutterstock/videos/4036018375/thumb/1.jpg?ip=x480",
    location: "Jaipur",
  },
  {
    id: 9,
    title: "Royal Maharaja Coach Interior",
    category: "fleet",
    image: "https://travelogyindia.b-cdn.net/travelogyindia-v1//itinerary_banner/1753183891-1733230223-img_20240917_121603-min.jpg",
    location: "Udaipur Office",
  },
];

export default function GalleryPage() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filteredImages = galleryImages.filter((img) => {
    if (filterCategory === "all") return true;
    return img.category === filterCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 relative z-10">
      <SectionHeader
        tagline="Visual Splendors"
        title="Royal Rajasthan Gallery"
        description="Browse high-resolution travel photography capturing architectural palaces, colorful festivals, sand dunes, and our luxury commercial taxis."
      />

      <div className="flex gap-2 mb-10 border-b border-white/10 pb-4 overflow-x-auto no-scrollbar whitespace-nowrap">
        {[
          { id: "all", label: "All Photos" },
          { id: "palaces", label: "Palaces & Forts" },
          { id: "desert", label: "Desert Safari" },
          { id: "culture", label: "Culture & Dance" },
          { id: "fleet", label: "Cabs & Coaches" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilterCategory(tab.id)}
            className={`px-4 py-2 text-xs md:text-sm font-sans uppercase tracking-wider font-semibold rounded-sm transition-all duration-300 ${
              filterCategory === tab.id
                ? "bg-gold text-charcoal shadow-md"
                : "text-foreground/75 hover:bg-white/5 border border-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveLightbox(img)}
              className="break-inside-avoid relative rounded-sm overflow-hidden border border-gold/15 shadow-md cursor-pointer group"
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-[#0A1128]/80 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between border-b border-gold/25 pb-2 mb-2">
                  <h4 className="font-serif text-base font-bold text-gold">{img.title}</h4>
                  <Eye size={16} className="text-gold" />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-sandstone/60 font-sans">
                  <ImageIcon size={10} className="text-gold" />
                  <span>{img.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-6 right-6 p-2 text-gold border border-gold/20 rounded-full hover:bg-gold hover:text-charcoal transition-colors cursor-pointer z-10"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative max-w-4xl w-full max-h-[80vh] flex items-center justify-center rounded-sm overflow-hidden border border-gold/15"
            >
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>

            <div className="mt-4 flex flex-col items-center text-center">
              <h3 className="font-serif text-lg font-bold text-gold">{activeLightbox.title}</h3>
              <span className="font-sans text-xs text-sandstone/60 uppercase tracking-widest mt-1">
                {activeLightbox.location}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
