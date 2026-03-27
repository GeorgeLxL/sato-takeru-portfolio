import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award } from "lucide-react";
import { useTranslation } from 'react-i18next';
import Modal from "../components/Modal";

export default function Certifications() {
  const { t } = useTranslation();
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const certifications = [
    {
      name: "Software Engineer",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/1cf5e9dd73a2",
      image: "./assets/images/certifications/1.png"
    },
    {
      name: "Node.js (Intermediate)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/c8fe2665747a",
      image: "./assets/images/certifications/2.png"
    },
    {
      name: "React (Basic)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/3e620c5baff8",
      image: "./assets/images/certifications/3.png"
    },
    {
      name: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/9739390ceeeb",
      image: "./assets/images/certifications/4.png"
    },
    {
      name: "Rest API (Intermediate)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/e81307f10d9f",
      image: "./assets/images/certifications/5.png"
    },
    {
      name: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/3083ab3629d9",
      image: "./assets/images/certifications/6.png"
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.p
          className="text-green-400 font-mono text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Credentials
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("certTitle")}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              onClick={() => setModalIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-white/5 rounded-2xl border border-white/10 hover:border-green-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,197,94,0.2)] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Badge placeholder area */}
              <div className="h-56 overflow-hidden bg-white/5 border-b border-white/10 flex flex-col items-center justify-center gap-3">
                <img src={cert.image} alt={cert.name} />
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="text-green-400" size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold text-white leading-snug">{cert.name}</h3>
                    </div>
                    <p className="text-green-400 text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <AnimatePresence>
        {modalIndex !== null && (
          <Modal
            certs={certifications}
            initialIndex={modalIndex}
            onClose={() => setModalIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
