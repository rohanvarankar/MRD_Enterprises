"use client";

import { useLanguage } from "../context/LanguageContext";
import { Phone, Mail, MapPin, Navigation, ArrowRight } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  const details = [
    { 
       id: "address", 
       icon: MapPin, 
       label: t.contact.addressTitle, 
       text: t.contact.addressText, 
       color: "text-orange-500",
       bg: "bg-orange-50" 
    },
    { 
       id: "phone", 
       icon: Phone, 
       label: t.contact.phone, 
       text: t.contact.phoneDisplay || "090827 64520",
       link: "tel:+919082764520", 
       color: "text-orange-500",
       bg: "bg-orange-50" 
    },
    { 
       id: "email", 
       icon: Mail, 
       label: t.contact.email, 
       text: "mangesh10j@gmail.com", 
       link: "mailto:mangesh10j@gmail.com", 
       color: "text-orange-500",
       bg: "bg-orange-50" 
    },
  ];

  const mapLink = "https://www.google.com/maps/dir//MRD+ENTERPRISES,+Shop+No.+32,+Raigad+Chawl,+Aazad+Nagar,+Kolshi+Road,+Thane+(W)+-+400607";

  return (
    <section id="contact" className="py-12 md:py-24 bg-white selection:bg-orange-500 selection:text-white scroll-mt-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header - High Fluidity */}
        <div className="text-center mb-10 sm:mb-16 flex flex-col items-center animate-fade-in transition-all">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-poppins font-bold text-black uppercase tracking-tight mb-3 sm:mb-4 text-center leading-tight sm:leading-snug text-wrap-balance">
             {t.contact.hubNotice}
          </h2>
          <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-orange-500 rounded-full transition-all"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed font-normal mt-4 sm:mt-6 text-wrap-balance">
             {t.contact.description}
          </p>

          {/* Authoritative Operating Hours Badge */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 px-3.5 sm:px-6 py-2.5 sm:py-3.5 bg-gray-50 border-2 border-black rounded-xl text-xs sm:text-sm font-sans font-medium text-gray-900 mt-6 sm:mt-8 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-black">{t.contact.hoursTitle}:</span>
            </div>
            <span>{t.contact.hoursWeekdays}</span>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span>{t.contact.hoursSunday}</span>
          </div>
        </div>

        {/* 3 Cards - Hub Hub System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full mb-12 sm:mb-16 animate-fade-in font-sans">
           {details.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div 
                  key={detail.id} 
                  className="bg-white border-2 border-black rounded-xl p-6 sm:p-8 lg:p-10 hover:bg-orange-50 transition-all duration-300 flex flex-col items-center text-center group shadow-xl overflow-hidden"
                >
                  <div className={`mb-6 sm:mb-8 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl ${detail.bg} flex items-center justify-center p-3 sm:p-4 border-2 border-black shadow-xl transition-transform group-hover:scale-110 shadow-orange-500/5`}>
                     <Icon size={28} className={`${detail.color} sm:w-8 sm:h-8`} />
                  </div>
                  <div className="flex-grow w-full overflow-hidden">
                     <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 sm:mb-4 transition-all">{detail.label}</h4>
                     {detail.link ? (
                       <a 
                         href={detail.link} 
                         className="text-black text-sm sm:text-lg lg:text-xl font-poppins font-bold hover:text-orange-700 transition-colors uppercase tracking-tight break-words block px-1"
                       >
                         {detail.text}
                       </a>
                     ) : (
                       <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-xs transition-all text-wrap-balance mx-auto">{detail.text}</p>
                     )}
                  </div>
                </div>
              );
           })}
        </div>

        {/* Full-width Map Overlay - Optimized Mobile Scaling */}
        <div className="w-full h-[320px] sm:h-[450px] lg:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative border-2 sm:border-4 lg:border-8 border-black animate-fade-in transition-all">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.234149008!2d72.978!3d19.221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93a0273a5a5%3A0xe549cd97b4ec85c1!2sAzad%20Nagar%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714479524584!5m2!1sen!2sin" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className="w-full h-full object-cover transition-all duration-1000 opacity-95 hover:opacity-100"
             title={t.contact.mapTitle || "MRD Enterprises Location Map"}
           ></iframe>
           
           {/* Direct Action HUB Badge Link - Extra Tactical on Mobile */}
           <div className="absolute inset-x-3 bottom-4 sm:bottom-6 sm:inset-x-0 sm:flex sm:justify-center px-2 sm:px-0 z-50">
             <a
               href={mapLink}
               target="_blank"
               rel="noreferrer"
               className="btn-primary w-full sm:w-auto font-sans h-12 sm:h-14 text-xs sm:text-sm"
             >
               <Navigation size={20} className="fill-white transition-transform group-hover:rotate-12 flex-shrink-0" />
               <span>{t.contact.getDirection}</span>
               <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
             </a>
           </div>
        </div>
      </div>
    </section>
  );
}