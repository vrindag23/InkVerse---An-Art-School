"use client";

import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "We started with small poetry circles, bringing together like-minded dreamers who wanted to explore their voice.",
    color: "bg-[#fce7f3]", // soft pink
  },
  {
    year: "2019",
    title: "First Workshop Series",
    description:
      "Launched creative writing workshops that inspired over 100+ students within the first year.",
    color: "bg-[#e0f2fe]", // soft blue
  },
  {
    year: "2020",
    title: "Online Expansion",
    description:
      "During the global pandemic, we moved online, connecting students from 5+ countries.",
    color: "bg-[#fef9c3]", // soft yellow
  },
  {
    year: "2021",
    title: "Publishing Dreams",
    description:
      "Helped students publish their first poetry anthologies and short story collections.",
    color: "bg-[#e7f5e7]", // soft green
  },
  {
    year: "2022",
    title: "Global Community",
    description:
      "Our community reached 500+ members, making it one of the largest poetry schools online.",
    color: "bg-[#ede9fe]", // soft lavender
  },
  {
    year: "2023",
    title: "Creative Retreats",
    description:
      "We hosted offline creative retreats & writing camps for immersive experiences.",
    color: "bg-[#fff1f2]", // soft rose
  },
  {
    year: "2024",
    title: "Recognition",
    description:
      "Recognized as one of the top creative writing communities in the country.",
    color: "bg-[#f1f5f9]", // soft grayish white
  },
];

export default function HorizontalMilestones() {
  return (
    <section className="relative py-20 overflow-x-auto scrollbar-hide">
      <motion.h2
        className="text-center text-4xl font-bold text-[#f472b6] mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Journey Through the Years
      </motion.h2>

      {/* ✅ Horizontal Scroll Wrapper */}
      <motion.div
        className="flex gap-8 px-10 w-max"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {milestones.map((item, index) => (
          <motion.div
            key={index}
            className={`min-w-[300px] md:min-w-[350px] rounded-xl p-6 shadow-xl hover:shadow-2xl transition-transform hover:scale-105 ${item.color}`}
            whileHover={{ rotate: 1 }}
          >
            <h3 className="text-3xl font-bold text-black">{item.year}</h3>
            <h4 className="mt-2 text-xl font-semibold text-gray-800">
              {item.title}
            </h4>
            <p className="mt-3 text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
