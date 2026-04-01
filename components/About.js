"use client";

import { useLanguage } from "../context/LanguageContext";
import { Award, Users, CheckCircle } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-24 lg:py-32 bg-white selection:bg-orange-500 selection:text-white scroll-mt-20 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Narrative Context - MOBILE FIRST Logic (Text then Image) */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left space-y-10 lg:space-y-14 animate-fade-in transition-all">
           <div className="inline-block px-5 py-2 bg-black text-white text-[9px] sm:text-[10px] font-inter font-black uppercase tracking-[0.3em] border border-black shadow-2xl">
              {t.about.points.hubNotice}
           </div>
           <h2 className="text-3xl sm:text-5xl lg:text-7xl font-poppins font-black text-black uppercase tracking-tighter leading-[1.05] md:leading-[1.1] text-wrap-balance">
              {t.about.points.headingPart1} <span className="text-orange-500 italic block lg:inline lg:mt-0">{t.about.points.headingPart2}</span>
           </h2>
           <div className="w-20 h-2 bg-orange-500 mx-auto lg:mx-0 transform translate-y-1 rounded-full transition-all"></div>
           
           <p className="text-base sm:text-xl lg:text-2xl font-inter text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-bold opacity-90 transition-all font-inter">
              {t.about.description}
           </p>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-gray-100 font-inter">
              {[
                { icon: Award, label: t.about.points.point1 },
                { icon: Users, label: t.about.points.point2 },
                { icon: CheckCircle, label: t.about.points.point3 },
                { icon: CheckCircle, label: t.about.points.point4 }
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4 text-[10px] sm:text-sm font-poppins font-black text-black uppercase tracking-widest group hover:translate-x-2 transition-transform transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-50 flex items-center justify-center p-2 group-hover:bg-orange-500 group-hover:text-white transition-colors border border-gray-100 shadow-xl shadow-black/5">
                     <point.icon size={20} className="text-inherit transition-all" />
                  </div>
                  {point.label}
                </div>
              ))}
           </div>
           
           <div className="pt-8">
              <a href="#services" className="btn-black w-full sm:w-auto font-inter">
                 {t.about.points.cta}
                 <CheckCircle size={20} className="transition-transform group-hover:rotate-12" />
              </a>
           </div>
        </div>

        {/* Visual Hub - High Fluidity Mobile Fix */}
        <div className="w-full lg:w-1/2 relative order-2 lg:order-1 animate-fade-in mt-10 lg:mt-0 px-2 sm:px-0">
           <div className="relative p-2 sm:p-3 bg-gray-50 rounded-2xl group shadow-sm border border-gray-100 overflow-hidden transform group-hover:scale-[1.01] transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80" 
                alt="Representative Document Preparation Image" 
                className="w-full aspect-[4/5] object-cover rounded-xl group-hover:scale-105 transition-transform duration-[3s] grayscale opacity-95 hover:grayscale-0 hover:opacity-100"
              />
              <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-orange-500 text-white p-6 sm:p-10 rounded-xl shadow-2xl border-2 border-white group-hover:-translate-y-2 transition-all duration-700 cursor-default animate-pulse">
                 <div className="text-3xl sm:text-5xl font-poppins font-black leading-none mb-3">1000+</div>
                 <div className="text-[9px] sm:text-[11px] font-poppins font-black uppercase tracking-[0.2em] opacity-80 whitespace-nowrap font-inter transition-all">{t.about.points.registered}</div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
