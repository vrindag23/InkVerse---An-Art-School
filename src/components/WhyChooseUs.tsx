"use client";

import AnimatedShowcase, { ShowcaseItem } from "@/components/ui/animated-showcase";

const items: ShowcaseItem[] = [
  {
    title: "Expert-Led Courses",
    description:
      "Learn from award-winning authors, poets, and creative writing mentors who guide you step by step on your literary journey.",
    image: "/images/picture4.jpg",
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with practical exercises, peer reviews, and workshops designed to unlock your full creative potential.",
    image: "/images/picture5.webp",
  },
  {
    title: "Supportive Community",
    description:
      "Join a thriving community of writers, collaborate on projects, and gain valuable feedback to improve your craft.",
    image: "/images/picture6.jpg",
  },
  {
    title: "Flexible Learning Options",
    description:
      "Choose self-paced courses or live sessions to fit your schedule while still getting expert guidance.",
    image: "/images/picture7.webp",
  },
  {
    title: "Portfolio Development",
    description:
      "Build a strong writing portfolio with our structured modules and showcase your talent to the world.",
    image: "/images/picture8.jpg",
  },
  {
    title: "Career Opportunities",
    description:
      "Get insights into publishing, freelancing, and networking to turn your passion for writing into a profession.",
    image: "/images/picture9.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* ✅ Section Heading */}
        <h2 className="text-4xl font-bold text-center text-[#f472b6] mb-12">
          Why Choose Us?
        </h2>

        {/* ✅ Animated Showcase */}
        <AnimatedShowcase items={items} interval={2000} />
      </div>
    </section>
  );
}
