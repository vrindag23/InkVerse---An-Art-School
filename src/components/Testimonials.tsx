"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard, { TestimonialType } from "@/components/ui/TestimonialCard";

const testimonials: TestimonialType[] = [
  {
    name: "Raghav Kapoor",
    role: "Aspiring Poet",
    quote: "Joining this community has been the best decision for my creative journey.",
    image: "/images/person2.jpeg",
  },
  {
    name: "Ananya Sharma",
    role: "Creative Writer",
    quote: "The workshops here unlocked my hidden potential and gave my writing a new voice.",
    image: "/images/person3.jpeg",
  },
  {
    name: "Kashish Mehta",
    role: "Storytelling Enthusiast",
    quote: "A nurturing space where ideas bloom into beautiful stories.",
    image: "/images/person5.jpeg",
  },
  {
    name: "Ishita Sen",
    role: "Student Writer",
    quote: "It felt like finding a family who understands and appreciates art.",
    image: "/images/person4.jpeg",
  },
  {
    name: "Arjun Rao",
    role: "Beginner Poet",
    quote: "This community truly gave me the confidence to share my poetry publicly.",
    image: "/images/person7.jpeg",
  },
  {
    name: "Kavya Nair",
    role: "Author",
    quote: "The guidance I received here shaped my debut poetry book.",
    image: "/images/person8.jpeg",
  },
];

export default function TestimonialsSlider() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-[#0d1325] to-[#141a2e] py-20 text-white overflow-hidden">

      {/* ✅ Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#f472b6]">What Our Students Say</h2>
        <p className="text-gray-300 mt-2">Hear from our passionate poets & writers</p>
      </div>

      {/* ✅ Smooth Blurred Edges (FIXED) */}
      <div className="absolute top-0 left-0 w-72 h-full bg-gradient-to-r from-[#0d1325] via-[#0d1325]/80 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-72 h-full bg-gradient-to-l from-[#0d1325] via-[#0d1325]/80 to-transparent z-10"></div>

      {/* ✅ Slider */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: paused ? 0 : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
