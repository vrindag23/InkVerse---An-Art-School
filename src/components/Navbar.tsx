"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* ✅ Logo */}
        <Link href="/" className="text-2xl font-bold text-[#c084fc]">
          InkVerse
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-[#c084fc] transition">
            Home
          </Link>
          <Link href="/courses" className="hover:text-[#c084fc] transition">
            Courses
          </Link>
          <Link href="/about" className="hover:text-[#c084fc] transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#c084fc] transition">
            Contact Us
          </Link>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu with Animation */}
      <div
        className={`md:hidden bg-[#0f172a]/95 text-center overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="block py-2 hover:text-[#c084fc] transition"
        >
          Home
        </Link>
        <Link
          href="/courses"
          onClick={() => setIsOpen(false)}
          className="block py-2 hover:text-[#c084fc] transition"
        >
          Courses
        </Link>
        <Link
          href="/about"
          onClick={() => setIsOpen(false)}
          className="block py-2 hover:text-[#c084fc] transition"
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="block py-2 hover:text-[#c084fc] transition"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
