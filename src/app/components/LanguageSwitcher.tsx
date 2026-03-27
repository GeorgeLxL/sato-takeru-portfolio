import { useTranslation } from 'react-i18next';
import { Language } from '../i18n';

type sizeType = "xs" | "lg"

type LanguageSwitcherProps = {
  size?: sizeType
}

export default function LanguageSwitcher(props: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const { size = 'xs' } = props

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className='flex text-gray-500'>
      <button
        className={`text-${size} w-100 rounded-sm px-1 ${i18n.language === 'en' ? 'bg-green-500 text-white' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`text-${size} w-100 rounded-sm px-1 ${i18n.language === 'jp' ? 'bg-green-500 text-white' : ''}`}
        onClick={() => changeLanguage('jp')}
      >
        JP
      </button>
    </div>
  )
}