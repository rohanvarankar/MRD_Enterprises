"use client";

import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FloatingActions() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const whatsappLink =
    "https://wa.me/919082764520?text=Hello%20MRD%20Enterprises,%20I'm%20ready%20to%20start%20my%20documentation%20work.";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Floating Actions */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-[500] flex-col gap-4 font-sans">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-white text-gray-800 rounded-full border border-gray-200 shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all group active:scale-90"
            aria-label="Scroll to Top"
          >
            <ArrowUp
              size={20}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        )}

        <a
          href="tel:+919082764520"
          className="w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition-all relative group hover:scale-105 active:scale-95"
          aria-label={t.hero.callNow}
        >
          <Phone size={24} className="fill-white" />
          <div className="absolute right-full mr-4 px-3 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-xl font-sans">
            {t.hero.callNow}
          </div>
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all relative group hover:scale-105 active:scale-95"
          aria-label={t.hero.whatsapp}
        >
          <MessageCircle size={26} className="fill-white" />
          <div className="absolute right-full mr-4 px-3 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-xl font-sans">
            {t.hero.whatsapp}
          </div>
        </a>
      </div>

      {/* Mobile Sticky Bottom Service Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[1000] p-2.5 sm:p-3 bg-white/95 backdrop-blur-md border-t border-gray-200 flex gap-2 sm:gap-3 shadow-[0_-10px_25px_rgba(0,0,0,0.08)] font-sans">
        <a
          href="tel:+919082764520"
          className="flex-1 min-w-0 h-12 sm:h-14 bg-orange-500 text-white rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow active:scale-95 transition-all font-sans px-2"
        >
          <Phone size={15} className="fill-white flex-shrink-0" />
          <span className="truncate">{t.hero.callNow}</span>
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 h-12 sm:h-14 bg-green-500 text-white rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow active:scale-95 transition-all font-sans px-2"
        >
          <MessageCircle size={16} className="fill-white flex-shrink-0" />
          <span className="truncate">{t.hero.whatsapp}</span>
        </a>
      </div>
    </>
  );
}
