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
       text: "+91 9082764520", 
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

  const mapLink = "https://www.google.com/maps/dir//MRD+ENTERPRISES,+Raigad+Chawl,+Azad+Nagar,+Opp+Regency+Tower,+Kolshet+Road,+Thane+-+400607";

  return (
    <section id="contact" className="py-12 md:py-24 bg-white selection:bg-orange-500 selection:text-white scroll-mt-20 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-10 flex flex-col items-center">
        
        {/* Section Header - High Fluidity */}
        <div className="text-center mb-16 flex flex-col items-center animate-fade-in transition-all">
          <h2 className="text-3xl md:text-5xl font-poppins font-black text-black uppercase tracking-tighter mb-4 text-center leading-tight sm:leading-none text-wrap-balance">
             {t.contact.hubNotice}
          </h2>
          <div className="w-20 h-2 bg-orange-500 rounded-full transition-all"></div>
          <p className="text-base sm:text-lg lg:text-xl text-black max-w-2xl leading-relaxed font-black mt-8 text-wrap-balance">
             {t.contact.description}
          </p>
        </div>

        {/* 3 Cards - Hub Hub System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full mb-16 animate-fade-in font-inter">
           {details.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div 
                  key={detail.id} 
                  className="bg-white border-2 border-black rounded-xl p-8 sm:p-12 hover:bg-orange-50 transition-all duration-300 flex flex-col items-center text-center group shadow-xl overflow-hidden"
                >
                  <div className={`mb-8 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${detail.bg} flex items-center justify-center p-3 sm:p-4 border-2 border-black shadow-xl transition-transform group-hover:scale-110 shadow-orange-500/5`}>
                     <Icon size={32} className={detail.color} />
                  </div>
                  <div className="flex-grow w-full overflow-hidden">
                     <h4 className="text-[10px] font-black text-black uppercase tracking-[0.3em] mb-6 transition-all">{detail.label}</h4>
                     {detail.link ? (
                       <a 
                         href={detail.link} 
                         className="text-black text-base sm:text-xl lg:text-2xl font-poppins font-black hover:text-orange-500 transition-colors uppercase tracking-tight break-all block px-1"
                       >
                         {detail.text}
                       </a>
                     ) : (
                       <p className="text-black text-[13px] sm:text-base font-black leading-relaxed max-w-xs uppercase tracking-tight transition-all text-wrap-balance mx-auto">{detail.text}</p>
                     )}
                  </div>
                </div>
              );
           })}
        </div>

        {/* Full-width Map Overlay - Optimized Mobile Scaling */}
        <div className="w-full h-[450px] sm:h-[600px] rounded-3xl overflow-hidden shadow-2xl relative border-4 sm:border-8 border-black animate-fade-in transition-all">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.234149008!2d72.978!3d19.221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93a0273a5a5%3A0xe549cd97b4ec85c1!2sAzad%20Nagar%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714479524584!5m2!1sen!2sin" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className="w-full h-full object-cover transition-all duration-1000 opacity-95 hover:opacity-100"
             title="MRD Enterprises Location Map"
           ></iframe>
           
           {/* Direct Action HUB Badge Link - Extra Tactical on Mobile */}
           <div className="absolute inset-x-4 bottom-8 lg:inset-x-0 lg:flex lg:justify-center px-4 lg:px-0 z-50">
             <a 
               href={mapLink} 
               target="_blank" 
               rel="noreferrer"
               className="btn-primary w-full sm:w-auto font-inter"
             >
               <Navigation size={22} className="fill-white transition-transform group-hover:rotate-12" />
               {t.contact.getDirection}
               <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
             </a>
           </div>
        </div>
      </div>
    </section>
  );
}
