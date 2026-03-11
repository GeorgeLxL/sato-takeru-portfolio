import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 ml-8"
        >
          <div className="relative w-72 h-72 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-90 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <img
              src="/assets/images/avatar.jpg"
              alt="Sato Takeru"
              className="relative rounded-full w-full h-full object-cover object-center border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50"
            />
          </div>
        </motion.div>

        <motion.h1
          className="mt-12 mb-4 text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t("name")}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {t("homeTitle")}
        </motion.p>

        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {t("homeDesc")}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link
            to="/about"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            {t("homeMore")}
          </Link>
          <Link
            to="mailto:crownelf4@gmail.com"
            className="px-8 py-3 border-2 border-purple-500 text-purple-300 rounded-full hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
          >
            {t("homeSend")}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
