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
        
        <div className="text-center mb-16 flex flex-col items-center animate-fade-in font-inter">
           <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-black uppercase tracking-tight mb-4 text-center">
              {t.faq.title}
           </h2>
           <div className="w-16 h-1 bg-orange-500 rounded-full mb-6"></div>
           <p className="text-base font-inter text-gray-700 max-w-2xl leading-relaxed font-medium">
              {t.faq.subtitle}
           </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4 animate-fade-in font-inter">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`transition-all duration-300 rounded-xl border overflow-hidden shadow-sm font-inter
                ${openIndex === idx ? "bg-white border-orange-500" : "bg-white border-gray-100 hover:border-gray-200"}`}
            >
               <button 
                 onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                 className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
               >
                 <span className={`text-base md:text-lg font-poppins font-bold uppercase tracking-tight pr-8 transition-colors ${openIndex === idx ? "text-orange-500" : "text-black"}`}>
                   {faq.q}
                 </span>
                 <div className={`w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 
                   ${openIndex === idx ? "bg-orange-500 text-white shadow-lg" : "bg-gray-50 text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500"}`}>
                   {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                 </div>
               </button>
               
               <div 
                 className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
               >
                 <div className="text-gray-600 text-sm md:text-base font-inter leading-relaxed border-t border-gray-50 p-6 md:p-8 pt-6 selection:bg-orange-50 font-medium">
                   {faq.a}
                 </div>
               </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center flex flex-col items-center gap-6 animate-fade-in font-inter">
           <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-100 shadow-sm group hover:border-orange-500 transition-all cursor-default">
              <HelpCircle size={18} className="text-orange-500 group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-inter font-black text-gray-400 uppercase tracking-widest group-hover:text-black">
                {t.faq.helpNotice}
              </span>
           </div>
           <a 
             href="https://wa.me/919082764520" 
             target="_blank" 
             rel="noreferrer" 
             className="bg-black text-white px-10 h-16 rounded-xl text-xs font-inter font-bold uppercase tracking-widest hover:bg-orange-500 transition-all flex items-center justify-center gap-4 group active:scale-95 shadow-xl font-inter"
           >
              {t.faq.ctaText}
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
           </a>
        </div>
      </div>
    </section>
  );
}
