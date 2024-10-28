"use client"; // Add this line at the top
import Head from "next/head"; // Import Head from next/head
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FallingImages from "./components/Fallingimages"; // Adjust the path as necessary
import AnimatedItems from "./components/AnimatedItems"; // New component
import AnimatedCursor from "./components/AnimatedCursor"; // New component

export default function Home() {
  const [showAnimatedItems, setShowAnimatedItems] = useState(false);

  const handleClick = () => {
    setShowAnimatedItems(true);
  };

  const handleReset = () => {
    setShowAnimatedItems(false);
  };

  return (
    <div className="min-h-[100dvh] bg-custom-bg flex flex-col items-center justify-center relative z-10 overflow-hidden p-10">
      <Head>
        <link rel="icon" href="/images/wordart.png" />{" "}
        {/* Add the favicon link */}
      </Head>
      <AnimatedCursor />
      <AnimatePresence>
        {showAnimatedItems ? (
          <>
            <div
              className="absolute top-4 left-4 flex items-center border-2 border-gray-300 p-2 rounded-lg bg-white z-30 cursor-pointer"
              onClick={handleReset}
            >
              <img
                src="/images/prism.gif"
                alt="Prism"
                className="w-8 h-8 mr-2" // Smaller size for the prism image
              />
              <span className="mr-2">Back</span>
            </div>
            <div className="mt-16">
              {" "}
              {/* Add margin to push AnimatedItems down */}
              <AnimatedItems />
            </div>
          </>
        ) : (
          <>
            <FallingImages />
            <div className="relative flex items-center justify-center w-full h-full">
              <img
                src="/images/prism.gif"
                alt="Prism"
                className="absolute w-1/2 md:w-1/4 z-10 transition-all duration-300"
                onClick={handleClick}
              />
              <img
                src="/images/wordart.png"
                alt="WordArt"
                className="absolute w-3/4 md:w-1/4 z-20 transition-all duration-300 hover:shadow-wordart-hover"
                onClick={handleClick}
              />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
