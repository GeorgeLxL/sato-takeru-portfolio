import { Telegram, GitHub, WhatsApp } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center gap-6 mb-4">
          <a
            href="https://t.me/georgelxl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-200"
            aria-label="Telegram"
          >
            <Telegram />
          </a>
          <a
            href="https://wa.me/447347611442"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-200"
            aria-label="WhatsApp"
          >
            <WhatsApp />
          </a>
          <a
            href="https://github.com/GeorgeLxL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHub />
          </a>
        </div>
        <p className="text-gray-600 text-center text-sm">© {t("name")} 2026</p>
      </div>
    </footer>
  );
}
