import { Telegram, GitHub } from '@mui/icons-material'
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-center items-center space-x-6 mb-3">
          <a
            href="https://t.me/satotakeru6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
            aria-label="Telegram"
          >
            <Telegram fontSize='large' />
          </a>
          <a
            href="https://github.com/GeorgeLxL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-colors duration-200"
            aria-label="Telegram"
          >
            <GitHub fontSize='large' />
          </a>
        </div>
        <p className='text-white text-center mb-3 text-lg'>@ {t("name")} 2026</p>
      </div>
    </footer>
  );
};
