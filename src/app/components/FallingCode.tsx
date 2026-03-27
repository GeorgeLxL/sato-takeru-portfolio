import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>{}[]()=>/\\|!@#$%^&*";

export default function FallingCode() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const FONT_SIZE = 14;
    let cols: number[] = [];
    let animId: number;
    let lastTime = 0;
    const INTERVAL = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Array(Math.floor(canvas.width / FONT_SIZE)).fill(1);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      animId = requestAnimationFrame(draw);
      if (time - lastTime < INTERVAL) return;
      lastTime = time;
      ctx.fillStyle = "rgba(15,15,15,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px monospace`;

      cols.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;

        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.fillText(char, x, y * FONT_SIZE);

        // Trail
        ctx.fillStyle = "rgba(74,222,128,1)";
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, (y - 1) * FONT_SIZE);

        if (y * FONT_SIZE > canvas.height && Math.random() > 0.975) cols[i] = 0;
        else cols[i]++;
      });

      animId = requestAnimationFrame(draw);
    };

    draw(0);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.08 }} />;
}
