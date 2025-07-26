"use client";

import React from "react";
import FlipWords from "@/components/ui/flip-words";
import Link from "next/link";

const HeroSection = () => {
  const words = ["Creativity", "Poetry", "Imagination", "InkVerse"];

  return (
    <section className="section-bg min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* ✨ UI Background Glow Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500 opacity-20 blur-3xl rounded-full mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-pink-500 opacity-10 blur-2xl rounded-full mix-blend-screen animate-pulse" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight">
          <span className="block">
            Welcome to the{" "}
            <span className="text-[#c084fc] inline-block align-middle">
              <FlipWords words={words} />
            </span>
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl font-sans text-gray-300 max-w-2xl mx-auto">
          Unlock the magic of words. Find your voice. Share your story.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          {/* ✅ Explore Courses Button */}
          <a
            href="#courses"
            className="px-6 py-3 text-sm sm:text-base rounded-md bg-[#c084fc] text-white hover:bg-[#a855f7] transition duration-300"
          >
            Explore Courses
          </a>

          {/* ✅ Contact Us button with Next.js Link */}
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
