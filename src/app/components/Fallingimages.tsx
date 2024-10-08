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
  "/falling-images/8.png",
  "/falling-images/9.png",
  "/falling-images/10.png",
  "/falling-images/11.png",
  "/falling-images/12.png",
  "/falling-images/13.png",
  "/falling-images/14.png",
  "/falling-images/15.png",
  "/falling-images/16.png",
  "/falling-images/17.png",
  "/falling-images/18.png",
  "/falling-images/19.png",
  "/falling-images/20.png",
];

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

const getRandomSize = () => {
  const minSize = window.innerWidth < 768 ? 50 : 150; // Smaller size for mobile
  const maxSize = window.innerWidth < 768 ? 100 : 300; // Smaller size for mobile
  return Math.random() * (maxSize - minSize) + minSize;
};

const getRandomDuration = () => {
  const minDuration = 20; // Minimum duration in seconds
  const maxDuration = 40; // Maximum duration in seconds
  return Math.random() * (maxDuration - minDuration) + minDuration;
};

const FallingImages = () => {
  const [fallingImages, setFallingImages] = useState<
    { src: string; left: string; size: number; duration: number; top: number }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFallingImages((prev) => [
        ...prev,
        {
          src: getRandomImage(),
          left: `${Math.random() * 100}%`,
          size: getRandomSize(),
          duration: getRandomDuration(),
          top: 0, // Start at the top
        },
      ]);
    }, 500); // Add a new image every second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      setFallingImages((prev) =>
        prev.map((image) => ({
          ...image,
          top: image.top + 1, // Move down by 1 unit
        }))
      );
    };

    const positionInterval = setInterval(updatePositions, 50); // Update positions every 50ms

    return () => clearInterval(positionInterval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {fallingImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt="Falling"
          className="absolute animate-fall"
          style={{
            left: image.left,
            height: `${image.size}px`,
            animationDuration: `${image.duration}s`,
            top: `${image.top}%`,
            opacity: 1 - image.top / 100, // Decrease opacity as it moves down
          }}
        />
      ))}
    </div>
  );
};

export default FallingImages;
