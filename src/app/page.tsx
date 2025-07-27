// src/app/page.tsx
import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#1e1e2e] text-[#f5f5f5] overflow-x-hidden">
      <div className="mx-auto w-full">
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <Testimonials />
        <UpcomingWebinars />
      </div>
    </main>
  );
}
