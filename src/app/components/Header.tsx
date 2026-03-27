import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";
import useClick from "../utils/useClick";

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const closeMenu = () => { if (isOpen) setIsOpen(false); };
  useClick(closeMenu);

  const navItems = [
    { name: t("Home"), path: "/" },
    { name: t("About"), path: "/about" },
    { name: t("Experience"), path: "/experience" },
    { name: t("Skills"), path: "/skills" },
    { name: t("Certifications"), path: "/certifications" },
    { name: t("Education"), path: "/education" },
    { name: t("Works"), path: "/works" },
    { name: t("Contact"), path: "mailto:crownelf4@gmail.com" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link to="/" className="group flex items-center gap-2 select-none">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-[spin_3s_linear_infinite] border-t-white" />
              <span className="text-xs font-bold text-white tracking-tight">ST</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">{t('name')}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 ms-auto">
            {navItems.map((item, index) => {
              const isContact = index === navItems.length - 1;
              const active = isActive(item.path);
              return isContact ? (
                <Link
                  key={item.path}
                  to={item.path}
                  className="ml-3 px-4 py-1.5 text-sm text-white bg-green-600 hover:bg-green-500 rounded-full transition-all duration-200"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 text-sm transition-colors duration-200 group"
                >
                  <span className={`relative inline-block ${active ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 right-0 h-px transition-transform duration-200 origin-left ${active ? "bg-green-400 scale-x-100" : "bg-green-400/50 scale-x-0 group-hover:scale-x-100"}`} />
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block ms-3 w-[44px]">
            <LanguageSwitcher size="xs" />
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={(e) => (e.stopPropagation(), setIsOpen(!isOpen))}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 text-sm transition-all duration-200 border-l-2 ${
                    isActive(item.path)
                      ? "text-white border-green-400"
                      : "text-gray-400 hover:text-white  hover:border-green-400"
                  } ${index === navItems.length - 1 ? "mt-2 text-white bg-green-600 hover:bg-green-500 border-none rounded-lg" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 pb-2">
                <LanguageSwitcher size="lg" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
