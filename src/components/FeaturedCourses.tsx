"use client";

import React from "react";
import { BookOpen, Feather, PenTool } from "lucide-react";

const courses = [
  {
    icon: <Feather size={32} />,
    title: "Creative Writing Mastery",
    description:
      "Master storytelling techniques, build characters, and write unforgettable narratives through structured guidance and practice.",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Poetry and Expression",
    description:
      "Discover different poetic forms, refine your unique voice, and transform raw emotion into lyrical elegance.",
  },
  {
    icon: <PenTool size={32} />,
    title: "Journaling & Mindful Writing",
    description:
      "Build a writing habit that heals — use prompts, reflections, and mindful exercises to gain clarity and insight.",
  },
];

const FeaturedCourses = () => {
  return (
    <section id="courses" className="section-bg py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-title mb-6">
          Featured Courses
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12 text-muted">
          Carefully designed programs to help you unlock your creative potential.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition duration-300 hover:border-[#c084fc] hover:shadow-[0_0_15px_#c084fc80]"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="text-primary bg-white/10 rounded-full p-4 transition-transform duration-500 group-hover:rotate-[360deg]">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold font-serif">{course.title}</h3>
                <p className="text-sm text-muted max-w-xs">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
