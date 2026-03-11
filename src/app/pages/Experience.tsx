import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation()
  const experiences = [
    {
      title: t("experience1Title"),
      company: t("experience1Company"),
      period: t("experience1Period"),
      description: t("experience1Description"),
      achievements: [
        t("experience1Achieve1"),
        t("experience1Achieve2"),
        t("experience1Achieve3"),
        t("experience1Achieve4"),
      ],
    },
    {
      title: t("experience2Title"),
      company: t("experience2Company"),
      period: t("experience2Period"),
      description: t("experience2Description"),
      achievements: [
        t("experience2Achieve1"),
        t("experience2Achieve2"),
        t("experience2Achieve3"),
        t("experience2Achieve4"),
      ],
    },
    {
      title: t("experience3Title"),
      company: t("experience3Company"),
      period: t("experience3Period"),
      description: t("experience3Description"),
      achievements: [
        t("experience3Achieve1"),
        t("experience3Achieve2"),
        t("experience3Achieve3"),
        t("experience3Achieve4"),
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-[54px] md:text-[90px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("Experience")}
        </motion.h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-purple-400">{exp.company}</p>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{exp.description}</p>

              <div className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 shrink-0"></div>
                    <p className="text-gray-400">{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
