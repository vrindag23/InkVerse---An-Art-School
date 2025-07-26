"use client";
import React from "react";

const Instructors = () => {
  const mentors = [
    {
      name: "Aarav Mehta",
      bio: "Published poet & TEDx speaker, known for lyrical imagery.",
    },
    {
      name: "Nisha Rao",
      bio: "Creative writing coach, specialized in memoir and short fiction.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-background text-text">
      <h2 className="text-4xl font-serif font-bold text-title mb-10 text-center">Meet Our Instructors</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {mentors.map((mentor, i) => (
          <div key={i} className="bg-black/20 border border-hover/40 rounded-lg p-6 shadow-md">
            <h3 className="text-2xl text-primary font-bold mb-2">{mentor.name}</h3>
            <p className="text-text">{mentor.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
