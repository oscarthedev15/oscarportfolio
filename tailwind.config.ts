import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/images/bg2.gif')",
      },
      animation: {
        fall: "fall linear infinite",
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-5vh)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        "prism-hover": "0 4px 20px rgba(255, 0, 0, 0.5)", // Red shadow
        "wordart-hover": "0 4px 20px rgba(0, 0, 255, 0.5)", // Blue shadow
      },
      blur: {
        extra: "10px",
      },
      fontFamily: {
        mplus: ['"M PLUS Code Latin"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
