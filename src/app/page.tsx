"use client";
import React, { useState } from "react";
import FallingImages from "./components/Fallingimages";
import AnimatedItems from "./components/AnimatedItems";
import AnimatedCursor from "./components/AnimatedCursor";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <main className="min-h-[100dvh] bg-custom-bg bg-cover bg-center bg-fixed relative">
      <AnimatedCursor />
      {showProjects ? (
        <div className="relative z-10 px-4 py-6 md:px-10 md:py-10">
          <header className="max-w-5xl mx-auto flex items-center justify-between mb-8">
            <button
              type="button"
              onClick={() => setShowProjects(false)}
              className="glass rounded-full pl-2 pr-4 py-1.5 flex items-center gap-2 font-medium text-neutral-900 hover:-translate-y-0.5 transition-transform"
            >
              <img src="/images/prism.gif" alt="" className="w-8 h-8" />
              Back
            </button>
            <img src="/images/wordart.png" alt="oscar the dev" className="h-10 md:h-12" />
          </header>
          <AnimatedItems />
        </div>
      ) : (
        <>
          <FallingImages />
          <button
            type="button"
            onClick={() => setShowProjects(true)}
            aria-label="Enter portfolio"
            className="group absolute inset-0 z-10 flex items-center justify-center"
          >
            <img
              src="/images/prism.gif"
              alt=""
              className="absolute w-1/2 md:w-1/4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
            />
            <img
              src="/images/wordart.png"
              alt="oscar the dev"
              className="absolute w-3/4 md:w-1/4 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="glass absolute bottom-10 rounded-full px-5 py-2 text-sm font-medium text-neutral-900 animate-pulse">
              click to enter
            </span>
          </button>
        </>
      )}
    </main>
  );
}
