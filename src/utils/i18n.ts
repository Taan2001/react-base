import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Load language from JSON file
  .use(LanguageDetector) // Auto detect language
  .use(initReactI18next) // Connect to React
  .init({
    fallbackLng: 'ja', // Default language
    debug: true,
    interpolation: {
      escapeValue: false, // React handles escaping
    },
    backend: {
      loadPath: '/src/locales/{{lng}}.json', // Correct path to JSON file
    },
  });

export default i18n;
