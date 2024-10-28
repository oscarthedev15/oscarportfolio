import React, { useEffect, useRef } from "react";

const AnimatedCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed text-3xl pointer-events-none z-[99999999] transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: "0px", top: "0px" }}
    >
      👊
    </div>
  );
};

export default AnimatedCursor;
