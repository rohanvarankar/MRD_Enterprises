"use client";

import { createContext, useContext, useState, useEffect } from "react";
import en from "../messages/en.json";
import hi from "../messages/hi.json";
import mr from "../messages/mr.json";

const translations = { en, hi, mr };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang");
    if (savedLang && translations[savedLang]) {
      setLang(savedLang);
    }
  }, []);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("app_lang", newLang);
  };

  // On the server, t will always provide translations.en as default 
  // since lang starts as "en".
  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
