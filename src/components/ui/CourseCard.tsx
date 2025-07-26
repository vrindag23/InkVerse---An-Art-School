"use client";

import React, { useState } from "react";

export type CourseType = {
  title: string;
  description: string;
  image: string;
};

export default function CourseCard({ course }: { course: CourseType }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    const rotateX = ((y - card.height / 2) / card.height) * 12;
    const rotateY = ((x - card.width / 2) / card.width) * 12;

    const shineX = (x / card.width) * 100;
    const shineY = (y / card.height) * 100;

    setTilt({ x: rotateX, y: rotateY });
    setShine({ x: shineX, y: shineY });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className="relative group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1)`,
        transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* ✅ Floating Abstract Background Shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl animate-floating" />
      <div className="absolute -bottom-12 -right-10 w-52 h-52 rounded-full bg-pink-400/20 blur-3xl animate-floating-delayed" />

      {/* ✅ Card Container */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-xl 
          bg-white/5 backdrop-blur-xl border border-white/10
          transition-all duration-500 
          group-hover:scale-[1.06] group-hover:shadow-purple-500/60 group-hover:-translate-y-2"
      >
        {/* ✅ Mouse Follow Shine */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition duration-500"
          style={{
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.4), transparent 70%)`,
          }}
        />

        {/* ✅ Animated shimmer stripes */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-30 animate-[shimmer_2s_infinite]" />

        {/* ✅ Course Image */}
        <div className="h-64 w-full overflow-hidden relative">
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* ✅ Course Info */}
        <div className="p-8 relative z-10">
          <h3 className="text-2xl font-bold text-[#c084fc] group-hover:text-[#a855f7] transition-all">
            {course.title}
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            {course.description}
          </p>

          {/* ✅ CTA Button */}
          <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#c084fc] to-[#a855f7] hover:shadow-xl hover:shadow-purple-500/40 text-white py-3 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* ✅ Soft Shadow Reflection */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-10 rounded-full bg-purple-500/30 blur-3xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
    </div>
  );
}
