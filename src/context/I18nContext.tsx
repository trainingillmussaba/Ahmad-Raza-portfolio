import React, { createContext, useContext, useEffect, useState } from "react";
import {
  LanguageCode,
  LanguageOption,
  SUPPORTED_LANGUAGES,
  TRANSLATIONS,
  TranslationDictionary,
} from "../i18n/translations";

interface I18nContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: keyof TranslationDictionary) => string;
  currentLangOption: LanguageOption;
  languages: LanguageOption[];
  isRtl: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ar_portfolio_lang") as LanguageCode;
      if (saved && TRANSLATIONS[saved]) {
        return saved;
      }
      // Check browser language
      const navLang = navigator.language?.slice(0, 2).toLowerCase();
      if (navLang && TRANSLATIONS[navLang as LanguageCode]) {
        return navLang as LanguageCode;
      }
    }
    return "en";
  });

  const currentLangOption =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];
  const isRtl = currentLangOption.dir === "rtl";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = isRtl ? "rtl" : "ltr";
    localStorage.setItem("ar_portfolio_lang", language);
  }, [language, isRtl]);

  const setLanguage = (newLang: LanguageCode) => {
    if (TRANSLATIONS[newLang]) {
      setLanguageState(newLang);
    }
  };

  const t = (key: keyof TranslationDictionary): string => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || String(key);
  };

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage,
        t,
        currentLangOption,
        languages: SUPPORTED_LANGUAGES,
        isRtl,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
