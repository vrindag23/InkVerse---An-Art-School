"use client";

import React from "react";
import { motion } from "framer-motion";
import HorizontalMilestones from "@/components/ui/HorizontalMilestones";


export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-[#0f172a] via-[#1e1e2e] to-[#0f172a] text-white">
      
      {/* ✅ Hero Section with Expanded Content */}
      <section className="relative py-20 px-6 text-center">
        <motion.h1
          className="text-5xl font-bold text-[#f472b6]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Our Creative Writing & Poetry School
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We’re more than just a school—we’re a <span className="text-[#c084fc] font-semibold">creative family</span> 
          nurturing poets, writers, and storytellers across the globe.  
          Our journey started with a simple vision: <i>to give every voice the space it deserves</i>.  
          Over the years, we’ve transformed hesitant beginners into confident authors,  
          helping them embrace the beauty of language, emotion, and expression.
        </motion.p>

        <motion.p
          className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Whether it’s the soft whisper of a poem, a bold new story idea, or the dream of publishing a book,  
          we guide our students at every step—fostering creativity, building discipline, and nurturing passion.  
          This isn’t just a learning space; it’s a place where **dreamers become creators.**
        </motion.p>

        {/* ✅ Quick Stats */}
        <div className="mt-24 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { title: "500+ Students", desc: "who transformed their writing journey" },
            { title: "50+ Workshops", desc: "covering poetry, storytelling & publishing" },
            { title: "10+ Countries", desc: "students from across the globe" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-gradient-to-br from-[#1f2937] to-[#111827] shadow-lg hover:shadow-[#a855f7]/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-[#c084fc]">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Founder Section */}
      <section className="relative py-20 px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-[#c084fc]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Founder
        </motion.h2>

        <motion.div
          className="mt-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-[#1a1f2e] to-[#10131b] p-8 rounded-2xl shadow-xl hover:shadow-purple-500/20 transition-all duration-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* ✅ Founder Image */}
          <img
            src="/images/person1.jpeg"
            alt="Founder"
            className="w-40 h-40 rounded-full object-cover border-4 border-[#c084fc] shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* ✅ Founder Content */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-[#f472b6]">Anisha Agrawal</h3>
            <p className="text-gray-300 mt-2 italic">
              Author, Poet & Visionary Mentor
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Anisha founded this school with the belief that **every individual has a story worth sharing**.  
              With over a decade of experience in poetry and literature,  
              he has mentored hundreds of budding writers, guiding them to find their unique voice.  
              Under his leadership, our school became a global community that celebrates creativity,  
              diversity, and the timeless beauty of words.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ✅ Horizontal Milestones */}
      <HorizontalMilestones />

      {/* ✅ Why We Exist */}
      <section className="py-20 text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-[#c084fc]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Why We Exist
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto mt-6 text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We believe writing isn’t just an art—it’s a way of **healing, expressing, and connecting**.  
          Our workshops, retreats, and mentoring programs aren’t just about learning;  
          they’re about rediscovering yourself, gaining confidence, and building a lifelong creative journey.
        </motion.p>
      </section>
    </main>
  );
}
