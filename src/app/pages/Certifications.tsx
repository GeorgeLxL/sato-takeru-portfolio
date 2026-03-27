import { motion } from "motion/react";
import { Award } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Certifications() {
  const { t } = useTranslation();

  const certifications = [
    {
      name: "SAP Activate Project Manager",
      issuer: "SAP",
      year: "2021",
      link: "https://www.sap.com/certification"
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2020",
      link: "https://aws.amazon.com/certification"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2020",
      link: "https://cloud.google.com/certification"
    },
    {
      name: "Docker & Kubernetes Certified",
      issuer: "Docker Inc.",
      year: "2022",
      link: "https://www.docker.com/certification"
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
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-white/5 rounded-2xl border border-white/10 hover:border-green-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,197,94,0.2)] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Badge placeholder area */}
              <div className="h-56 bg-white/5 border-b border-white/10 flex flex-col items-center justify-center gap-3">
                <Award className="text-green-400" size={56} />
                <p className="text-gray-500 text-xs font-mono tracking-widest uppercase">Coming Soon</p>
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
                      <span className="text-[10px] font-mono text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full shrink-0">{cert.year}</span>
                    </div>
                    <p className="text-green-400 text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </div>
  );
}
