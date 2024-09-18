"use client"; // Add this line at the top

import React, { useState } from "react";
import FallingImages from "./components/Fallingimages"; // Adjust the path as necessary

export default function Home() {
  const [isPrismBlurred, setIsPrismBlurred] = useState(false);

  return (
    <div className="min-h-screen bg-custom-bg flex flex-col items-center justify-center relative z-10 overflow-hidden">
      <FallingImages />
      <div className="flex flex-col items-center justify-center">
        <img
          src="/images/prism.gif"
          alt="Prism"
          className={`absolute inset-0 m-auto w-1/2 md:w-1/4 z-20 p-35 transition-all duration-300 ${
            isPrismBlurred ? "blur-extra" : ""
          }`}
          onClick={() => setIsPrismBlurred(!isPrismBlurred)}
        />
      </div>
      <img
        src="/images/wordart.png"
        alt="WordArt"
        className="w-1/2 md:w-1/4 mt-4 md:mt-8 relative z-20 transition-all duration-300 hover:shadow-wordart-hover"
        onClick={() => setIsPrismBlurred(!isPrismBlurred)}
      />
    </div>
  );
}
