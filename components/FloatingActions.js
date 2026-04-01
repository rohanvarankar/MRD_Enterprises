"use client";

import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappLink = "https://wa.me/919082764520?text=Hello%20MRD%20Enterprises,%20I'm%20ready%20to%20start%20my%20documentation%20work.";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Floating Actions - Strictly WhatsApp (Green) and Call (Orange) */}
      <div className="hidden lg:flex fixed bottom-10 right-10 z-[500] flex-col gap-5">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-white text-gray-800 rounded-full border border-gray-200 shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all group active:scale-90 animate-[fadeIn_0.3s_ease-out]"
            aria-label="Scroll to Top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        )}

        <a 
          href="tel:+919082764520" 
          className="w-16 h-16 bg-orange-500 text-white rounded-full shadow-[0_20px_50px_-10px_rgba(249,115,22,0.3)] flex items-center justify-center hover:bg-orange-600 transition-all relative group hover:scale-110 active:scale-95"
          aria-label="Official Helpdesk Support"
        >
          <Phone size={28} className="fill-white" />
          <div className="absolute right-full mr-6 px-4 py-2.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-2xl">
             Official Helpdesk
          </div>
        </a>
        
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noreferrer"
          className="w-16 h-16 bg-green-500 text-white rounded-full shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] flex items-center justify-center hover:bg-green-600 transition-all relative group hover:scale-110 active:scale-95"
          aria-label="WhatsApp Support Desk"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-20 pointer-events-none"></div>
          <MessageCircle size={32} className="fill-white" />
          <div className="absolute right-full mr-6 px-4 py-2.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-2xl">
             WhatsApp Desk
          </div>
        </a>
      </div>

      {/* Mobile Sticky Bottom Service Bar - Strictly WhatsApp (Green) and Call (Orange) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[1000] p-4 bg-white border-t border-gray-100 flex gap-4 safe-p-bottom shadow-[0_-15px_30px_rgba(0,0,0,0.06)] animate-[fadeIn_0.5s_ease-out]">
         <a 
           href="tel:+919082764520" 
           className="flex-1 h-14 bg-orange-500 text-white rounded-lg font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all"
         >
           <Phone size={18} className="fill-white" />
           Call Now
         </a>
         <a 
           href={whatsappLink} 
           target="_blank" 
           rel="noreferrer" 
           className="flex-1 h-14 bg-green-500 text-white rounded-lg font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all"
         >
           <MessageCircle size={20} className="fill-white" />
           WhatsApp
         </a>
      </div>
    </>
  );
}
