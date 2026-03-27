import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center px-4 pt-16">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-20">

        <div>
<motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {t("name")}
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("homeTitle")}
          </motion.p>

          <motion.p
            className="text-base text-gray-500 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t("homeDesc")}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
            >
              {t("homeMore")} <ArrowRight size={16} />
            </Link>
            <Link
              to="mailto:crownelf4@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all duration-300"
            >
              <Mail size={16} /> {t("homeSend")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center md:justify-end order-first md:order-last"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-green-300/80 to-emerald-300/80 rounded-full blur-3xl animate-pulse" />
            <img
              src="/assets/images/avatar.jpg"
              alt="Sato Takeru"
              className="relative rounded-full w-full h-full object-cover object-center border border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
