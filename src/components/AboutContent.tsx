"use client";

import React from "react";
import { motion } from "framer-motion";
import HorizontalMilestones from "@/components/ui/HorizontalMilestones";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-[#0f172a] via-[#1e1e2e] to-[#0f172a] text-white">
      
      {/* ✅ Hero Section with Merged About Content */}
      <section className="relative py-20 px-6 text-center">
        <motion.h1
          className="text-5xl font-bold text-[#f472b6]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Our Creative Writing & Poetry School
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Welcome to a space where words breathe life.  
          Our mission is to nurture storytellers and poets, helping them unlock their creative potential.  
          From beginner-friendly writing sessions to advanced literary workshops, we’re building a vibrant community where words come alive.
        </motion.p>

        {/* ✅ Quick Stats Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { title: "500+ Students", desc: "who transformed their writing journey" },
            { title: "50+ Workshops", desc: "covering poetry, storytelling & publishing" },
            { title: "10+ Countries", desc: "students from across the globe" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-gradient-to-br from-[#1f2937] to-[#111827] shadow-lg hover:shadow-[#a855f7]/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-[#c084fc]">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Horizontal Milestones (with soft colorful blocks) */}
      <HorizontalMilestones />

      {/* ✅ Extra Section: Why We Exist */}
      <section className="py-20 text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-[#c084fc]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Why We Exist
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto mt-6 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We believe every writer has a story waiting to be told.  
          Our school is a safe haven for dreamers, creators, and anyone who wants to express themselves  
          through the power of words.
        </motion.p>
      </section>
    </main>
  );
}
