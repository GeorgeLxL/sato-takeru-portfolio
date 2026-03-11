import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from "./LanguageSwitcher";
import useClick from "../utils/useClick";

export default function Header() {

  const { t } = useTranslation()

  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  }

  useClick(closeMenu)

  const navItems = [
    { name: t("Home"), path: "/" },
    { name: t("About"), path: "/about" },
    { name: t("Experience"), path: "/experience" },
    { name: t("Skills"), path: "/skills" },
    { name: t("Education"), path: "/education" },
    { name: t("Contact"), path: "mailto:crownelf4@gmail.com" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Home">
            <motion.div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`inset-1 bg-slate-950 rounded-md flex items-center justify-center ${isHovered ? 'hovered' : ''}`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400 font-bold text-3xl">
                  {t('name')}
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 ms-auto">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-white bg-purple-600/20 border border-purple-500/30"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                  } ${
                    (index === navItems.length - 1) && " text-white bg-purple-600 border border-purple-500 ms-2"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block ms-3 w-[44px]">
            <LanguageSwitcher size="xs" />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={(e) => (e.stopPropagation(), setIsOpen(!isOpen))}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${isActive(item.path)
                      ? "text-white bg-purple-600/20 border border-purple-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                    } ${
                    (index === navItems.length - 1) && " text-white bg-purple-600 border border-purple-500 ms-2"
                  }
                    `}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-6">
                <LanguageSwitcher size='lg' />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
