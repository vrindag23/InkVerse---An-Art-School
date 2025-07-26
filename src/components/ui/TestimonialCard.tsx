"use client";

import React from "react";

export type TestimonialType = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export default function TestimonialCard({ testimonial }: { testimonial: TestimonialType }) {
  return (
    <div className="w-80 bg-[#1e293b] p-6 rounded-2xl shadow-lg flex-shrink-0 hover:shadow-purple-500/30 transition">
      {/* ✅ Top Section with Image & Name */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-[#c084fc]"
        />
        <div>
          <h4 className="text-lg font-semibold text-[#c084fc]">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>

      {/* ✅ Quote Section */}
      <p className="mt-4 text-gray-300 italic">“{testimonial.quote}”</p>
    </div>
  );
}
