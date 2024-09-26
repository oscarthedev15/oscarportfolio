"use client"; // Add this line at the top

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FallingImages from "./components/Fallingimages"; // Adjust the path as necessary
import AnimatedItems from "./components/AnimatedItems"; // New component

export default function Home() {
  const [showAnimatedItems, setShowAnimatedItems] = useState(false);

  const handleClick = () => {
    setShowAnimatedItems(true);
  };

  const handleReset = () => {
    setShowAnimatedItems(false);
  };

  return (
    <div className="min-h-screen bg-custom-bg flex flex-col items-center justify-center relative z-10 overflow-hidden p-10">
      <AnimatePresence>
        {showAnimatedItems ? (
          <>
            <AnimatedItems />
            <img
              src="/images/prism.gif"
              alt="Prism"
              className="absolute top-4 left-4 w-16 h-16 z-30 cursor-pointer"
              onClick={handleReset}
            />
          </>
        ) : (
          <>
            <FallingImages />
            <div className="p-10">
              <img
                src="/images/prism.gif"
                alt="Prism"
                className="absolute inset-0 m-auto w-1/2 md:w-1/4 z-20 p-35 transition-all duration-300"
                onClick={handleClick}
              />
            </div>
            <img
              src="/images/wordart.png"
              alt="WordArt"
              className="w-full md:w-1/4 mt-4 md:mt-8 relative z-20 transition-all duration-300 hover:shadow-wordart-hover p-10"
              onClick={handleClick}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
