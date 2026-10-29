"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();
  const whatsappLink = "https://wa.me/919082764520?text=Hello%20MRD%20Enterprises,%20I'm%20ready%20to%20start%20my%20documentation%20work!";

  // Using a robust, high-fidelity Unsplash image (Office/Documentation theme)
  const heroImageUrl = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80";
  const [imgSrc, setImgSrc] = useState(heroImageUrl);

  return (
    <section id="home" className="relative pt-8 pb-12 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 bg-white selection:bg-orange-500 selection:text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-16">
        
        {/* Narrative Hub - High Fidelity Mobile Focus */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in font-inter">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded shadow-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-orange-500" aria-hidden="true" />
             <span>{t.hero.hubNotice}</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-extrabold sm:font-black text-black tracking-tight uppercase leading-[1.08] sm:leading-[1.1] text-wrap-balance break-words">
            {t.hero.title}
          </h1>
          
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-poppins font-bold text-gray-900 uppercase tracking-tight leading-snug">
               {t.hero.subtitle}
            </h2>
            <div className="border-l-4 sm:border-l-6 lg:border-l-8 border-orange-500 pl-4 sm:pl-6 lg:pl-8 text-left font-inter">
               <p className="text-sm sm:text-base lg:text-lg font-normal text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-all">
                  {t.hero.description}
               </p>
            </div>
          </div>
          
          {/* Action Buttons - Fully responsive across mobile & desktop */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full">
             <a href="tel:+919082764520" className="btn-primary w-full sm:w-auto">
                <Phone size={18} className="fill-white flex-shrink-0" />
                <span>{t.hero.callNow}</span>
             </a>
             <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-whatsapp w-full sm:w-auto">
                <MessageCircle size={20} className="fill-white flex-shrink-0" />
                <span>{t.hero.whatsapp}</span>
             </a>
          </div>
        </div>

        {/* Hero Visual Hub - Optimized Mobile Scaling with Next.js Image */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center animate-fade-in font-inter mt-6 lg:mt-0 px-2 sm:px-0">
           <div className="relative mx-auto w-full max-w-[550px] group">
              <div className="absolute -inset-2 sm:-inset-6 bg-orange-500/10 rounded-2xl rotate-1 sm:rotate-3 opacity-20 pointer-events-none group-hover:rotate-0 transition-transform duration-[2s]"></div>
              <div className="relative z-10 bg-white p-2 sm:p-3 rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform group-hover:scale-[1.01] transition-all duration-700">
                <Image
                  src={imgSrc}
                  alt="MRD Enterprises Service Desk and citizen documentation assistance in Thane"
                  width={600}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
                  className="rounded-xl w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-[3s] pointer-events-none grayscale-0"
                  priority={true}
                  onError={() => {
                    setImgSrc("https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&auto=format&fit=crop&q=80");
                  }}
                />
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-20 bg-orange-500 text-white p-3.5 sm:p-5 lg:p-6 rounded-xl text-center font-poppins font-black shadow-2xl border-2 border-white transition-all group-hover:scale-105 cursor-default select-none">
                   <div className="text-xl sm:text-3xl lg:text-4xl leading-none">100+</div>
                   <div className="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider mt-1.5 whitespace-nowrap font-sans">{t.hero.dailyCitizens}</div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
