import { motion } from "motion/react";
import { GraduationCap, Award, Book, Trophy } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation()
  const educations = [
    {
      degree: t("education1Degree"),
      institution: t("education1Institution"),
      period: t("education1Period"),
      description: t("education1Description"),
      achievements: [
        t("education1Achieve1"),
        t("education1Achieve2"),
        t("education1Achieve3"),
      ],
    },
    {
      degree: t("education2Degree"),
      institution: t("education2Institution"),
      period: t("education2Period"),
      description: t("education2Description"),
      achievements: [
        t("education2Achieve1"),
        t("education2Achieve2"),
        t("education2Achieve3"),
      ],
    },
  ];

  const certifications = [
    {
      name: "SAP Activate Project Manager",
      issuer: "SAP",
      year: "2021",
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2020",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2020",
    },
    {
      name: "Docker & Kubernetes Certified",
      issuer: "Docker Inc.",
      year: "2022",
    },
  ];

  const courses = [
    "Advanced ERP Systems",
    "Increasing Revenue in a Short Period",
    "MLOps & Model Deployment",
    "Multimodal AI Systems",
    "Vector Databases & Embeddings",
    "Cloud Architecture (AWS/GCP/Azure)",
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-[3.375rem] md:text-[5.625rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("Education")}
        </motion.h1>

        {/* Degrees */}
        <div className="mb-16">
          <motion.h2
            className="text-[2.25rem] font-bold text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="text-purple-400" size={32} />
            {t("educationAcademic")}
          </motion.h2>

          <div className="space-y-6">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-[2.25rem] font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-400 text-lg">{edu.institution}</p>
                  </div>
                  <span className="text-gray-400 bg-purple-900/30 px-4 py-2 rounded-full">
                    {edu.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">{edu.description}</p>

                <div className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
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

        {/* Certifications */}
        <div className="mb-16">
          <motion.h2
            className="text-[2.25rem] font-bold text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Award className="text-purple-400" size={32} />
            {t("educationCertification")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[1.6875rem] font-bold text-white mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-purple-400">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mt-1">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-[2.25rem] font-bold text-white mb-8 flex items-center gap-3">
            <Book className="text-purple-400" size={32} />
            {t("educationAdditionalTitle")}
          </h2>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <div className="flex flex-wrap gap-3">
              {courses.map((course, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300"
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
