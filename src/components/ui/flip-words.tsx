"use client";

import React, { useEffect, useState } from "react";

interface FlipWordsProps {
  words: string[];
  interval?: number;
}

const FlipWords: React.FC<FlipWordsProps> = ({ words, interval = 2000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className="relative inline-block w-[9ch] h-[1em] align-baseline leading-none text-inherit font-inherit text-current"
      style={{
        fontSize: "inherit",
        fontFamily: "inherit",
        display: "inline-block",
        textAlign: "center",
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className={`absolute left-0 top-0 w-full transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionTimingFunction: "ease-in-out",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export default FlipWords;