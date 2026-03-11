import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export default function CursorTail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prev) => [
        ...prev.slice(-15),
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, idx) => (
        <motion.div
          key={point.id + idx}
          className="absolute rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            left: point.x,
            top: point.y,
            width: 8,
            height: 8,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
