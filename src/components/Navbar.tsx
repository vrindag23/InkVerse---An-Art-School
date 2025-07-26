"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* ✅ Logo */}
        <Link href="/" className="text-2xl font-bold text-[#c084fc] hover:text-[#a855f7] transition">
          InkVerse
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link href="/" className="hover:text-[#c084fc] transition">Home</Link>
          <Link href="/courses" className="hover:text-[#c084fc] transition">Courses</Link>
          <Link href="/about" className="hover:text-[#c084fc] transition">About</Link>
          <Link href="/contact" className="hover:text-[#c084fc] transition">Contact Us</Link>
        </div>

        {/* ✅ Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] text-center py-4 space-y-4 text-white">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
