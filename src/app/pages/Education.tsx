import { motion } from "motion/react";
import { GraduationCap, Book } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation();

  const educations = [
    {
      degree: t("education1Degree"),
      institution: t("education1Institution"),
      period: t("education1Period"),
      description: t("education1Description"),
      achievements: [t("education1Achieve1"), t("education1Achieve2"), t("education1Achieve3")],
    },
    {
      degree: t("education2Degree"),
      institution: t("education2Institution"),
      period: t("education2Period"),
      description: t("education2Description"),
      achievements: [t("education2Achieve1"), t("education2Achieve2"), t("education2Achieve3")],
    },
  ];

  const courses = [
    "Advanced ERP Systems", "Increasing Revenue in a Short Period",
    "MLOps & Model Deployment", "Multimodal AI Systems",
    "Vector Databases & Embeddings", "Cloud Architecture (AWS/GCP/Azure)",
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
          Background
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("Education")}
        </motion.h1>

        {/* Academic */}
        <div className="mb-14">
          <motion.h2
            className="flex items-center gap-2 text-lg font-semibold text-white mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="text-green-400" size={22} />
            {t("educationAcademic")}
          </motion.h2>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-green-500/20" />
            <div className="space-y-12">
              {educations.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-green-500 border-2 border-green-300 shadow-[0_0_8px_2px_rgba(34,197,94,0.5)]" />
                  <span className="inline-block text-xs font-mono text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full mb-3">
                    {edu.period}
                  </span>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,197,94,0.2)] transition-all duration-300">
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-green-400 text-sm mb-3">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">{edu.description}</p>
                    <ul className="space-y-1.5">
                      {edu.achievements.map((a, i) => (
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

        {/* Additional courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
            <Book className="text-green-400" size={22} />
            {t("educationAdditionalTitle")}
          </h2>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex flex-wrap gap-2">
              {courses.map((course, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                  className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-green-500/40 hover:text-white transition-all duration-200"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
