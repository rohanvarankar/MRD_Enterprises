"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  serviceCategories,
  ICON_MAP,
  getCategoryServices
} from "../data/servicesData";
import {
  Badge,
  Search,
  X,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  FileQuestion
} from "lucide-react";

export default function Services() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState({});
  const [allExpanded, setAllExpanded] = useState(false);

  const whatsappLink = "https://wa.me/919082764520?text=I'm interested in ";

  // Filter categories and their individual services by search query
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      return serviceCategories.map((cat) => ({
        ...cat,
        services: getCategoryServices(cat.id, t),
        isSearchMatch: false
      }));
    }

    return serviceCategories
      .map((cat) => {
        const catTitle = (t.services?.categories?.[cat.id] || "").toLowerCase();
        const catDesc = (t.services?.desc?.[cat.id] || "").toLowerCase();
        const allServices = getCategoryServices(cat.id, t);
        const matchingServices = allServices.filter((s) =>
          s.toLowerCase().includes(q)
        );
        const titleMatches = catTitle.includes(q) || catDesc.includes(q);

        return {
          ...cat,
          services: allServices,
          isSearchMatch: titleMatches || matchingServices.length > 0,
          matchedServices: matchingServices
        };
      })
      .filter((cat) => cat.isSearchMatch);
  }, [searchQuery, t]);

  const toggleCategory = (id) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleAll = () => {
    const nextState = !allExpanded;
    setAllExpanded(nextState);
    const updated = {};
    serviceCategories.forEach((cat) => {
      updated[cat.id] = nextState;
    });
    setExpandedCategories(updated);
  };

  return (
    <section
      id="services"
      className="py-12 md:py-24 bg-white scroll-mt-20 selection:bg-orange-500 selection:text-white overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 flex flex-col items-center animate-fade-in transition-all">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-poppins font-bold text-black uppercase tracking-tight mb-3 sm:mb-4 text-center leading-tight sm:leading-snug text-wrap-balance">
            {t.services.title}
          </h2>
          <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-orange-500 rounded-full transition-all"></div>
        </div>

        {/* Directory Controls: Search and Global Expansion */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 animate-fade-in">
          {/* Accessible Search Input */}
          <div className="relative flex-grow w-full">
            <label htmlFor="service-search-input" className="sr-only">
              {t.services.searchLabel}
            </label>
            <div className="absolute inset-y-0 left-0 pl-3.5 sm:pl-4 flex items-center pointer-events-none text-gray-400">
              <Search size={18} aria-hidden="true" className="sm:w-5 sm:h-5" />
            </div>
            <input
              id="service-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.services.searchPlaceholder}
              className="w-full pl-10 sm:pl-12 pr-10 py-3 sm:py-3.5 bg-gray-50 border-2 border-black rounded-xl text-xs sm:text-sm md:text-base font-sans text-gray-900 placeholder-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 transition-all shadow-sm"
              autoComplete="off"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label={t.services.clearSearch}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-500 hover:text-black transition-colors"
              >
                <X size={18} aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Expand / Collapse All Toggle Button */}
          <button
            type="button"
            onClick={toggleAll}
            className="w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-3.5 bg-white border-2 border-black rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black hover:bg-orange-50 hover:border-orange-600 hover:text-orange-700 transition-all shadow-sm flex items-center justify-center gap-2 sm:whitespace-nowrap active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
            aria-label={allExpanded ? t.services.collapseAll : t.services.expandAll}
          >
            <ChevronsUpDown size={18} aria-hidden="true" />
            <span>{allExpanded ? t.services.collapseAll : t.services.expandAll}</span>
          </button>
        </div>

        {/* Search Results Live Status */}
        {searchQuery.trim() && (
          <div className="text-center mb-8 text-xs sm:text-sm font-medium text-gray-600" aria-live="polite">
            {filteredCategories.length} {t.services.allCategories} • {searchQuery.trim()}
          </div>
        )}

        {/* Empty Search Results State */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 px-6 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 max-w-lg mx-auto animate-fade-in">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
              <FileQuestion size={32} aria-hidden="true" />
            </div>
            <h3 className="text-lg md:text-xl font-poppins font-bold text-black uppercase tracking-tight mb-2">
              {t.services.noResultsTitle}
            </h3>
            <p className="text-sm font-sans text-gray-600 leading-relaxed mb-6">
              {t.services.noResultsDesc}
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="px-6 py-3 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-orange-700 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
            >
              {t.services.clearSearch}
            </button>
          </div>
        ) : (
          /* Clean Responsive Grid (1-2-3 Columns) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 animate-fade-in">
            {filteredCategories.map((service) => {
              const Icon = ICON_MAP[service.icon] || Badge;
              const categoryTitle = t.services.categories?.[service.id] || service.id;
              const allServices = service.services || [];
              
              // Automatically expand when searching or when user has expanded
              const isExpanded =
                Boolean(searchQuery.trim()) ||
                allExpanded ||
                Boolean(expandedCategories[service.id]);
              const previewCount = 3;
              const hasMore = allServices.length > previewCount;
              const displayedServices = isExpanded
                ? allServices
                : allServices.slice(0, previewCount);

              return (
                <div
                  key={service.id}
                  className="bg-white border-2 border-black rounded-xl p-5 sm:p-7 lg:p-8 hover:bg-orange-50/50 transition-all duration-300 flex flex-col items-center text-center group h-full shadow-lg"
                >
                  {/* Category Icon */}
                  <div className="mb-4 sm:mb-6 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white border-2 border-orange-100 rounded-2xl flex items-center justify-center p-3 sm:p-4 transition-all duration-300 group-hover:scale-110 group-hover:border-orange-500 shadow-xl shadow-orange-500/5">
                    <Icon size={28} className="text-orange-500 sm:w-8 sm:h-8" aria-hidden="true" />
                  </div>

                  {/* Category Title */}
                  <h3
                    id={`service-heading-${service.id}`}
                    className="text-lg sm:text-xl font-poppins font-bold text-black mb-4 sm:mb-6 uppercase tracking-wide text-center leading-snug transition-all"
                  >
                    {categoryTitle}
                  </h3>

                  {/* Expandable Services Panel */}
                  <div
                    id={`service-panel-${service.id}`}
                    role="region"
                    aria-labelledby={`service-heading-${service.id}`}
                    className="w-full text-left flex-grow border-t border-gray-100 pt-5 sm:pt-6 mb-6 sm:mb-8 font-sans"
                  >
                    <ul className="space-y-3 sm:space-y-3.5">
                      {displayedServices.map((point, pIdx) => {
                        const isHighlighted =
                          searchQuery.trim() &&
                          point.toLowerCase().includes(searchQuery.trim().toLowerCase());

                        return (
                          <li
                            key={pIdx}
                            className={`flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-[15px] font-sans transition-all ${
                              isHighlighted
                                ? "font-semibold text-orange-950 bg-orange-100/60 p-1.5 rounded-lg border border-orange-300"
                                : "font-normal text-gray-700"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span className="leading-tight sm:leading-relaxed text-wrap-balance">
                              {point}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Accessible Expand / Collapse Trigger */}
                    {hasMore && !searchQuery.trim() && (
                      <button
                        type="button"
                        onClick={() => toggleCategory(service.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`service-panel-${service.id}`}
                        className="mt-4 pt-3 border-t border-dashed border-gray-200 w-full text-xs font-bold text-orange-700 hover:text-black flex items-center justify-between transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded px-1"
                      >
                        <span>
                          {isExpanded
                            ? t.services.showLess
                            : `+ ${allServices.length - previewCount} ${t.services.viewMore}`}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>

                  {/* Action Link: WhatsApp pre-filled with Category Title */}
                  <div className="w-full mt-auto">
                    <a
                      href={`${whatsappLink}${encodeURIComponent(categoryTitle)} services.`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-black text-white w-full h-12 sm:h-14 md:h-16 rounded-xl flex items-center justify-center gap-2.5 sm:gap-3 text-xs font-sans font-bold uppercase tracking-wider shadow-xl shadow-black/10 active:scale-95 transition-all hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
                      aria-label={`${t.services.serviceAssistance} - ${categoryTitle}`}
                    >
                      <span>{t.services.serviceAssistance}</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}