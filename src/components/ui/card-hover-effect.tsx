"use client";

import React from "react";

interface CardHoverEffectProps {
  title: string;
  description: string;
}

export function CardHoverEffect({ title, description }: CardHoverEffectProps) {
  return (
    <div className="relative group p-6 rounded-xl border border-gray-700 bg-[#0f172a] hover:border-[#c084fc] transition duration-300 overflow-hidden">
      {/* Title */}
      <h3 className="text-xl font-bold text-white group-hover:text-[#c084fc] transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-400 mt-2 leading-relaxed">
        {description}
      </p>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-[#c084fc] blur-xl transition duration-500"></div>
    </div>
  );
}
