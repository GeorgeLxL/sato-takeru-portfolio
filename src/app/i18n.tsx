import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enExperience from './locales/en/experience.json';
import enSkills from './locales/en/skills.json';
import enEducation from './locales/en/education.json';
import jpCommon from './locales/jp/common.json';
import jpHome from './locales/jp/home.json';
import jpAbout from './locales/jp/about.json';
import jpExperience from './locales/jp/experience.json';
import jpSkills from './locales/jp/skills.json';
import jpEducation from './locales/jp/education.json';

export type Language = 'en' | 'jp';

const resources = {
  en: { translation: {...enCommon, ...enHome, ...enAbout, ...enExperience, ...enSkills, ...enEducation} },
  jp: { translation: {...jpCommon, ...jpHome, ...jpAbout, ...jpExperience, ...jpSkills, ...jpEducation} },
};

console.log(resources)

i18n
  .use(LanguageDetector) // auto detect browser language
  .use(initReactI18next) // bind with react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    debug: false
  });

export default i18n;