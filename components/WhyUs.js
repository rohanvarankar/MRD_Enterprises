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
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block px-3 py-1 mb-4 sm:mb-6 rounded-full bg-orange-50 text-orange-600 text-xs sm:text-sm font-bold tracking-wider uppercase border border-orange-100">
            {t.whyUs.badge || "Our Benefits"}
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-poppins font-bold text-black uppercase tracking-tight mb-3 sm:mb-4 text-center leading-tight sm:leading-snug text-wrap-balance">
            {t.whyUs.title}
          </h2>
          <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            const isLast = reason.id === "5";
            return (
              <div
                key={reason.id}
                className={`bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-orange-100/50 group ${
                  isLast ? "lg:col-start-2" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${reason.bg} flex items-center justify-center mb-4 sm:mb-6 shadow-sm group-hover:scale-105 transition-transform`}
                >
                  <Icon size={26} className={reason.color} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
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
