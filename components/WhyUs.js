"use client";

import { useLanguage } from "../context/LanguageContext";
import { ThumbsUp, Wallet, CheckCircle, Shield, Smile } from "lucide-react";

export default function WhyUs() {
  const { t } = useLanguage();

  const reasons = [
    { id: "1", icon: ThumbsUp, color: "text-orange-600", bg: "bg-orange-50" },
    { id: "2", icon: Wallet, color: "text-orange-600", bg: "bg-orange-50" },
    { id: "3", icon: CheckCircle, color: "text-orange-600", bg: "bg-orange-50" },
    { id: "4", icon: Shield, color: "text-orange-600", bg: "bg-orange-50" },
    { id: "5", icon: Smile, color: "text-orange-600", bg: "bg-orange-50" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-50 text-orange-600 text-sm font-bold tracking-widest uppercase border border-orange-100">
            Our Benefits
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900">{t.whyUs.title}</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            const isLast = reason.id === "5";
            return (
              <div 
                key={reason.id} 
                className={`bg-white p-8 rounded-3xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 group ${isLast ? "lg:col-start-2" : ""}`}
              >
                <div className={`w-16 h-16 rounded-2xl ${reason.bg} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon size={32} className={reason.color} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {t.whyUs.points[reason.id]}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
