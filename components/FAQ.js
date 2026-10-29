"use client";

import { useLanguage } from "../context/LanguageContext";
import { Plus, Minus, HelpCircle, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  // Use translated FAQ items from JSON
  const faqs = t.faq.items;

  return (
    <section className="py-12 md:py-16 bg-gray-50 selection:bg-orange-500 selection:text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 flex flex-col items-center animate-fade-in font-sans">
           <h2 className="text-2xl md:text-3xl font-poppins font-bold text-black uppercase tracking-tight mb-4 text-center">
              {t.faq.title}
           </h2>
           <div className="w-16 h-1 bg-orange-500 rounded-full mb-6"></div>
           <p className="text-base font-sans text-gray-700 max-w-2xl leading-relaxed font-normal">
              {t.faq.subtitle}
           </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3.5 sm:space-y-4 animate-fade-in font-sans">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`transition-all duration-300 rounded-xl border border-gray-200 overflow-hidden shadow-sm font-sans
                ${openIndex === idx ? "bg-white border-orange-500" : "bg-white hover:border-gray-300"}`}
            >
               <button
                 type="button"
                 id={`faq-trigger-${idx}`}
                 aria-expanded={openIndex === idx}
                 aria-controls={`faq-panel-${idx}`}
                 onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                 className="w-full flex items-center justify-between p-4 sm:p-6 md:p-7 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 rounded-xl gap-3"
               >
                 <span className={`text-sm sm:text-base md:text-lg font-poppins font-bold uppercase tracking-tight pr-2 sm:pr-6 transition-colors ${openIndex === idx ? "text-orange-500" : "text-black"}`}>
                   {faq.q}
                 </span>
                 <div className={`w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-lg flex items-center justify-center transition-all duration-300
                   ${openIndex === idx ? "bg-orange-500 text-white shadow-lg" : "bg-gray-50 text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500"}`}>
                   {openIndex === idx ? <Minus size={18} className="sm:w-5 sm:h-5" aria-hidden="true" /> : <Plus size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />}
                 </div>
               </button>

               <div
                 id={`faq-panel-${idx}`}
                 role="region"
                 aria-labelledby={`faq-trigger-${idx}`}
                 aria-hidden={openIndex !== idx}
                 className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
               >
                 <div className="text-gray-700 text-xs sm:text-sm md:text-base font-sans leading-relaxed border-t border-gray-100 p-4 sm:p-6 md:p-7 pt-4 sm:pt-6 selection:bg-orange-50 font-normal">
                   {faq.a}
                 </div>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center flex flex-col items-center gap-5 sm:gap-6 animate-fade-in font-sans">
           <div className="flex items-center gap-2.5 sm:gap-3 bg-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-gray-100 shadow-sm group hover:border-orange-500 transition-all cursor-default">
              <HelpCircle size={18} className="text-orange-500 group-hover:rotate-12 transition-transform flex-shrink-0" />
              <span className="text-xs font-sans font-medium text-gray-600 uppercase tracking-wider group-hover:text-black">
                {t.faq.helpNotice}
              </span>
           </div>
           <a
             href="https://wa.me/919082764520"
             target="_blank"
             rel="noreferrer"
             className="bg-black text-white w-full sm:w-auto px-6 sm:px-10 h-12 sm:h-14 md:h-16 rounded-xl text-xs font-sans font-bold uppercase tracking-wider hover:bg-orange-700 transition-all flex items-center justify-center gap-3 sm:gap-4 group active:scale-95 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
           >
              <span>{t.faq.ctaText}</span>
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
           </a>
        </div>
      </div>
    </section>
  );
}