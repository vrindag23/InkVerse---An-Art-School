"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#1a1a2e] text-white pt-16 pb-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-[#f472b6] mb-3">
            Inkverse
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            A sanctuary for storytellers and poets to grow, express, and connect
            through the power of words.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5 font-serif text-[#c084fc]">
            Explore
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#courses" className="hover:text-[#f472b6] transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#why-choose-us" className="hover:text-[#f472b6] transition">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-[#f472b6] transition">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#f472b6] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social + Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5 font-serif text-[#c084fc]">
            Connect
          </h3>
          <div className="flex items-center gap-4 mb-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-[#f472b6] transition">
              <Instagram size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-[#f472b6] transition">
              <Facebook size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-[#f472b6] transition">
              <Twitter size={22} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-[#f472b6] transition">
              <Youtube size={22} />
            </a>
          </div>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <Mail size={16} /> contact@Inkverse.com
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} Inkverse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
