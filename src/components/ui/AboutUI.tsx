"use client";

import React from "react";
import { motion } from "framer-motion";

// Milestone Data (Compact)
const milestones = [
  { year: "2018", title: "The Beginning", desc: "Started as a small poetry circle with just 20 passionate writers." },
  { year: "2019", title: "First 100 Students", desc: "Hosted our first creative writing workshop series." },
  { year: "2020", title: "Virtual Expansion", desc: "Adapted to online events & webinars for a wider audience." },
  { year: "2021", title: "Published Authors", desc: "Helped students release their first poetry books." },
  { year: "2022", title: "Creative Labs", desc: "Launched storytelling labs & mentorship programs." },
  { year: "2023", title: "Global Reach", desc: "Connected writers from 12+ countries worldwide." },
  { year: "2024", title: "Award-Winning", desc: "Recognized for excellence in creative education." },
  { year: "2025", title: "Next Chapter", desc: "Now shaping the future with AI-powered creativity tools." },
];

// ✅ Timeline Card Component
const TimelineCard = ({ year, title, desc }: { year: string; title: string; desc: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="relative bg-[#1e1e2e]/70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-purple-500/40 hover:scale-[1.03] transition w-[280px]"
  >
    <h4 className="text-[#c084fc] font-bold text-md">{year}</h4>
    <h3 className="text-xl font-semibold mt-1">{title}</h3>
    <p className="text-gray-300 mt-1 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export const MilestoneTimeline = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#141a2e] via-[#1e1e2e] to-[#0d1325] overflow-hidden">
      
      {/* ✅ Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.3)_1px,transparent_1px)] [background-size:30px_30px]"></div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold text-[#f472b6] mb-14"
      >
        Our Journey
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#c084fc] to-[#a855f7]"></div>

        {/* Milestone Loop */}
        {milestones.map((m, i) => (
          <div
            key={i}
            className={`relative flex ${i % 2 === 0 ? "justify-start pr-6" : "justify-end pl-6"} mb-12`}
          >
            <TimelineCard year={m.year} title={m.title} desc={m.desc} />
          </div>
        ))}
      </div>
    </section>
  );
};
