"use client"; // Add this line

import React, { useEffect, useState } from "react";

const images = [
  "/falling-images/1.png",
  "/falling-images/2.png",
  "/falling-images/3.png",
  "/falling-images/4.png",
  "/falling-images/5.png",
  "/falling-images/6.png",
  "/falling-images/7.png",
];

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

const getRandomSize = () => {
  const minSize = 70; // Minimum size in pixels
  const maxSize = 160; // Maximum size in pixels
  return Math.random() * (maxSize - minSize) + minSize;
};

const FallingImages = () => {
  const [fallingImages, setFallingImages] = useState<
    { src: string; left: string; size: number }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFallingImages((prev) => [
        ...prev,
        {
          src: getRandomImage(),
          left: `${Math.random() * 100}%`,
          size: getRandomSize(),
        },
      ]);
    }, 1000); // Add a new image every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {fallingImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt="Falling"
          className="absolute animate-fall opacity-70"
          style={{
            left: image.left, // Ensure left is set once and remains constant
            height: `${image.size}px`, // Maintain aspect ratio
            animationDuration: "15s", // Set a consistent duration
          }}
        />
      ))}
    </div>
  );
};

export default FallingImages;
