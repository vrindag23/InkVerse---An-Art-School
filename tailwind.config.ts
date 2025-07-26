import type { Config } from "tailwindcss";
// import { addVariablesForColors } from "@utils/addVariablesForColors"; // if you're using it
// import { addSvgPatterns } from "@utils/addSvgPatterns"; // optional custom plugin

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  
  ],
  theme: {
    extend: {
      colors: {
        background: "#1e1e2e",       // Dark Charcoal Indigo
        text: "#f5f5f5",             // Ivory White
        primary: "#c084fc",          // Soft Lavender Purple
        hover: "#a855f7",            // Violet
        title: "#f472b6",            // Rose Pink
      },
      fontFamily: {
        serif: ['var(--font-merriweather)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
      },
      animation: {
       'pulse-slow': 'pulse 4s ease-in-out infinite',
      }
    },
  },
  plugins: [
    // Uncomment below if you're using these
    // addVariablesForColors,
    // addSvgPatterns,
  ],
};
export default config;  
