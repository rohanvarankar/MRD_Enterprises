"use client";

import { useLanguage } from "../context/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useLanguage();
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative font-inter" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 sm:gap-3 bg-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg border-2 border-black shadow-sm hover:border-orange-500 transition-all group active:scale-95"
      >
        <Globe size={16} className="text-orange-500 group-hover:rotate-12 transition-transform sm:w-[18px] sm:h-[18px]" />
        <span className="text-[10px] sm:text-xs font-black text-black uppercase tracking-widest leading-none">{currentLang.label}</span>
        <ChevronDown size={12} className={`text-black transition-transform duration-300 ${isOpen ? "rotate-180" : ""} sm:w-[14px] sm:h-[14px]`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-3 w-36 sm:w-44 bg-white rounded-xl shadow-2xl border-2 border-black py-2 z-[1000] animate-fade-in translate-x-1 sm:translate-x-0">
          <div className="px-4 sm:px-5 py-2 sm:py-3 border-b-2 border-black mb-1">
             <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-black">Citizen Language</span>
          </div>
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                changeLanguage(l.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 sm:px-5 py-2.5 sm:py-3.5 text-[9px] sm:text-[10px] font-black transition-all flex items-center justify-between group uppercase tracking-widest
                ${lang === l.code ? "text-orange-500 bg-orange-50" : "text-black hover:bg-black hover:text-white hover:pl-6 sm:hover:pl-7"}`}
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
