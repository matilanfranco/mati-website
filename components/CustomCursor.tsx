"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      {/* Punto central */}
      <div className="fixed pointer-events-none z-[9999] transition-transform duration-75" style={{ left: pos.x - 4, top: pos.y - 4 }}>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#EF9F27" }} />
      </div>
      {/* Círculo exterior */}
      <div className="fixed pointer-events-none z-[9998] transition-all duration-200" style={{ left: pos.x - (isHovering ? 24 : 16), top: pos.y - (isHovering ? 24 : 16) }}>
        <div className="rounded-full border transition-all duration-200" style={{ width: isHovering ? 48 : 32, height: isHovering ? 48 : 32, borderColor: "#BA7517", opacity: isHovering ? 1 : 0.4 }} />
      </div>
    </>
  );
}