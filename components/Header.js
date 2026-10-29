"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Phone, MessageCircle, Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: "home", name: t.nav.home, href: "#home" },
    { id: "services", name: t.nav.services, href: "#services" },
    { id: "about", name: t.nav.about, href: "#about" },
    { id: "contact", name: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-[1000] w-full bg-white border-b border-gray-100 transition-all duration-300 ${
          scrolled ? "shadow-md h-16" : "shadow-sm h-18 sm:h-20 lg:h-24"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-full flex items-center justify-between font-sans">
          {/* Branding Left */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 flex-shrink min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded"
          >
            <div
              className={`${
                scrolled ? "w-8 h-8" : "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12"
              } bg-white border-2 border-black rounded p-1 flex items-center justify-center transition-all overflow-hidden flex-shrink-0`}
            >
              {logoError ? (
                <span className="text-black font-bold text-base sm:text-lg font-poppins">
                  M
                </span>
              ) : (
                <Image
                  src="/logo.png"
                  alt="MRD Enterprises Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority={true}
                  onError={() => setLogoError(true)}
                />
              )}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-xl md:text-2xl font-poppins font-black tracking-tight text-black uppercase leading-none truncate">
                MRD <span className="text-orange-500">ENTERPRISES</span>
              </span>
              <span className="text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-800 leading-tight truncate">
                {t.header.citizenServiceHub}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav
              aria-label="Desktop Navigation"
              className="flex items-center gap-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-xs font-bold text-gray-700 hover:text-orange-600 uppercase tracking-wider transition-colors py-1 border-b-2 border-transparent hover:border-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-5">
              <LanguageSwitcher />
              <a
                href="tel:+919082764520"
                className="bg-black text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-orange-700 transition-all shadow-md active:scale-95 border-2 border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 font-sans"
              >
                {t.hero.callNow}
              </a>
            </div>
          </div>

          {/* Mobile Interface Hub */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2.5 ml-auto flex-shrink-0">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-black border-2 border-black p-1.5 sm:p-2 rounded-lg transition active:scale-95 shadow-sm bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 flex-shrink-0"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={
                mobileMenuOpen ? t.header.closeMenu : t.header.openMenu
              }
            >
              {mobileMenuOpen ? (
                <X size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
              ) : (
                <Menu size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Full-Screen Mobile Drawer */}
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label={t.header.mobileNav}
          aria-hidden={!mobileMenuOpen}
          className={`fixed inset-0 z-[999] bg-white overflow-y-auto font-sans lg:hidden ${
            mobileMenuOpen
              ? "block opacity-100 pointer-events-auto"
              : "hidden opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col min-h-full pt-20 sm:pt-24 px-5 sm:px-6 pb-8 sm:pb-12">
            <nav
              aria-label="Mobile Navigation Menu"
              className="flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg sm:text-2xl font-bold text-black py-3.5 border-b-2 border-black uppercase tracking-tight flex items-center justify-between group active:text-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded-lg px-2 font-sans"
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 text-orange-500 transition-transform group-active:translate-x-2" />
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-6 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-black mb-2 border-b-2 border-orange-500 pb-1.5 inline-block font-sans">
                {t.header.citizenSupportHub}
              </div>
              <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                <a
                  href="tel:+919082764520"
                  className="bg-black text-white h-12 sm:h-14 rounded-xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg active:scale-95 border-2 border-black transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 font-sans"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  <span className="truncate">{t.hero.callNow}</span>
                </a>
                <a
                  href="https://wa.me/919082764520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 hover:bg-green-800 text-white h-12 sm:h-14 rounded-xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 font-sans"
                >
                  <MessageCircle size={18} className="flex-shrink-0" />
                  <span className="truncate">{t.hero.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
