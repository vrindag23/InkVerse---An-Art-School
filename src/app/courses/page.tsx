"use client";

import React from "react";
import CourseCard, { CourseType } from "@/components/ui/CourseCard";

const courses: CourseType[] = [
  {
    title: "Creative Writing Mastery",
    description:
      "Unlock the secrets of storytelling and craft compelling narratives with expert guidance.",
    image: "/images/creativewriting.jpeg",
  },
  {
    title: "Modern Poetry Techniques",
    description:
      "Explore free verse, haiku, and contemporary poetic styles with hands-on workshops.",
    image: "/images/poetry.jpeg",
  },
  {
    title: "Fiction Writing for Beginners",
    description:
      "Learn how to create memorable characters, engaging plots, and immersive worlds.",
    image: "/images/fiction.jpeg",
  },
  {
    title: "Advanced Storytelling",
    description:
      "Take your storytelling skills to the next level with narrative structures and pacing.",
    image: "/images/advancestorytelling.jpeg",
  },
  {
    title: "Publishing & Self-Marketing",
    description:
      "Understand the publishing world and learn how to promote your work effectively.",
    image: "/images/selfmarketing.jpeg",
  },
  {
    title: "Spoken Word & Performance Poetry",
    description:
      "Master the art of performing your poems with confidence and emotional impact.",
    image: "/images/poetryPerformance.jpeg",
  },
  {
    title: "Screenwriting for Beginners",
    description:
      "Turn your ideas into compelling screenwriting ideas for movies and theatre.",
    image: "/images/screenwriting.jpeg",
  },
  {
    title: "Children’s Storytelling Workshop",
    description:
      "Learn how to write engaging and educational stories for young readers.",
    image: "/images/storytelling.jpeg",
  },
];

export default function CoursesPage() {
  return (
    <section className="relative py-28 px-6 sm:px-12 lg:px-20 text-white overflow-hidden">

      {/* ✅ Background from Aceternity UI */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1325] via-[#141a2e] to-[#0f172a] opacity-95"></div>
      <div className="absolute inset-0">
        {/* 🔥 Aceternity UI style background blur balls */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-700/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ✅ Heading */}
        <div className="text-center mb-24">
          <h1 className="text-5xl font-bold text-[#f472b6]">
            Explore Our Courses
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Carefully designed courses to ignite your passion for writing, poetry, and storytelling.
          </p>
        </div>

        {/* ✅ 2-column Grid with DOUBLE vertical gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-36">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
