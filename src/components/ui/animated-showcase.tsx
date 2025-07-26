"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export type ShowcaseItem = {
  title: string;
  description: string;
  image: string;
};

export default function AnimatedShowcase({
  items,
  interval = 2000, // ✅ auto-slide 2 sec
}: {
  items: ShowcaseItem[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* ✅ LEFT SIDE IMAGE */}
      <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
        <AnimatePresence>
          <motion.img
            key={items[active].image}
            src={items[active].image}
            alt={items[active].title}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* ✅ RIGHT SIDE CONTENT */}
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={items[active].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-[#f472b6] mb-4">
              {items[active].title}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {items[active].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
