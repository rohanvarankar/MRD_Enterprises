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
  Mail,
} from "lucide-react";

export default function Footer() {
  const { t, lang } = useLanguage();
  const [logoError, setLogoError] = useState(false);
  const currentYear = new Date().getFullYear();

  const dev = t.footer?.developer || {};
  const DEV_EMAIL_HREF =
    "mailto:rohan.manuware@gmail.com?subject=Website%20Development%20Inquiry";

  const GOOGLE_MAPS_DIRECTIONS_URL =
    "https://www.google.com/maps/dir//MRD+ENTERPRISES,+Raigad+Chawl,+Kolshet+Road,+Opp.+Regency+Tower,+Azad+Nagar,+Thane+West,+Maharashtra+400607";

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
      <div className="bg-gray-50 border-t border-gray-200 py-5 sm:py-6 font-sans">
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

      {/* Developer Attribution & Contact CTA */}
      <div className="relative z-10 bg-gray-100/90 border-t border-gray-200 py-6 sm:py-7 pb-28 sm:pb-8 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
            {/* Developer Details */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 text-xs text-gray-600">
                <span className="font-normal">{dev.attribution || "Designed & Developed by"}</span>
                <span className="font-bold text-black font-poppins text-xs sm:text-sm">
                  {dev.name || "Rohan Varankar"}
                </span>
                <span className="text-gray-400" aria-hidden="true">•</span>
                <span className="text-orange-600 font-semibold text-[11px] sm:text-xs uppercase tracking-wider">
                  {dev.role || "Software Engineer"}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-medium max-w-xl">
                {dev.message}
              </p>
            </div>

            {/* Email CTA Button & Direct Email */}
            <div className="flex-shrink-0 w-full sm:w-auto flex flex-col items-center md:items-end justify-center relative z-20 gap-1.5">
              <a
                id="developer-contact-cta"
                href={DEV_EMAIL_HREF}
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-white hover:bg-orange-500 border border-gray-300 hover:border-orange-500 text-gray-900 hover:text-white rounded-lg text-xs sm:text-sm font-bold tracking-wide shadow-sm hover:shadow transition-all duration-200 min-h-[44px] w-full sm:w-auto cursor-pointer pointer-events-auto relative z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                aria-label={`${dev.cta || "Contact for Website Development"} - rohan.manuware@gmail.com`}
                title="Contact Rohan Varankar for Website Development (rohan.manuware@gmail.com)"
              >
                <Mail size={16} className="text-orange-500 group-hover:text-white transition-colors flex-shrink-0 pointer-events-none" aria-hidden="true" />
                <span className="pointer-events-none">{dev.cta || "Contact for Website Development"}</span>
              </a>

              {/* Direct Email Supporting Label & Link */}
              <div className="flex flex-col items-center md:items-end text-center md:text-right pt-0.5">
                <span className="text-[11px] sm:text-xs text-gray-500 font-normal">
                  {dev.directEmailLabel || "Or email me directly:"}
                </span>
                <a
                  href="mailto:rohan.manuware@gmail.com"
                  className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline select-text cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-0.5 transition-colors tracking-tight"
                  aria-label="Direct email: rohan.manuware@gmail.com"
                >
                  rohan.manuware@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
