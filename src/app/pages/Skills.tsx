import { motion } from "motion/react";
import {
  Code2,
  Database,
  Layout,
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Wrench,
} from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation()
  const expertise = [
    t("skillExpertiseDesc1"),
    t("skillExpertiseDesc2"),
    t("skillExpertiseDesc3"),
    t("skillExpertiseDesc4"),
    t("skillExpertiseDesc5"),
    t("skillExpertiseDesc6"),
  ]
  const skillCategories = [
    {
      title: t("skillCategories1"),
      icon: Code2,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "PyTorch", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "LangChain", level: 95 },
        { name: "Hugging Face", level: 90 },
        { name: "OpenAI GPT-5", level: 95 },
      ],
    },
    {
      title: t("skillCategories2"),
      icon: Server,
      color: "from-pink-500 to-pink-600",
      skills: [
        { name: "Express", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "Django", level: 90 },
        { name: "Flask", level: 85 },
        { name: "FastAPI", level: 80 },
      ],
    },
    {
      title: t("skillCategories3"),
      icon: Layout,
      color: "from-purple-600 to-pink-500",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 95 },
        { name: "TypeScript", level: 95 },
        { name: "Angular", level: 80 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      title: t("skillCategories4"),
      icon: Database,
      color: "from-pink-600 to-purple-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "Pinecone", level: 90 },
        { name: "FAISS", level: 95 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 90 },
      ],
    },
    {
      title: t("skillCategories5"),
      icon: GitBranch,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 85 },
        { name: "GCP", level: 85 },
        { name: "Azure", level: 80 },
      ],
    },
    {
      title: t("skillCategories6"),
      icon: Smartphone,
      color: "from-pink-500 to-purple-600",
      skills: [
        { name: "WebSockets", level: 95 },
        { name: "WebRTC", level: 90 },
        { name: "REST APIs", level: 95 },
        { name: "ElevenLabs AI", level: 90 },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-[54px] md:text-[90px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("skillTitle")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=""
        >
          <h2 className="text-[2.5rem] font-bold text-white text-center mb-8">{t("skillExpertiseTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-12">
              <img
                src="./assets/images/skill.png"
                alt="Sato Takeru"
                className="relative rounded-2xl shadow-2xl w-full h-auto border-2 border-purple-500/30"
              />
              <div>
                {expertise.map((_, i) => (
                <h3
                  key={i}
                  className="text-[1.75rem] font-bold text-white mb-1"
                >
                  {expertise[i]}
                </h3>
              ))}
              </div>
          </div>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-[1.875rem] font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + skillIndex * 0.1, duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Wrench className="text-white" size={24} />
            </div>
            <h3 className="text-[2.25rem] font-bold text-white">
              {t("skillAdditionalTitle")}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "RAG Pipelines",
              "LLM Fine-tuning",
              "Voice AI",
              "Whisper ASR",
              "Stable Diffusion",
              "MLOps",
              "Celery",
              "Kafka",
              "Airflow",
              "Terraform",
              "CI/CD (GitHub Actions)",
              "Prometheus & Grafana",
              "HIPAA & PCI DSS Compliance",
              "Microservices Architecture",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.3 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
