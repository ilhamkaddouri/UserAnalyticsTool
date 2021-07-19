import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "Dashboard.title": "Dashboard",
    }
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "Dashboard.title": "Dashboard fr",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection:{
      order: ['cookie','htmlTag','localStorage','path','subdomain'],
      caches: ['cookie']
    },
    backend:{
      loadPath:'assets/locales/{{lng}}.json'
    },
    react: {useSuspense: false}
  });

  export default i18n;