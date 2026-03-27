import { useEffect, useRef } from "react";

const SNIPPETS = [
  "const x = await fetch(url);",
  "if (err != nil) { return }",
  "SELECT * FROM users;",
  "npm install",
  "git commit -m 'fix'",
  "docker build -t app .",
  "export default function()",
  "useState<string>('')",
  "flex items-center gap-4",
  "border-radius: 9999px;",
  "kubectl apply -f k8s/",
  "terraform apply",
  "console.log(data)",
  "return res.status(200).json()",
  "import { motion } from 'motion/react'",
  "z-index: 50;",
  "async function main() {}",
  "pip install -r requirements.txt",
];

interface Snippet {
  text: string;
  x: number;
  y: number;
  vy: number;
  opacity: number;
  fontSize: number;
}

export default function CodeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const snippetsRef = useRef<Snippet[]>([]);
  const animIdRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    snippetsRef.current = Array.from({ length: 18 }, (_, i) => ({
      text: SNIPPETS[i % SNIPPETS.length],
      x: Math.random() * (w - 200),
      y: Math.random() * h,
      vy: 0.2 + Math.random() * 0.3,
      opacity: 0.04 + Math.random() * 0.08,
      fontSize: 11 + Math.floor(Math.random() * 4),
    }));

    const els = snippetsRef.current.map((s) => {
      const el = document.createElement("span");
      el.textContent = s.text;
      el.style.cssText = `position:absolute;font-family:monospace;white-space:nowrap;color:rgb(74,222,128);pointer-events:none;`;
      container.appendChild(el);
      return el;
    });

    const animate = () => {
      const height = window.innerHeight;
      snippetsRef.current.forEach((s, i) => {
        s.y += s.vy;
        if (s.y > height + 30) {
          s.y = -30;
          s.x = Math.random() * (window.innerWidth - 200);
          s.text = SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
          els[i].textContent = s.text;
        }
        els[i].style.transform = `translate(${s.x}px, ${s.y}px)`;
        els[i].style.opacity = String(s.opacity);
        els[i].style.fontSize = `${s.fontSize}px`;
      });
      animIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animIdRef.current);
      els.forEach((el) => el.remove());
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" />;
}
