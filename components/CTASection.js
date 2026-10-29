"use client";

import { useLanguage } from "../context/LanguageContext";
import { Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  const { t } = useLanguage();
  const whatsappLink = "https://wa.me/919082764520?text=Hello%20MRD%20Enterprises,%20I'm%20ready%20to%20start%20my%20documentation%20work!";

  return (
    <section className="py-10 md:py-16 bg-white border-y border-gray-100 scroll-mt-20 selection:bg-orange-500 selection:text-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div 
           className="w-full p-6 sm:p-10 md:p-14 bg-orange-500 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16 transition-all duration-300"
        >
          <div className="text-center lg:text-left space-y-4 sm:space-y-6">
             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-white uppercase tracking-tight animate-fade-in group hover:scale-[1.01] transition-transform leading-tight text-wrap-balance">
                {t.ctaSection.heading}
             </h2>
             <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl font-normal leading-relaxed font-sans text-wrap-balance">
                {t.ctaSection.description}
             </p>
          </div>
          
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
             <a href="tel:+919082764520" className="bg-white text-orange-700 px-6 sm:px-8 h-12 sm:h-14 rounded-xl font-bold flex items-center justify-center gap-2.5 sm:gap-3 transition duration-300 hover:bg-gray-100 shadow-xl active:scale-95 uppercase tracking-wider text-xs font-inter focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500">
               <Phone size={18} className="fill-orange-700 flex-shrink-0" />
               <span>{t.ctaSection.callSupport}</span>
             </a>
             <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-black text-white px-6 sm:px-8 h-12 sm:h-14 rounded-xl font-bold flex items-center justify-center gap-2.5 sm:gap-3 transition duration-300 hover:bg-gray-900 shadow-xl active:scale-95 uppercase tracking-wider text-xs font-inter focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500">
               <MessageCircle size={20} className="fill-white flex-shrink-0" />
               <span>{t.ctaSection.whatsapp}</span>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
