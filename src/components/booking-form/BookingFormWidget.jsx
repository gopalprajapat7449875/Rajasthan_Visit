"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Car, ArrowRight, Compass } from "lucide-react";

export default function BookingFormWidget() {
  const router = useRouter();
  const [tripType, setTripType] = useState("oneway");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [vehicle, setVehicle] = useState("innova-crysta");

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams({
      tripType,
      pickup,
      destination: tripType === "local" ? "Local Sightseeing" : destination,
      date,
      vehicle,
    }).toString();
    
    router.push(`/booking?${query}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass-panel rounded-lg shadow-2xl p-6 relative overflow-hidden border border-gold/25 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-gold-dark before:via-gold before:to-gold-hover">
      
      <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
        {[
          { id: "oneway", label: "One Way" },
          { id: "roundtrip", label: "Round Trip" },
          { id: "local", label: "Local Sightseeing" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setTripType(tab.id)}
            className={`px-4 py-2 text-xs md:text-sm font-sans uppercase tracking-wider font-semibold rounded-sm transition-all duration-300 ${
              tripType === tab.id
                ? "bg-gold text-charcoal shadow-md"
                : "text-foreground/75 hover:bg-white/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] md:text-xs font-sans uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
            <MapPin size={12} />
            Pickup Location
          </label>
          <div className="relative">
            <input
              type="text"
              required
              placeholder="e.g. Jaipur Airport / Hotel"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full bg-white/5 border border-white/15 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none transition-colors text-foreground font-medium placeholder:text-foreground/35"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] md:text-xs font-sans uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
            {tripType === "local" ? <Compass size={12} /> : <MapPin size={12} />}
            {tripType === "local" ? "Tour City" : "Destination"}
          </label>
          <div className="relative">
            <input
              type="text"
              required
              disabled={tripType === "local"}
              placeholder={tripType === "local" ? "Udaipur Local Tour" : "e.g. Jodhpur / Jaisalmer"}
              value={tripType === "local" ? "Udaipur (Local Sightseeing)" : destination}
              onChange={(e) => setDestination(e.target.value)}
              className={`w-full bg-white/5 border rounded-sm px-3.5 py-2.5 text-sm outline-none transition-colors text-foreground font-medium placeholder:text-foreground/35 ${
                tripType === "local"
                  ? "opacity-50 cursor-not-allowed border-white/5"
                  : "border-white/15 focus:border-gold"
              }`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] md:text-xs font-sans uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
            <Calendar size={12} />
            Travel Date
          </label>
          <input
            type="date"
            required
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-white/5 border border-white/15 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none transition-colors text-foreground font-medium [color-scheme:dark]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] md:text-xs font-sans uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
            <Car size={12} />
            Preferred Vehicle
          </label>
          <select
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="w-full bg-white/5 border border-white/15 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none transition-colors text-foreground font-medium [color-scheme:dark]"
          >
            <option value="swift-dzire" className="bg-[#0F1A30]">Swift Dzire (Sedan)</option>
            <option value="etios-sedan" className="bg-[#0F1A30]">Toyota Etios (Premium)</option>
            <option value="ertiga" className="bg-[#0F1A30]">Maruti Ertiga (SUV)</option>
            <option value="innova-crysta" className="bg-[#0F1A30]">Innova Crysta (Luxury)</option>
            <option value="toyota-hycross" className="bg-[#0F1A30]">Toyota Hycross (Hybrid)</option>
            <option value="tempo-traveller-standard" className="bg-[#0F1A30]">Tempo Traveller (12-17 Seater)</option>
            <option value="tempo-traveller-maharaja" className="bg-[#0F1A30]">Maharaja Traveller (Luxury)</option>
          </select>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-4 lg:mt-2">
          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-hover hover:from-gold-hover hover:via-gold hover:to-gold-dark text-charcoal font-sans text-xs md:text-sm uppercase tracking-widest font-bold rounded-sm shadow-lg flex items-center justify-center gap-2 group cursor-pointer transition-all duration-300 active:scale-98"
          >
            <span>Configure Royal Ride</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </form>
    </div>
  );
}
