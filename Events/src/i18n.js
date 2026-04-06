import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTransl from './locales/en/translation.json';
import hiTransl from './locales/hi/translation.json';
import knTransl from './locales/kn/translation.json';

const resources = {
  en: {
    translation: enTransl
  },
  hi: {
    translation: hiTransl
  },
  kn: {
    translation: knTransl
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
