"use client";

import { useLanguage } from "../context/LanguageContext";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();
  const whatsappLink = "https://wa.me/919082764520?text=Hello%20MRD%20Enterprises,%20I'm%20ready%20to%20start%20my%20documentation%20work!";

  // Using a robust, high-fidelity Unsplash image (Office/Documentation theme)
  const heroImageUrl = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80";

  return (
    <section id="home" className="relative pt-12 pb-12 sm:pt-40 sm:pb-32 lg:pt-40 lg:pb-32 bg-white selection:bg-orange-500 selection:text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Narrativ Hub - High Fidelity Mobile Focus */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-10 lg:space-y-14 animate-fade-in font-inter">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-black text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] shadow-2xl">
             {t.hero.hubNotice}
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-poppins font-black text-black tracking-tighter uppercase leading-[1.05] md:leading-[1.1] text-wrap-balance">
            {t.hero.title}
          </h1>
          
          <div className="space-y-8">
            <h2 className="text-xl sm:text-3xl font-poppins font-bold text-gray-900 uppercase tracking-tight leading-tight">
               {t.hero.subtitle}
            </h2>
            <div className="border-l-4 sm:border-l-8 border-orange-500 pl-6 sm:pl-10 text-left font-inter">
               <p className="text-sm sm:text-xl font-bold text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-90 transition-all">
                  {t.hero.description}
               </p>
            </div>
          </div>
          
          {/* DESKTOP EXCLUSIVE ACTION BUTTONS - Mobile users use the sticky bottom bar */}
          <div className="hidden sm:flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full">
             <a href="tel:+919082764520" className="btn-primary w-full sm:w-auto">
               <Phone size={18} className="fill-white" />
               {t.hero.callNow}
             </a>
             <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-whatsapp w-full sm:w-auto">
               <MessageCircle size={20} className="fill-white" />
               {t.hero.whatsapp}
             </a>
          </div>
        </div>

        {/* Hero Visual Hub - Optimized Mobile Scaling */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center animate-fade-in font-inter mt-10 lg:mt-0 px-2 sm:px-0">
           <div className="relative mx-auto w-full max-w-[550px] group">
              <div className="absolute -inset-4 sm:-inset-8 bg-orange-500/10 rounded-2xl rotate-3 opacity-20 pointer-events-none group-hover:rotate-0 transition-transform duration-[2s]"></div>
              <div className="relative z-10 bg-white p-2 sm:p-3 rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform group-hover:scale-[1.01] transition-all duration-700">
                <img 
                  src={heroImageUrl}
                  alt="Official Service Desk showing documents" 
                  className="rounded-xl w-full aspect-[4/3] object-cover hover:scale-110 transition-transform duration-[3s] pointer-events-none grayscale-0"
                  loading="eager"
                  priority="true"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&auto=format&fit=crop&q=80";
                  }}
                />
                <div className="absolute top-6 right-6 sm:top-10 sm:right-10 z-20 bg-orange-500 text-white p-5 sm:p-7 rounded-xl text-center font-poppins font-black shadow-2xl border-2 border-white transition-all group-hover:scale-110 cursor-default select-none animate-pulse">
                   <div className="text-xl sm:text-4xl leading-none">100+</div>
                   <div className="text-[8px] sm:text-[10px] uppercase tracking-widest mt-2 whitespace-nowrap font-inter">{t.hero.dailyCitizens}</div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
