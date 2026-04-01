"use client";

import { useLanguage } from "../context/LanguageContext";
import { Phone, Mail, MapPin, Navigation, ExternalLink, HelpCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinksArr = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const footlineText = lang === 'en' 
    ? "MRD ENTERPRISES | CITIZEN SERVICE HUB THANE." 
    : lang === 'hi' 
      ? "एमआरडी एंटरप्राइजेज | नागरिक सेवा हब ठाणे।" 
      : "एमआरडी एंटरप्रायजेस | नागरिक सेवा केंद्र ठाणे।";

  return (
    <footer className="bg-white text-black border-t-8 border-orange-500 selection:bg-orange-500 selection:text-white font-inter">
      
      {/* Premium Multi-Column Hub */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-16 lg:py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Column 1: Massive Branding (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left transition-all">
               <div className="flex flex-col items-center lg:items-start gap-4">
                  <div className="w-16 h-16 bg-white border-2 border-black rounded-lg p-2 flex items-center justify-center overflow-hidden transition-transform hover:rotate-6">
                     <img 
                       src="/logo.png" 
                       className="w-full h-full object-contain" 
                       alt="Service Logo" 
                       onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.parentElement.innerHTML = '<span class="text-black font-black text-2xl font-poppins">M</span>';
                       }}
                     />
                  </div>
                  <div className="text-3xl font-poppins font-black tracking-tighter uppercase leading-none text-black">
                     MRD <span className="text-orange-500 uppercase">ENTERPRISES</span>
                  </div>
               </div>
               <p className="text-xs font-black text-black leading-relaxed uppercase tracking-widest leading-loose font-inter max-w-sm">
                  {t.footer.aboutDesc}
               </p>
               <div className="flex items-center gap-4 pt-6 border-t-4 border-black w-full justify-center lg:justify-start">
                  <span className="text-[10px] uppercase font-black tracking-[0.2em] underline underline-offset-8 decoration-2">{t.footer.certifiedBy}</span>
                  <div className="bg-black text-white px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded shadow-xl">{t.footer.msmeBadge}</div>
               </div>
            </div>

            {/* Column 2: Quick Links (lg:col-span-2) */}
            <div className="lg:col-span-2 space-y-10 text-center lg:text-left">
               <h4 className="text-sm font-poppins font-black uppercase tracking-[0.3em] inline-block border-b-4 border-orange-500 pb-2">
                 {t.footer.quickAccess}
               </h4>
               <ul className="space-y-4">
                  {quickLinksArr.map((link, idx) => (
                    <li key={idx}>
                       <Link href={link.href} className="text-xs font-black text-black hover:text-orange-500 transition-all flex items-center justify-center lg:justify-start gap-3 uppercase tracking-widest font-inter">
                          <ChevronRight size={14} className="text-orange-500" />
                          {link.name}
                       </Link>
                    </li>
                  ))}
               </ul>
            </div>

            {/* Column 3: Contact HUB (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-10 text-center lg:text-left">
               <h4 className="text-sm font-poppins font-black uppercase tracking-[0.3em] inline-block border-b-4 border-orange-500 pb-2">
                 Support Hub
               </h4>
               <ul className="space-y-8 font-inter">
                  <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                     <MapPin size={22} className="text-orange-500 flex-shrink-0" />
                     <span className="text-[11px] font-black text-black leading-relaxed uppercase tracking-widest leading-loose">{t.contact.addressText}</span>
                  </li>
                  <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                     <Phone size={20} className="text-orange-500 flex-shrink-0" />
                     <a href="tel:+919082764520" className="text-xs font-black text-black hover:text-orange-500 transition-all uppercase tracking-[0.1em] border-b-2 border-black">
                        +91 9082764520
                     </a>
                  </li>
               </ul>
            </div>

            {/* Column 4: Helpdesk Tactical (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-10 text-center lg:text-left">
               <h4 className="text-sm font-poppins font-black uppercase tracking-[0.3em] inline-block border-b-4 border-orange-500 pb-2">
                 Official Info
               </h4>
               <div className="bg-white p-8 rounded-2xl border-4 border-black transition-all cursor-default hover:bg-orange-50 shadow-2xl shadow-black/5 w-full">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                     <HelpCircle size={24} className="text-orange-500" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-black">
                       Citizen Notice
                     </span>
                  </div>
                  <p className="text-[10px] font-black text-black leading-relaxed uppercase tracking-widest leading-loose mb-6">
                     {t.footer.helpdeskNotice}
                  </p>
                  <Link href="#contact" className="flex items-center justify-center lg:justify-start gap-2 text-[10px] font-black uppercase tracking-widest text-orange-500 hover:text-black transition-all underline underline-offset-8">
                     {t.footer.viewHub}
                     <ExternalLink size={14} />
                  </Link>
               </div>
            </div>

         </div>
      </div>

      {/* Extreme Bottom Footline - MOBILE FIRST Responsive UI - REMOVED BLACK BG */}
      <div className="bg-gray-50 py-16 pb-28 sm:pb-32 lg:pb-16 font-inter border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 flex flex-col items-center justify-between gap-12 text-center md:text-left">
            <div className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-black leading-loose w-full transition-all text-wrap-balance">
               © {currentYear} {footlineText} <br className="md:hidden" /> <span className="font-black text-orange-500">{t.footer.rights}</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-[10px] font-black uppercase tracking-[0.3em] text-black border-t-2 border-black pt-10 w-full transition-all">
               <span className="hover:text-orange-500 cursor-pointer transition-all border-b-2 border-transparent hover:border-orange-500 decoration-2">{t.footer.terms}</span>
               <span className="hover:text-orange-500 cursor-pointer transition-all border-b-2 border-transparent hover:border-orange-500 decoration-2">{t.footer.privacy}</span>
               <span className="hover:text-orange-500 cursor-pointer transition-all border-b-2 border-transparent hover:border-orange-500 decoration-2 font-inter">{t.footer.accessibility}</span>
            </div>
         </div>
      </div>
    </footer>
  );
}
