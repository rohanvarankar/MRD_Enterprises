"use client";

import { useLanguage } from "../context/LanguageContext";
import { Star, ExternalLink, MessageSquare, CheckCircle2 } from "lucide-react";
import {
  reviewsData,
  businessRating,
  GOOGLE_REVIEWS_URL,
} from "../data/reviewsData";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section
      id="reviews"
      className="py-12 md:py-24 bg-white selection:bg-orange-500 selection:text-white scroll-mt-20 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 flex flex-col items-center animate-fade-in transition-all">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-poppins font-bold text-black uppercase tracking-tight mb-3 sm:mb-4 text-center leading-tight sm:leading-snug text-wrap-balance">
            {t.testimonials.title}
          </h2>
          <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-orange-500 rounded-full mb-4 sm:mb-6 transition-all" />
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed font-normal text-center text-wrap-balance">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Business Rating Summary Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 mb-10 sm:mb-14 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            {/* Left: Overall score & badge */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-6 w-full lg:w-auto">
              <div className="flex flex-col items-center justify-center bg-white border-2 border-orange-500 rounded-2xl w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 shadow-sm">
                <span className="text-3xl sm:text-4xl font-poppins font-extrabold text-black leading-none">
                  {businessRating.rating}
                </span>
                <span className="text-xs font-semibold text-gray-500 mt-1">
                  {businessRating.maxRating}
                </span>
                <div
                  className="flex items-center gap-0.5 mt-1"
                  aria-label={`${businessRating.rating} out of 5 stars`}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-orange-500 text-orange-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-950 border border-orange-300 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span>{t.testimonials.badge}</span>
                </div>
                <div className="text-lg sm:text-xl font-poppins font-bold text-gray-900">
                  {t.testimonials.reviewCount}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md leading-relaxed">
                  {t.testimonials.ratingNote}
                </p>
              </div>
            </div>

            {/* Right: CTA to Google Reviews */}
            <div className="w-full sm:w-auto flex-shrink-0 flex flex-col items-center sm:items-end">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 h-12 sm:h-14 bg-black text-white rounded-xl text-xs sm:text-sm font-sans font-bold uppercase tracking-wider hover:bg-orange-600 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
                aria-label={`${t.testimonials.viewOnGoogle} - MRD Enterprises`}
              >
                <span>{t.testimonials.viewOnGoogle}</span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
              <span className="text-[11px] text-gray-500 mt-2 font-medium">
                {t.testimonials.staticBadge}
              </span>
            </div>
          </div>
        </div>

        {/* Static Reviews Grid (6 Reviews) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {reviewsData.map((review) => {
            const initial = review.name.charAt(0);
            return (
              <div
                key={review.id}
                className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div
                      className="w-10 h-10 rounded-full bg-orange-100 text-orange-900 border border-orange-300 flex items-center justify-center font-poppins font-bold text-sm flex-shrink-0"
                      aria-hidden="true"
                    >
                      {initial}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm sm:text-base font-poppins font-bold text-black truncate">
                        {review.name}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {review.reviewCountText} • {review.date}
                      </div>
                    </div>
                  </div>

                  {/* Star Rating Display */}
                  <div
                    className="flex items-center gap-1 mb-3"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-orange-500 text-orange-500"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Review Body */}
                  <p className="text-xs sm:text-sm text-gray-800 font-sans leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Owner Response (if available) */}
                {review.ownerResponse && (
                  <div className="mt-4 pt-3.5 border-t border-gray-100">
                    <div className="pl-3 sm:pl-3.5 border-l-2 border-orange-500 bg-orange-50/70 rounded-r-xl p-3 text-xs leading-relaxed">
                      <div className="flex items-center gap-1.5 font-bold text-orange-950 mb-1">
                        <MessageSquare size={13} className="text-orange-600 flex-shrink-0" />
                        <span className="truncate">{t.testimonials.ownerResponseLabel}</span>
                        <span className="text-[10px] text-gray-500 font-normal ml-auto flex-shrink-0">
                          {review.ownerResponse.date}
                        </span>
                      </div>
                      <p className="text-gray-700 italic">
                        {review.ownerResponse.text}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
