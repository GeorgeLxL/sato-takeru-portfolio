import { motion } from "motion/react";
import { Code2, Users, Zap } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation()
  const features = [{
    icon: Users,
    color: "from-red-500 to-purple-500",
    title: t("aboutFeature1Title"),
    description: [
      t("aboutFeature1Desc1"),
      t("aboutFeature1Desc2"),
      t("aboutFeature1Desc3"),
    ]
  },
  {
    icon: Code2,
    color: "from-purple-500 to-purple-800",
    title: t("aboutFeature2Title"),
    description: [
      t("aboutFeature2Desc1"),
      t("aboutFeature2Desc2"),
      t("aboutFeature2Desc3"),
    ]
  },
  {
    icon: Zap,
    color: "from-purple-600 to-pink-600",
    title: t("aboutFeature3Title"),
    description: [
      t("aboutFeature3Desc1"),
      t("aboutFeature3Desc2"),
      t("aboutFeature3Desc3"),
    ]
  }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-[54px] md:text-[90px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-16 text-center"
          {...fadeInUp}
        >
          {t("aboutTitle")}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-30"></div>
            <img
              src="/assets/images/about.jpg"
              alt="Sato Takeru"
              className="relative rounded-2xl shadow-2xl w-full h-auto border-2 border-purple-500/30"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("aboutSubTitle")}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t("aboutDesc1")}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t("aboutDesc2")}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t("aboutDesc3")}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <ul
                className="list-disc ps-4"
              >
                {item.description.map((_, i) => (
                  <li
                    key={i}
                    className="text-gray-400 mt-3"
                  >
                    {item.description[i]}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
