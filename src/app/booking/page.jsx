"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Calculator, Sparkles, ShieldCheck } from "lucide-react";
import { fleet } from "@/data/mockData";
import SectionHeader from "@/components/core/SectionHeader";

function BookingContent() {
  const searchParams = useSearchParams();

  const [tripType, setTripType] = useState("oneway");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [returnDate, setReturnDate] = useState("");
  const [selectedVehicleId, setSelectedVehicleId] = useState("innova-crysta");
  const [custName, setCustName] = useState("");
  const [custPhone, setCustPhone] = useState("");
  const [custEmail, setCustEmail] = useState("");
  const [custMsg, setCustMsg] = useState("");

  const [estDistance, setEstDistance] = useState(250);

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    const trip = searchParams.get("tripType");
    const pick = searchParams.get("pickup");
    const dest = searchParams.get("destination");
    const dt = searchParams.get("date");
    const veh = searchParams.get("vehicle");

    if (trip) setTripType(trip);
    if (pick) setPickup(pick);
    if (dest && trip !== "local") setDestination(dest);
    if (dt) setDate(dt);
    if (veh) setSelectedVehicleId(veh);
  }, [searchParams]);

  const activeVehicle = fleet.find((v) => v.id === selectedVehicleId) || fleet[3];

  const getCalculation = () => {
    let baseFare = 0;
    let days = 1;
    let driverAllowance = 300;

    if (tripType === "local") {
      baseFare = activeVehicle.dayRate;
      driverAllowance = 0;
    } else if (tripType === "roundtrip") {
      if (date && returnDate) {
        const d1 = new Date(date);
        const d2 = new Date(returnDate);
        const diffTime = Math.abs(d2 - d1);
        days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
      } else {
        days = 2;
      }
      const distance = estDistance * days;
      baseFare = distance * activeVehicle.pricePerKm;
      driverAllowance = 300 * days;
    } else {
      baseFare = estDistance * activeVehicle.pricePerKm;
      driverAllowance = 300;
    }

    const subTotal = baseFare + driverAllowance;
    const gst = Math.round(subTotal * 0.05);
    const grandTotal = subTotal + gst;

    return {
      days,
      baseFare,
      driverAllowance,
      gst,
      grandTotal,
    };
  };

  const calc = getCalculation();

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const ref = "RRT-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `*ROYAL RAJASTHAN TRAVELS - TAXI BOOKING*
----------------------------------------
*Booking Ref:* ${bookingRef}
*Guest Name:* ${custName}
*Phone:* ${custPhone}
*Trip Type:* ${tripType.toUpperCase()}
*Pickup:* ${pickup}
*Destination:* ${tripType === "local" ? "Local Sightseeing" : destination}
*Date & Time:* ${date} @ ${time}
${tripType === "roundtrip" ? `*Return Date:* ${returnDate}\n` : ""}*Vehicle Choice:* ${activeVehicle.name}
----------------------------------------
*Invoice Breakdown:*
- Base Rate: ₹${calc.baseFare}
- Driver Allowance: ₹${calc.driverAllowance}
- GST (5%): ₹${calc.gst}
*Estimated Grand Total:* ₹${calc.grandTotal}
----------------------------------------
Please confirm my chauffeur ride. Thank you!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919876543210?text=${encoded}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 relative z-10">
      <SectionHeader
        tagline="Chauffeur Services"
        title="Royal Taxi Reservation"
        description="Configure your luxury travel parameters, choose from our premium fleet, and secure a booking instantly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <form onSubmit={handleBookingSubmit} className="glass-panel border border-gold/15 p-6 md:p-8 rounded-sm shadow-xl flex flex-col gap-6">
            
            <div>
              <h3 className="font-serif text-lg font-semibold text-gold mb-4 pb-2 border-b border-white/5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 text-xs flex items-center justify-center font-bold">1</span>
                Trip Parameters
              </h3>

              <div className="flex gap-2 mb-4">
                {[
                  { id: "oneway", label: "One Way" },
                  { id: "roundtrip", label: "Round Trip" },
                  { id: "local", label: "Local Sightseeing" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setTripType(tab.id)}
                    className={`px-4 py-2 text-xs font-sans uppercase tracking-wider font-semibold rounded-sm transition-all duration-300 ${
                      tripType === tab.id
                        ? "bg-gold text-charcoal shadow-md"
                        : "text-foreground/75 hover:bg-white/5 border border-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-sans uppercase tracking-widest text-[#FAF6F0]/60">Pickup Address / Point</label>
                  <input
                    type="text"
                    required
                    placeholder="Hotel, Airport, or Railway station"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none text-foreground"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-sans uppercase tracking-widest text-[#FAF6F0]/60">Destination City</label>
                  <input
                    type="text"
                    required={tripType !== "local"}
                    disabled={tripType === "local"}
                    placeholder="e.g. Udaipur, Jodhpur"
                    value={tripType === "local" ? "Local Sightseeing" : destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none text-foreground disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-sans uppercase tracking-widest text-[#FAF6F0]/60">Pickup Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none text-foreground [color-scheme:dark]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-sans uppercase tracking-widest text-[#FAF6F0]/60">Pickup Time</label>
                  <input
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none text-foreground [color-scheme:dark]"
                  />
                </div>

                {tripType === "roundtrip" && (
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-sans uppercase tracking-widest text-gold font-bold">Return Date</label>
                    <input
                      type="date"
                      required
                      value={returnDate}
                      min={date || new Date().toISOString().split("T")[0]}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full bg-white/5 border border-gold/40 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none text-foreground [color-scheme:dark]"
                    />
                  </div>
                )}

                {tripType !== "local" && (
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-sans uppercase tracking-widest text-[#FAF6F0]/60">Est. Distance (km)</label>
                    <input
                      type="number"
                      required
                      min={100}
                      value={estDistance}
                      onChange={(e) => setEstDistance(parseInt(e.target.value, 10) || 0)}
                      className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none text-foreground"
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-gold mb-4 pb-2 border-b border-white/5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 text-xs flex items-center justify-center font-bold">2</span>
                Choose Vehicle
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {fleet.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVehicleId(v.id)}
                    className={`p-3 border rounded-sm flex flex-col items-center text-center transition-all ${
                      selectedVehicleId === v.id
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-white/10 hover:border-white/20 text-foreground"
                    }`}
                  >
                    <span className="font-serif text-xs font-semibold">{v.name}</span>
                    <span className="text-[9px] uppercase text-sandstone/50 mt-1">{v.type}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-gold mb-4 pb-2 border-b border-white/5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 text-xs flex items-center justify-center font-bold">3</span>
                Guest Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-sans uppercase tracking-widest text-[#FAF6F0]/60">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya"
                    value={custName}
                    onChange={(e) => setCustName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none text-foreground"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-sans uppercase tracking-widest text-[#FAF6F0]/60">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={custPhone}
                    onChange={(e) => setCustPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none text-foreground"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-sans uppercase tracking-widest text-[#FAF6F0]/60">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. name@domain.com"
                    value={custEmail}
                    onChange={(e) => setCustEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none text-foreground"
                  />
                </div>

                <div className="sm:col-span-3 flex flex-col gap-1">
                  <label className="text-[10px] font-sans uppercase tracking-widest text-[#FAF6F0]/60">Special Instructions / Requests</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Carrier needed, Child seat, English speaking driver..."
                    value={custMsg}
                    onChange={(e) => setCustMsg(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-sm px-3.5 py-2.5 text-sm outline-none text-foreground resize-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-hover hover:from-gold-hover hover:via-gold hover:to-gold-dark text-charcoal font-sans text-xs md:text-sm uppercase tracking-widest font-bold rounded-sm shadow-lg flex items-center justify-center gap-2 group cursor-pointer transition-all duration-300 mt-2 active:scale-98"
            >
              <span>Confirm Chauffeur Ride</span>
            </button>
          </form>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel border border-gold/15 p-6 rounded-sm shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full pointer-events-none" />
            
            <h3 className="font-serif text-lg font-semibold text-[#FAF6F0] mb-4 pb-3 border-b border-white/5 flex items-center gap-2">
              <Calculator size={18} className="text-gold" />
              Fare Estimation
            </h3>

            <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-3.5 rounded-sm mb-5">
              <div className="w-16 h-12 bg-neutral-900 rounded-sm overflow-hidden flex items-center justify-center shrink-0">
                <img src={activeVehicle.image} alt={activeVehicle.name} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm font-semibold text-[#FAF6F0]">{activeVehicle.name}</span>
                <span className="text-[10px] uppercase text-gold font-semibold font-sans mt-0.5">{activeVehicle.type}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 font-sans text-xs text-sandstone/70 border-b border-white/5 pb-4 mb-4">
              <div className="flex justify-between">
                <span>Trip Category:</span>
                <span className="text-foreground capitalize font-semibold">{tripType}</span>
              </div>
              {tripType !== "local" && (
                <div className="flex justify-between">
                  <span>Estimated Distance:</span>
                  <span className="text-foreground font-semibold">{estDistance} km</span>
                </div>
              )}
              {tripType === "roundtrip" && (
                <div className="flex justify-between">
                  <span>Travel Duration:</span>
                  <span className="text-foreground font-semibold">{calc.days} Days</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Base Rate:</span>
                <span className="text-foreground font-semibold">
                  {tripType === "local" ? `₹${activeVehicle.dayRate} / Day` : `₹${activeVehicle.pricePerKm} / km`}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 font-sans text-xs text-sandstone/70 border-b border-white/5 pb-4 mb-4">
              <div className="flex justify-between">
                <span>Base Cost:</span>
                <span className="text-[#FAF6F0]">₹{calc.baseFare}</span>
              </div>
              <div className="flex justify-between">
                <span>Driver Night Allowance:</span>
                <span className="text-[#FAF6F0]">₹{calc.driverAllowance}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (5%):</span>
                <span className="text-[#FAF6F0]">₹{calc.gst}</span>
              </div>
            </div>

            <div className="flex items-center justify-between font-serif text-base md:text-lg font-bold text-gold">
              <span>Grand Total (Est.):</span>
              <span>₹{calc.grandTotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="mt-4 p-3 bg-gold/5 border border-gold/15 rounded-sm">
              <p className="text-[10px] text-sandstone/60 leading-relaxed font-sans font-light">
                *Toll Taxes, State Permits, and parking fees will be billed extra at actual costs. Estimated outstation distance calculation is subject to a minimum of 250 km per calendar day.
              </p>
            </div>
          </div>

          <div className="border border-white/5 bg-white/[0.01] p-5 rounded-sm flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-gold shrink-0" size={20} />
              <h4 className="font-serif text-sm font-semibold text-[#FAF6F0]">Corporate Guarantee</h4>
            </div>
            <p className="text-[11px] text-sandstone/60 leading-relaxed font-sans font-light">
              We offer free booking cancellations up to 24 hours prior to travel. All drivers are fully vaccinated, commercial-licensed, and background-vetted by our managers.
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0F1A30] border border-gold/25 p-8 max-w-md w-full rounded-sm text-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-gold/5 rounded-full blur-[80px]" />
              
              <div className="w-16 h-16 rounded-full border-2 border-gold text-gold flex items-center justify-center bg-gold/5 mx-auto mb-5">
                <Sparkles size={24} className="animate-pulse" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-gold tracking-wider mb-2">KHAMMAGHANI!</h3>
              <p className="text-xs uppercase tracking-widest text-[#FAF6F0]/60 mb-6 font-sans font-semibold">Ride Booked Successfully</p>
              
              <div className="bg-white/[0.02] border border-white/5 p-4 rounded-sm mb-6 text-left font-sans text-xs flex flex-col gap-2.5">
                <div className="flex justify-between">
                  <span className="text-sandstone/50">Booking Reference:</span>
                  <span className="text-gold font-bold">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sandstone/50">Guest Name:</span>
                  <span className="text-[#FAF6F0]">{custName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sandstone/50">Vehicle Selection:</span>
                  <span className="text-[#FAF6F0]">{activeVehicle.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sandstone/50">Date of Travel:</span>
                  <span className="text-[#FAF6F0]">{date}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/5 font-bold">
                  <span className="text-gold">Estimated Total:</span>
                  <span className="text-gold">₹{calc.grandTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <p className="text-xs text-sandstone/60 font-sans leading-relaxed mb-6 font-light">
                To guarantee driver allocation and confirm route details instantly, please send this invoice statement to our WhatsApp desk.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm on WhatsApp</span>
                </button>
                
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full py-3 border border-white/10 hover:bg-white/5 text-sandstone font-sans text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors cursor-pointer"
                >
                  <span>Close Window</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-gold">
        <span className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        <span className="text-xs uppercase tracking-widest mt-4 font-sans font-bold">Preparing Booking Desk...</span>
      </div>
    }>
      <BookingContent />
    </Suspense>
  );
}
