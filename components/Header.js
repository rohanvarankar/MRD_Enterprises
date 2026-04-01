"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, Globe, ChevronRight } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", name: t.nav.home, href: "#home" },
    { id: "services", name: t.nav.services, href: "#services" },
    { id: "about", name: t.nav.about, href: "#about" },
    { id: "contact", name: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <header className={`sticky top-0 z-[1000] w-full bg-white border-b border-gray-100 transition-all duration-300 ${scrolled ? "shadow-md h-16" : "shadow-sm h-20 lg:h-24"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between font-inter">
          
          {/* Branding Left - Highly Responsive */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className={`${scrolled ? "w-7 h-7" : "w-10 h-10 sm:w-12 sm:h-12"} bg-white border-2 border-black rounded p-1 flex items-center justify-center transition-all overflow-hidden`}>
               <img 
                 src="/logo.png" 
                 alt="Logo" 
                 className="w-full h-full object-contain"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.parentElement.innerHTML = '<span class="text-black font-black text-lg">M</span>';
                 }}
               />
            </div>
            <div className="flex flex-col">
              <span className={`${scrolled ? "text-base" : "text-lg sm:text-xl lg:text-2xl"} font-poppins font-black tracking-tighter text-black flex items-center gap-1 transition-all leading-none`}>
                 MRD <span className="text-orange-500 uppercase">ENT<span className="hidden sm:inline">ERPRISES</span></span>
              </span>
              {!scrolled && <span className="text-[10px] font-black text-black uppercase tracking-widest hidden lg:block transition-all mt-1">Official Doc Hub</span>}
            </div>
          </Link>

          {/* Navigation Hub (Desktop) - 100% PURE BLACK */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-8 border-r-2 border-black mr-8 pr-8">
              {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={link.href} 
                  className="text-xs font-black text-black hover:text-orange-500 uppercase tracking-[0.2em] transition-colors font-inter"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center gap-6">
              <LanguageSwitcher />
              <a 
                href="tel:+919082764520" 
                className="bg-black text-white px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl active:scale-95 border-2 border-black"
              >
                {t.hero.callNow}
              </a>
            </div>
          </div>

          {/* Dynamic Mobile Interface Hub */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-4 ml-auto">
             {/* Small Language Switcher for Mobile */}
             <div className="scale-75 sm:scale-100 transition-all origin-right">
                <LanguageSwitcher />
             </div>
             <button 
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
               className="text-black border-2 border-black p-2 rounded-lg transition active:scale-95 shadow-sm bg-white"
               aria-label="Toggle Menu"
             >
               {mobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
             </button>
          </div>
        </div>

        {/* Premium Full-Screen Mobile Drawer */}
        <div className={`fixed inset-0 z-[999] bg-white transition-all duration-500 lg:hidden font-inter ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"}`}>
           <div className="flex flex-col h-full pt-28 px-6 pb-12">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.id} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-black text-black py-5 border-b-2 border-black uppercase tracking-tighter flex items-center justify-between group active:text-orange-500"
                  >
                    {link.name}
                    <ChevronRight className="w-6 h-6 text-orange-500 transition-transform group-active:translate-x-2" />
                  </a>
                ))}
              </nav>
              
              <div className="mt-auto space-y-4">
                 <div className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-6 border-b-2 border-orange-500 pb-2 inline-block">Citizen Support HUB</div>
                 <div className="grid grid-cols-1 gap-4">
                    <a href="tel:+919082764520" className="bg-black text-white h-16 rounded-xl flex items-center justify-center gap-4 text-xs font-black uppercase tracking-widest shadow-2xl active:scale-95 border-2 border-black transition-all">
                       <Phone size={18} />
                       {t.hero.callNow}
                    </a>
                    <a href="https://wa.me/919082764520" className="bg-green-500 text-white h-16 rounded-xl flex items-center justify-center gap-4 text-xs font-black uppercase tracking-widest shadow-2xl active:scale-95 transition-all">
                       <MessageCircle size={20} />
                       {t.hero.whatsapp}
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </header>

      {/* TACTICAL MOBILE BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-[2000] lg:hidden bg-white border-t-2 border-black p-3 pb-safe-area shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex items-center gap-3 animate-fade-in font-inter">
         <a href="tel:+919082764520" className="flex-1 bg-orange-500 text-white h-14 rounded-xl flex items-center justify-center gap-3 text-[10px] sm:text-xs font-black uppercase tracking-widest active:scale-95 transition-all shadow-xl">
            <Phone size={16} className="fill-white" />
            {t.hero.callNow}
         </a>
         <a href="https://wa.me/919082764520" className="flex-1 bg-green-500 text-white h-14 rounded-xl flex items-center justify-center gap-3 text-[10px] sm:text-xs font-black uppercase tracking-widest active:scale-95 transition-all shadow-xl">
            <MessageCircle size={18} className="fill-white" />
            {t.hero.whatsapp}
         </a>
      </div>
    </>
  );
}
