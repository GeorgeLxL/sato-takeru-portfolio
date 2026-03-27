import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { projects } from "../utils/projects";

export default function Works() {
  const { t } = useTranslation();

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
          Portfolio
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("Works")}
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * index, duration: 0.6 }}
              className="group bg-white/5 rounded-2xl border border-white/10 hover:border-green-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,197,94,0.2)] transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
                  src={`./assets/images/works/${index + 1}/1.jpg`}
                  alt={item.title}
                />
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                  src={`./assets/images/works/${index + 1}/2.jpg`}
                  alt={item.title}
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-1">{item.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition-colors duration-200"
                >
                  <ExternalLink size={14} />
                  Visit site
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
