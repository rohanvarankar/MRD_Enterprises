"use client";

import { useLanguage } from "../context/LanguageContext";
import { Badge, FileCheck, Car, Briefcase, CreditCard, Ticket, ShieldCheck, ChevronRight } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const servicesList = [
    { id: "identity", icon: Badge, color: "text-orange-500" },
    { id: "certificates", icon: FileCheck, color: "text-orange-500" },
    { id: "vehicle", icon: Car, color: "text-orange-500" },
    { id: "business", icon: Briefcase, color: "text-orange-500" },
    { id: "payments", icon: CreditCard, color: "text-orange-500" },
    { id: "tickets", icon: Ticket, color: "text-orange-500" },
    { id: "schemes", icon: ShieldCheck, color: "text-orange-500" },
  ];

  const whatsappLink = "https://wa.me/919082764520?text=I'm interested in ";

  return (
    <section id="services" className="py-12 md:py-24 bg-white scroll-mt-20 selection:bg-orange-500 selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-8">
        
        {/* Section Header - High Fluidity */}
        <div className="text-center mb-16 flex flex-col items-center animate-fade-in transition-all">
          <h2 className="text-3xl md:text-5xl font-poppins font-black text-black uppercase tracking-tighter mb-4 text-center leading-tight sm:leading-none text-wrap-balance">
             Official Documents & Service Hub
          </h2>
          <div className="w-20 h-2 bg-orange-500 rounded-full transition-all"></div>
        </div>

        {/* Clean Grid Layout - Strictly 1-2-3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 animate-fade-in">
           {servicesList.map((service, idx) => {
              const Icon = service.icon;
              // Split by comma or dot to get proper list points
              const points = t.services.desc[service.id].split(/[.,]/).filter(p => p.trim().length > 0);
              
              return (
                <div 
                  key={service.id} 
                  className="bg-white border-2 border-black rounded-xl p-6 sm:p-10 hover:bg-orange-50 transition-all duration-300 flex flex-col items-center text-center group h-full shadow-lg"
                >
                  <div className="mb-6 w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-orange-100 rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:border-orange-500 shadow-xl shadow-orange-500/5">
                    <Icon size={32} className="text-orange-500" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-poppins font-black text-black mb-6 uppercase tracking-widest text-center leading-none transition-all">
                     {t.services.categories[service.id]}
                  </h3>
                  
                  <ul className="w-full text-left space-y-4 mb-8 flex-grow border-t border-gray-100 pt-8 font-inter">
                     {points.map((point, pIdx) => (
                       <li key={pIdx} className="flex items-start gap-3 text-sm md:text-[15px] font-inter font-bold text-gray-800 transition-all">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span className="leading-tight sm:leading-relaxed text-wrap-balance">{point.trim()}</span>
                       </li>
                     ))}
                  </ul>
                  
                  <div className="w-full">
                     <a 
                       href={`${whatsappLink}${t.services.categories[service.id]} services.`} 
                       target="_blank" 
                       rel="noreferrer"
                       className="bg-black text-white w-full h-14 md:h-16 rounded-xl flex items-center justify-center gap-3 text-[10px] md:text-xs font-inter font-black uppercase tracking-[0.2em] shadow-xl shadow-black/10 active:scale-95 transition-all"
                     >
                        Service Assistance
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                     </a>
                  </div>
                </div>
              );
           })}
        </div>
      </div>
    </section>
  );
}
