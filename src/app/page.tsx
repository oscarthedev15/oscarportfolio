import React from "react";
import FallingImages from "./components/Fallingimages"; // Adjust the path as necessary

export default function Home() {
  return (
    <div className="min-h-screen bg-custom-bg flex items-center justify-center relative z-10">
      <FallingImages />
      <img
        src="/images/prism.gif"
        alt="Prism"
        className="absolute inset-0 m-auto w-1/2 md:w-1/4 z-20"
      />
      <img
        src="/images/wordart.png"
        alt="WordArt"
        className="w-1/2 md:w-1/4 mt-4 md:mt-8 relative z-20"
      />
    </div>
  );
}
