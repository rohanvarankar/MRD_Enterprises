"use client";

import { useLanguage } from "../context/LanguageContext";
import { Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  const { t } = useLanguage();
  const whatsappLink = "https://wa.me/919082764520?text=Hello%20MRD%20Enterprises,%20I'm%20ready%20to%20start%20my%20documentation%20work!";

  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100 scroll-mt-20 selection:bg-orange-500 selection:text-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div 
           className="w-full p-10 md:p-16 bg-orange-500 rounded-xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 transition-all duration-300"
        >
          <div className="text-center lg:text-left space-y-6">
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-black text-white uppercase tracking-tighter animate-fade-in group hover:scale-[1.01] transition-transform">
                {t.ctaSection.heading}
             </h2>
             <p className="text-base md:text-lg text-white/90 max-w-2xl font-bold opacity-90 leading-relaxed font-inter">
                {t.ctaSection.description}
             </p>
          </div>
          
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
             <a href="tel:+919082764520" className="bg-white text-orange-500 px-8 h-14 rounded-lg font-bold flex items-center justify-center gap-3 transition duration-300 hover:bg-gray-100 shadow-xl active:scale-95 uppercase tracking-widest text-xs font-inter">
               <Phone size={20} className="fill-orange-500" />
               {t.ctaSection.callSupport}
             </a>
             <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-black text-white px-8 h-14 rounded-lg font-bold flex items-center justify-center gap-3 transition duration-300 hover:bg-gray-900 shadow-xl active:scale-95 uppercase tracking-widest text-xs font-inter">
               <MessageCircle size={22} className="fill-white" />
               {t.ctaSection.whatsapp}
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
