"use client";

import React from "react";

type Webinar = {
  title: string;
  date: string;
  speaker: string;
  image: string;
};

const webinars: Webinar[] = [
  {
    title: "Unlocking Creative Writing Secrets",
    date: "July 25, 2025",
    speaker: "Anupama Joshi",
    image: "/images/creativeWritingHome.jpeg",
  },
  {
    title: "Modern Poetry Techniques",
    date: "August 2, 2025",
    speaker: "Aman Malhotra",
    image: "/images/poetry.jpeg",
  },
  {
    title: "How to Publish Your First Book",
    date: "August 10, 2025",
    speaker: "Laxmi Shrivastva",
    image: "/images/first-book.jpeg",
  },
];

export default function UpcomingWebinars() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* ✅ Section Heading */}
        <h2 className="text-4xl font-bold text-center text-[#f472b6] mb-12">
          Upcoming Webinars
        </h2>

        {/* ✅ Webinars Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {webinars.map((webinar, index) => (
            <div
              key={index}
              className="group bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition duration-300"
            >
              {/* ✅ Webinar Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* ✅ Webinar Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#c084fc] mb-3 group-hover:text-[#a855f7] transition">
                  {webinar.title}
                </h3>
                <p className="text-gray-400 mb-2">
                  📅 <span className="text-white">{webinar.date}</span>
                </p>
                <p className="text-gray-400">
                  🎙️ Speaker: <span className="text-white">{webinar.speaker}</span>
                </p>

                {/* ✅ CTA Button */}
                <button className="mt-5 w-full rounded-lg bg-[#c084fc] hover:bg-[#a855f7] text-white py-2 transition">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Bottom spacing so next section doesn't overlap */}
        <div className="mt-24"></div>
      </div>
    </section>
  );
}
