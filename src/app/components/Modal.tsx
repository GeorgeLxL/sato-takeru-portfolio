import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

type CertItem = { name: string; issuer: string; link: string; image: string };

type Props = {
  certs: CertItem[];
  initialIndex: number;
  onClose: () => void;
};

export default function Modal({ certs, initialIndex, onClose }: Props) {
  const [active, setActive] = useState(initialIndex);
  const [hovered, setHovered] = useState(false);
  const [galleryHovered, setGalleryHovered] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    galleryRef.current?.scrollBy({ left: dir === "left" ? -150 : 150, behavior: "smooth" });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const cert = certs[active];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="relative bg-[#0d1117] border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        {/* Close */}
        <button
          className="absolute top-3 right-3 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors cursor-pointer"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Main image */}
        <div
          className="relative bg-white/5"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={cert.image}
            alt={cert.name}
            className="w-full"
          />
          <div className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-all duration-300 pointer-events-none ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`pointer-events-auto flex items-center gap-2 bg-green-500/30 border border-green-400 text-green-300 font-semibold text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                hovered ? "scale-100" : "scale-90"
              }`}
            >
              <ExternalLink size={14} /> View Certificate
            </a>
          </div>
        </div>

        {/* Thumbnail gallery */}
        <div
          className="relative"
          onMouseEnter={() => setGalleryHovered(true)}
          onMouseLeave={() => setGalleryHovered(false)}
        >
          {galleryHovered && (
            <>
              <button
                onClick={() => scroll("left")}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
          <div ref={galleryRef} className="flex gap-3 overflow-x-auto px-5 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {certs.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  i === active ? "border-green-500" : "border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
