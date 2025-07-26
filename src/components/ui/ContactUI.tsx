"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactUI() {
  return (
    <section className="relative min-h-screen flex justify-center items-center p-6 
                        bg-[url('/images/minimal-dots.svg')] bg-repeat bg-fixed bg-[#0f172a]">
      
      {/* ✅ Soft Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* ✅ Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl 
                   bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl 
                   p-10 border border-white/20 hover:scale-[1.02] transition-transform duration-300
                   hover:shadow-purple-500/30"
      >
        {/* ✅ Heading */}
        <h1 className="text-4xl font-bold text-center mb-4 text-[#c084fc] drop-shadow-md">
          Contact <span className="text-[#f472b6]">Us</span>
        </h1>

        {/* ✅ Subheading */}
        <p className="text-center text-gray-300 mb-8 leading-relaxed">
          Got a question? Want to collaborate? <br />
          We’re <span className="text-[#a855f7] font-semibold">just one message away</span>.
        </p>

        {/* ✅ Form */}
        <form className="flex flex-col gap-5">
          {/* ✅ Message Textarea */}
          <motion.textarea
            whileFocus={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(192,132,252,0.4)" }}
            placeholder="Write your message here..."
            className="w-full h-40 p-4 rounded-xl border border-gray-300/30 
                       focus:outline-none bg-white/10 text-white placeholder-gray-300
                       transition-all duration-300 resize-none"
          />

          {/* ✅ Submit Button with Shine Effect */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px rgba(168,85,247,0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="relative w-full py-3 rounded-xl 
                       bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#f472b6]
                       text-white font-semibold overflow-hidden group shadow-lg"
          >
            <span className="relative z-10">✨ Send Message ✨</span>

            {/* ✅ Hover Shine Animation */}
            <span className="absolute inset-0 w-full h-full 
                           bg-gradient-to-r from-transparent via-white/30 to-transparent 
                           translate-x-[-100%] group-hover:translate-x-[100%] 
                           transition duration-700"></span>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
