import { motion } from "motion/react";
import { Code2, Layout, Server, GitBranch, Smartphone, ChartSpline, Wrench } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  const expertise = [
    t("skillExpertiseDesc1"), t("skillExpertiseDesc2"), t("skillExpertiseDesc3"),
    t("skillExpertiseDesc4"), t("skillExpertiseDesc5"), t("skillExpertiseDesc6"),
  ];

  const skillCategories = [
    {
      title: t("skillCategories1"), icon: ChartSpline,
      skills: [{ name: "Odoo", level: 90 }, { name: "ERPNext", level: 90 }, { name: "SAP ERP", level: 80 }, { name: "Oracle NetSuite", level: 65 }, { name: "MicroSoft Dynamics", level: 60 }],
    },
    {
      title: t("skillCategories2"), icon: Code2,
      skills: [{ name: "PyTorch", level: 95 }, { name: "TensorFlow", level: 90 }, { name: "LangChain", level: 95 }, { name: "Hugging Face", level: 90 }, { name: "OpenAI GPT-5", level: 95 }],
    },
    {
      title: t("skillCategories3"), icon: Server,
      skills: [{ name: "Express", level: 95 }, { name: "Node.js", level: 90 }, { name: "Django", level: 90 }, { name: "Flask", level: 85 }, { name: "FastAPI", level: 80 }],
    },
    {
      title: t("skillCategories4"), icon: Layout,
      skills: [{ name: "React", level: 95 }, { name: "Next.js", level: 95 }, { name: "TypeScript", level: 95 }, { name: "Angular", level: 80 }, { name: "Tailwind CSS", level: 95 }],
    },
    {
      title: t("skillCategories5"), icon: GitBranch,
      skills: [{ name: "AWS", level: 90 }, { name: "Docker", level: 95 }, { name: "Kubernetes", level: 85 }, { name: "GCP", level: 85 }, { name: "Azure", level: 80 }],
    },
    {
      title: t("skillCategories6"), icon: Smartphone,
      skills: [{ name: "WebSockets", level: 95 }, { name: "WebRTC", level: 90 }, { name: "REST APIs", level: 95 }, { name: "ElevenLabs AI", level: 90 }],
    },
  ];

  const additionalSkills = [
    "RAG Pipelines", "LLM Fine-tuning", "Voice AI", "Whisper ASR", "Stable Diffusion",
    "MLOps", "Celery", "Kafka", "Airflow", "Terraform", "CI/CD (GitHub Actions)",
    "Prometheus & Grafana", "HIPAA & PCI DSS Compliance", "Microservices Architecture",
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
          Expertise
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("skillTitle")}
        </motion.h1>

        {/* Core expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 mb-16 items-center"
        >
          <img
            src="/assets/images/skill.jpg"
            alt="Skills"
            className="rounded-2xl w-full h-auto border border-white/10 shadow-xl"
          />
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white mb-5">{t("skillExpertiseTitle")}</h2>
            {expertise.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * index, duration: 0.6 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,197,94,0.2)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <category.icon className="text-green-400" size={18} />
                </div>
                <h3 className="text-base font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-400">{skill.name}</span>
                      <span className="text-xs text-green-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + skillIndex * 0.08, duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 rounded-2xl p-8 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Wrench className="text-green-400" size={18} />
            </div>
            <h3 className="text-base font-semibold text-white">{t("skillAdditionalTitle")}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * index, duration: 0.3 }}
                className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-green-500/40 hover:text-white transition-all duration-200"
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
