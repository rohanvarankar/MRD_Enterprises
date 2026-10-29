"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import {
  Phone,
  MapPin,
  Clock,
  Navigation,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const { t, lang } = useLanguage();
  const [logoError, setLogoError] = useState(false);
  const currentYear = new Date().getFullYear();

  const GOOGLE_MAPS_DIRECTIONS_URL =
    "https://www.google.com/maps/dir//MRD+ENTERPRISES,+Shop+No.+32,+Raigad+Chawl,+Aazad+Nagar,+Kolshi+Road,+Thane+(W)+-+400607";

  const quickLinksArr = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const footlineText =
    lang === "en"
      ? "MRD ENTERPRISES | CITIZEN SERVICE HUB THANE"
      : lang === "hi"
      ? "एमआरडी एंटरप्राइजेज | नागरिक सेवा हब ठाणे"
      : "एमआरडी एंटरप्रायजेस | नागरिक सेवा केंद्र ठाणे";

  return (
    <footer className="bg-white text-black border-t-4 border-orange-500 selection:bg-orange-500 selection:text-white font-sans">
      {/* 4-Column Balanced Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Business Identity (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg p-1.5 flex items-center justify-center flex-shrink-0 shadow-sm">
                {logoError ? (
                  <span className="text-black font-bold text-xl font-poppins">
                    M
                  </span>
                ) : (
                  <Image
                    src="/logo.png"
                    alt="MRD Enterprises Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    onError={() => setLogoError(true)}
                  />
                )}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-poppins font-bold tracking-tight uppercase leading-none text-black">
                  MRD <span className="text-orange-500">ENTERPRISES</span>
                </div>
                <div className="text-xs font-sans font-semibold text-gray-700 tracking-wide mt-1">
                  {t.footer.proprietor}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
              {t.footer.aboutDesc}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-[11px] uppercase font-semibold tracking-wider text-gray-500">
                {t.footer.certifiedBy}
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-black text-white text-[11px] font-bold uppercase tracking-wider rounded shadow-sm">
                {t.footer.msmeBadge}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h3 className="text-xs sm:text-sm font-poppins font-bold uppercase tracking-wider text-black border-b-2 border-orange-500 pb-1.5 inline-block">
              {t.footer.quickAccess}
            </h3>
            <ul className="space-y-2.5">
              {quickLinksArr.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded py-0.5"
                  >
                    <ChevronRight size={14} className="text-orange-500 flex-shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Operating Hours (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h3 className="text-xs sm:text-sm font-poppins font-bold uppercase tracking-wider text-black border-b-2 border-orange-500 pb-1.5 inline-block">
              {t.footer.supportHub}
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-700">
              {/* Address */}
              <li className="flex items-start gap-2.5">
                <MapPin size={17} className="text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed break-words">
                  {t.contact.addressText}
                </span>
              </li>

              {/* Telephone */}
              <li className="flex items-center gap-2.5">
                <Phone size={17} className="text-orange-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+919082764520"
                  className="font-bold text-gray-900 hover:text-orange-600 transition-colors underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                  aria-label={`Call MRD Enterprises at ${t.footer.phoneDisplay || "090827 64520"}`}
                >
                  {t.footer.phoneDisplay || "090827 64520"}
                </a>
              </li>

              {/* Operating Hours */}
              <li className="flex items-start gap-2.5 pt-1 border-t border-gray-100">
                <Clock size={17} className="text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-0.5 leading-snug">
                  <div className="font-semibold text-gray-900">
                    {t.contact.hoursTitle}
                  </div>
                  <div className="text-gray-600">{t.contact.hoursWeekdays}</div>
                  <div className="text-gray-600">{t.contact.hoursSunday}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Citizen Information (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h3 className="text-xs sm:text-sm font-poppins font-bold uppercase tracking-wider text-black border-b-2 border-orange-500 pb-1.5 inline-block">
              {t.footer.officialInfo}
            </h3>

            <div className="bg-orange-50/60 border border-orange-200 rounded-xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2">
                <HelpCircle size={16} className="text-orange-600 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-poppins font-bold uppercase tracking-wider text-black">
                  {t.footer.citizenNotice}
                </span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t.footer.helpdeskNotice}
              </p>
              <div className="pt-1">
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-orange-600 hover:bg-orange-700 active:scale-95 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-1"
                  aria-label={`${t.contact.getDirection} to MRD Enterprises on Google Maps`}
                >
                  <span>{t.contact.getDirection}</span>
                  <Navigation size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-200 py-6 pb-24 sm:pb-6 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-xs text-gray-600 leading-relaxed">
            © {currentYear} {footlineText}.{" "}
            <span className="font-semibold text-gray-800">{t.footer.rights}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-gray-600">
            <span className="hover:text-orange-600 cursor-pointer transition-colors">
              {t.footer.terms}
            </span>
            <span className="hover:text-orange-600 cursor-pointer transition-colors">
              {t.footer.privacy}
            </span>
            <span className="hover:text-orange-600 cursor-pointer transition-colors">
              {t.footer.accessibility}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
