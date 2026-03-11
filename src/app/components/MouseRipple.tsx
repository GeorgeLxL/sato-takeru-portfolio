import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function MouseRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('Mouse move detected at', e.clientX, e.clientY);
    const newRipple: Ripple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setRipples((prev) => [...prev, newRipple]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples((prev) =>
        prev.filter((ripple) => Date.now() - ripple.id < 1000)
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 pointer-events-none z-0"
    >
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full border-2 border-purple-400/30"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}