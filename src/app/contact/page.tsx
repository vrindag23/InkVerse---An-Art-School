"use client";

import React from "react";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen flex justify-center items-center bg-[#0f172a] text-white px-4">
      
      {/* ✅ Subtle dotted background */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* ✅ Contact Card */}
      <div className="relative w-full max-w-xl rounded-2xl bg-[#1e293b]/90 shadow-xl backdrop-blur-md border border-white/10 p-10 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20">
        
        {/* ✅ Heading */}
        <h1 className="text-4xl font-bold text-[#c084fc] mb-4">
          Contact Us
        </h1>
        <p className="text-gray-300 mb-8">
          Have questions or ideas? Drop your message below and we’ll get back to you.
        </p>

        {/* ✅ Form */}
        <form className="flex flex-col gap-5">
          <textarea
            placeholder="Write your message here..."
            className="w-full h-40 p-4 rounded-xl bg-[#0f172a]/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold shadow-md hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
