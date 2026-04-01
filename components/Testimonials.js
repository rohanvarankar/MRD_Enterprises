"use client";

import { useLanguage } from "../context/LanguageContext";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  // Directly use the translated reviews from JSON files
  const testimonials = t.testimonials.reviews;

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-12 md:py-16 bg-white selection:bg-orange-500 selection:text-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-inter">
        
        {/* Section Header - Mobile First */}
        <div className="flex flex-col items-center text-center mb-12 flex flex-col items-center animate-fade-in transition-all">
           <h2 className="text-2xl md:text-3xl font-poppins font-black text-black uppercase tracking-tight mb-4 text-center">
              {t.testimonials.title}
           </h2>
           <div className="w-16 h-1 bg-orange-500 rounded-full mb-6 transition-all"></div>
           <p className="text-sm md:text-base font-inter text-gray-700 max-w-2xl leading-relaxed font-medium transition-all">
              {t.testimonials.subtitle}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fade-in font-inter">
           
           {/* Navigation Hub */}
           <div className="lg:col-span-4 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left transition-all font-inter">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-500 rounded-2xl flex items-center justify-center p-3 shadow-xl transition-transform hover:scale-105 active:scale-95">
                 <Quote size={28} className="text-white fill-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-poppins font-black text-black uppercase tracking-widest leading-none">
                 {t.testimonials.headingPart1} <br className="hidden lg:block" /> <span className="text-orange-500 underline underline-offset-8">{t.testimonials.headingPart2}</span>
              </h3>
              <div className="flex gap-4">
                 <button onClick={prev} className="w-12 h-12 md:w-14 md:h-14 rounded-xl border-2 border-black bg-white flex items-center justify-center text-black shadow-sm hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all active:scale-90 duration-300">
                   <ChevronLeft size={24} />
                 </button>
                 <button onClick={next} className="w-12 h-12 md:w-14 md:h-14 rounded-xl border-2 border-black bg-white flex items-center justify-center text-black shadow-sm hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all active:scale-90 duration-300">
                   <ChevronRight size={24} />
                 </button>
              </div>
           </div>
           
           {/* Card Layout Hub */}
           <div className="lg:col-span-8 relative font-inter">
              <div 
                className="w-full bg-white border-2 border-black rounded-3xl shadow-sm p-6 md:p-16 flex flex-col items-center text-center group cursor-default transition-all duration-700 hover:shadow-lg hover:bg-orange-50"
              >
                <div className="flex items-center gap-1 mb-6 relative z-10 transition-transform group-hover:scale-105">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-orange-500 text-orange-500 transition-all" />
                  ))}
                </div>
                
                <p className="text-base md:text-2xl font-inter font-bold text-gray-800 leading-relaxed italic mb-8 relative z-10 selection:bg-orange-50 px-2 lg:px-4">
                  "{testimonials[active].text}"
                </p>
                
                <div className="flex flex-col items-center relative z-10 font-inter">
                  <h4 className="text-lg md:text-xl font-poppins font-black text-black leading-none mb-3 uppercase tracking-tighter transition-all group-hover:text-orange-500">{testimonials[active].name}</h4>
                  <div className="text-[8px] md:text-[10px] font-inter font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100">{testimonials[active].role}</div>
                </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
