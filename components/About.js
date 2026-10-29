"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { Award, Users, Clock, FileCheck2, ArrowRight } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const trustPoints = [
    { icon: Award, label: t.about.points.point1 },
    { icon: Users, label: t.about.points.point2 },
    { icon: Clock, label: t.about.points.point3 },
    { icon: FileCheck2, label: t.about.points.point4 }
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-20 lg:py-24 bg-white selection:bg-orange-500 selection:text-white scroll-mt-20 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Visual Hub - Mobile First (Image first on mobile, left column on desktop) */}
          <div className="lg:col-span-5 order-1 animate-fade-in">
            <div className="relative rounded-2xl border-2 border-black/10 sm:border-black/15 shadow-lg bg-gray-50 overflow-hidden max-w-md mx-auto lg:max-w-none group">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80"
                  alt="MRD Enterprises citizen document consultation and official verification desk in Thane"
                  width={600}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Verified Service Metric Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-10 bg-white/95 backdrop-blur-sm border-2 border-black rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="text-2xl sm:text-3xl font-poppins font-black text-black leading-none">
                    90<span className="text-orange-500">+</span>
                  </div>
                  <div className="border-l border-gray-200 pl-3">
                    <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-900 font-sans leading-tight">
                      {t.about.points.registered}
                    </div>
                    {t.about.points.registeredSub && (
                      <div className="text-[10px] sm:text-[11px] text-gray-700 font-sans font-medium mt-0.5">
                        {t.about.points.registeredSub}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Content Hub (Right column on desktop, following image on mobile) */}
          <div className="lg:col-span-7 order-2 text-left animate-fade-in">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[11px] font-bold uppercase tracking-wider rounded-md mb-4 shadow-sm font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" aria-hidden="true" />
              <span>{t.about.points.hubNotice}</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-poppins font-bold text-black uppercase tracking-tight leading-tight sm:leading-snug mb-3 text-wrap-balance">
              {t.about.points.headingPart1}{" "}
              <span className="text-orange-500">{t.about.points.headingPart2}</span>
            </h2>

            {/* Brand Accent Line */}
            <div className="w-16 h-1.5 bg-orange-500 rounded-full mb-6"></div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal mb-8 max-w-2xl font-sans text-wrap-balance">
              {t.about.description}
            </p>

            {/* Clean 2-Column Trust Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 font-sans">
              {trustPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-orange-50/60 hover:border-orange-300 transition-all duration-200 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-orange-600 flex-shrink-0 shadow-sm">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                      {point.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Contextual CTA */}
            <div>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 bg-black text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-orange-700 transition-all shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 font-sans group"
              >
                <span>{t.about.points.cta}</span>
                <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
