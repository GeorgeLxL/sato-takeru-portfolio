import { motion } from "motion/react";
import { Code2, Users, Zap } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { projects } from "../utils/projects";

export default function Works() {
  const { t } = useTranslation()

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
          {t("Works")}
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              target="_blank"
              href={item.link}
              className="[perspective:500px] group block h-70 relative overflow-hidden from-slate-900/50 to-slate-800/50 rounded-xl border border-3 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 "
            >
              <img
                className="scale-100 group-hover:scale-110 group-hover:opacity-0 transition-all duration-600 object-cover h-full"
                src={`./assets/images/works/${index+1}/1.jpg`} 
                alt={item.title}
              />
              <img
                className="scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-600 object-cover h-full absolute top-0"
                src={`./assets/images/works/${index+1}/2.jpg`} 
                alt={item.title}
              />
              <div className="[transform-origin:center_30%] rounded absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-gray-900/90 text-center flex flex-col justify-center items-center rotate-x-75 [transform:translate-y(-20%)] scale-40 opacity-0 group-hover:rotate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
