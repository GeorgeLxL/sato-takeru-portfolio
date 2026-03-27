import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t("experience1Title"),
      company: t("experience1Company"),
      period: t("experience1Period"),
      description: t("experience1Description"),
      achievements: [t("experience1Achieve1"), t("experience1Achieve2"), t("experience1Achieve3"), t("experience1Achieve4")],
    },
    {
      title: t("experience2Title"),
      company: t("experience2Company"),
      period: t("experience2Period"),
      description: t("experience2Description"),
      achievements: [t("experience2Achieve1"), t("experience2Achieve2"), t("experience2Achieve3"), t("experience2Achieve4")],
    },
    {
      title: t("experience3Title"),
      company: t("experience3Company"),
      period: t("experience3Period"),
      description: t("experience3Description"),
      achievements: [t("experience3Achieve1"), t("experience3Achieve2"), t("experience3Achieve3"), t("experience3Achieve4")],
    },
    {
      title: t("experience4Title"),
      company: t("experience4Company"),
      period: t("experience4Period"),
      description: t("experience4Description"),
      achievements: [t("experience4Achieve1"), t("experience4Achieve2"), t("experience4Achieve3")],
    },
    {
      title: t("experience5Title"),
      company: t("experience5Company"),
      period: t("experience5Period"),
      description: t("experience5Description"),
      achievements: [t("experience5Achieve1"), t("experience5Achieve2"), t("experience5Achieve3")],
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">

        <motion.p
          className="text-green-400 font-mono text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Career
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("Experience")}
        </motion.h1>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-green-500/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-green-500 border-2 border-green-300 shadow-[0_0_8px_2px_rgba(34,197,94,0.5)]" />

                {/* Period badge */}
                <span className="inline-block text-xs font-mono text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full mb-3">
                  {exp.period}
                </span>

                {/* Content */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,197,94,0.2)] transition-all duration-300">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-green-400 font-medium text-sm mb-3">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-green-400 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
