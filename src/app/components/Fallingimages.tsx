"use client";

import React, { useEffect, useState } from "react";

const images = Array.from({ length: 20 }, (_, i) => `/falling-images/${i + 1}.png`);

type Falling = { id: number; src: string; left: number; size: number; duration: number };

let nextId = 0;

const FallingImages = () => {
  const [falling, setFalling] = useState<Falling[]>([]);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    const interval = setInterval(() => {
      setFalling((prev) => [
        ...prev,
        {
          id: nextId++,
          src: images[Math.floor(Math.random() * images.length)],
          left: Math.random() * 100,
          size: mobile ? 50 + Math.random() * 50 : 150 + Math.random() * 150,
          duration: 20 + Math.random() * 20,
        },
      ]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Each image animates once via CSS and removes itself when done, so the list stays small.
  const remove = (id: number) => setFalling((prev) => prev.filter((f) => f.id !== id));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {falling.map((f) => (
        <img
          key={f.id}
          src={f.src}
          alt=""
          className="absolute top-0 animate-fall"
          style={{ left: `${f.left}%`, height: f.size, animationDuration: `${f.duration}s` }}
          onAnimationEnd={() => remove(f.id)}
        />
      ))}
    </div>
  );
};

export default FallingImages;
