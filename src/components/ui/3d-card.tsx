"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-center group">
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event: React.MouseEvent) {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  }

  const rotateX = useTransform(mouseY, [0, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 300], [-15, 15]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`rounded-xl bg-background border border-border shadow-lg p-6 transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function CardItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`z-10 will-change-transform transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </div>
  );
}
