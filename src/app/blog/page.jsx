"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, Calendar, User, Search, BookOpen, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/core/SectionHeader";
import { blogs } from "@/data/mockData";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredBlogs = blogs.filter((blog) => {
    return (
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 relative z-10">
      <AnimatePresence mode="wait">
        {activeArticle ? (
          <motion.article
            key="article-detail"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold hover:text-gold-hover transition-colors font-sans font-bold mb-8 cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span>Back to Travel stories</span>
            </button>

            <div className="h-[280px] sm:h-[420px] rounded-sm overflow-hidden border border-gold/15 mb-8 shadow-xl">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FAF6F0] mb-4 tracking-wide leading-tight">
              {activeArticle.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-xs font-sans text-sandstone/60 border-y border-white/5 py-4 mb-6">
              <div className="flex items-center gap-1">
                <User size={13} className="text-gold" />
                <span>By {activeArticle.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={13} className="text-gold" />
                <span>{activeArticle.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={13} className="text-gold" />
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            <div className="font-sans text-sm sm:text-base text-sandstone/75 leading-relaxed font-light flex flex-col gap-6">
              <p className="font-semibold text-[#FAF6F0] text-base leading-relaxed">
                {activeArticle.excerpt}
              </p>
              <p>{activeArticle.content}</p>
              <p>
                Exploring Rajasthan by road offers an intimate look at the state's transition from desert vistas to lake valleys. When planning your route, choosing a certified chauffeur ensures you skip the exhaustion of self-driving and instead focus entirely on the architectural palaces, regional cuisines, and cultural storytelling.
              </p>
              <p>
                Our packages are fully customized to match these travel plans. Speak to our Rajasthan road specialists today to design your dream journey.
              </p>
            </div>

            <div className="w-full h-[1px] bg-white/5 my-10" />

            <div className="glass-panel border border-gold/15 p-6 rounded-sm text-center flex flex-col items-center gap-4">
              <span className="font-serif text-lg font-bold text-gold">Ready to Write Your Own Travel Story?</span>
              <p className="font-sans text-xs text-sandstone/60 max-w-md">
                Rent a premium cab with a local driver and explore Rajasthan's cities at your own pace.
              </p>
              <Link
                href="/booking"
                className="px-6 py-2.5 bg-gradient-to-r from-gold-dark to-gold-hover text-charcoal font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-transform active:scale-98"
              >
                Book Your Cab Now
              </Link>
            </div>
          </motion.article>
        ) : (
          <motion.div
            key="article-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SectionHeader
              tagline="Royal Chronicles"
              title="Rajasthan Travel Blog"
              description="Read tourist insights, packing checklists, routes comparisons, and culinary recommendations curated by our local travel guides."
            />

            <div className="glass-panel border border-gold/15 max-w-md mx-auto mb-12 p-3 rounded-sm flex items-center gap-3">
              <Search size={18} className="text-gold shrink-0" />
              <input
                type="text"
                placeholder="Search travel stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-0 outline-none text-xs sm:text-sm text-foreground placeholder:text-foreground/35"
              />
            </div>

            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog, idx) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="luxury-card rounded-sm overflow-hidden flex flex-col h-full group cursor-pointer"
                    onClick={() => setActiveArticle(blog)}
                  >
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-85" />
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex gap-4 text-[10px] font-sans text-sandstone/50 mb-3 uppercase tracking-wider">
                        <div className="flex items-center gap-1">
                          <Calendar size={11} className="text-gold" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={11} className="text-gold" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-lg font-semibold text-[#FAF6F0] mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                        {blog.title}
                      </h3>

                      <p className="font-sans text-xs text-sandstone/60 leading-relaxed mb-6 flex-grow line-clamp-3">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs text-gold font-bold font-sans mt-auto pt-4 border-t border-white/5 uppercase tracking-wider">
                        <BookOpen size={13} />
                        <span>Read Story</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center text-sandstone/60 font-sans text-sm border border-dashed border-white/10 rounded-sm">
                No travel stories match your search query. Try typing another city or keyword.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
