"use client";

import { useLanguage } from "../context/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const { t, lang, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" },
    { code: "mr", label: "मराठी" }
  ];

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative font-sans" ref={dropdownRef}>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t.nav?.selectLanguage || "Language selection"}
        className="flex items-center gap-1 sm:gap-2.5 bg-white px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg border-2 border-black shadow-sm hover:border-orange-500 transition-all group active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
      >
        <Globe size={14} className="text-orange-500 group-hover:rotate-12 transition-transform sm:w-[18px] sm:h-[18px]" />
        <span className="text-[11px] sm:text-xs font-bold text-gray-900 tracking-wide leading-none font-sans">{currentLang.label}</span>
        <ChevronDown size={11} className={`text-black transition-transform duration-300 ${isOpen ? "rotate-180" : ""} sm:w-[14px] sm:h-[14px]`} />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label={t.nav?.selectLanguage || "Language"}
          className="absolute top-full right-0 mt-3 w-36 sm:w-44 bg-white rounded-xl shadow-2xl border-2 border-black py-2 z-[1000] animate-fade-in translate-x-1 sm:translate-x-0"
        >
          <div className="px-4 sm:px-5 py-2 sm:py-3 border-b-2 border-black mb-1">
             <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700 font-sans">{t.nav?.selectLanguage || "Language"}</span>
          </div>
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              role="menuitem"
              onClick={() => {
                changeLanguage(l.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 sm:px-5 py-2.5 sm:py-3 text-xs font-semibold font-sans transition-all flex items-center justify-between group tracking-wide focus:outline-none focus-visible:bg-orange-50 focus-visible:text-orange-600
                ${lang === l.code ? "text-orange-600 bg-orange-50" : "text-black hover:bg-black hover:text-white hover:pl-6 sm:hover:pl-7"}`}
            >
              {l.label}
              {lang === l.code && <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}