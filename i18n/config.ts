import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

// Import translations
import { all_translate_de, all_translate_en, all_translate_hu } from "./translator";

i18n
  .use(detector) // Detect user language
  .use(initReactI18next) // Connect with React
  .use(backend) // Load translations from backend
  .init({
    debug: true,
    lng: "de", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    resources: {
      en: { translation: all_translate_en },
      hu: { translation: all_translate_hu },
      de: { translation: all_translate_de },
    },
  });

export default i18n;
