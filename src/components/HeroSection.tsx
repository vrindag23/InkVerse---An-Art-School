"use client";

import React from "react";
import FlipWords from "@/components/ui/flip-words";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center text-center px-6 min-h-screen bg-[#0f172a] text-white">
      {/* ✨ Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[200px] h-[200px] bg-pink-500 opacity-10 blur-2xl rounded-full mix-blend-screen animate-pulse" />

      {/* ✅ Hero Content */}
      <div className="relative w-full flex flex-col items-center justify-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight">
          Welcome to the{" "}
          <span className="text-[#c084fc] inline-block align-middle">
            <FlipWords
              words={["Creativity", "Poetry", "Imagination", "InkVerse"]}
            />
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl font-sans text-gray-300 max-w-2xl mx-auto">
          Unlock the magic of words. Find your voice. Share your story.
        </p>

        {/* ✅ Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#courses"
            className="px-6 py-3 text-sm sm:text-base rounded-md bg-[#c084fc] text-white hover:bg-[#a855f7] transition duration-300"
          >
            Explore Courses
          </a>

          <Link
            href="/contact"
            className="px-6 py-3 text-sm sm:text-base rounded-md border border-[#c084fc] text-[#c084fc] hover:bg-[#a855f7] hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
