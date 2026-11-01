import React from 'react';
import { MessageCircle, ShieldCheck, Truck, Award, Globe, Phone } from 'lucide-react';

interface CorporatePillarsProps {
  onOpenWhatsApp: (ref?: string) => void;
}

export const CorporatePillars: React.FC<CorporatePillarsProps> = ({ onOpenWhatsApp }) => {
  const phoneNumber = '+212 635 487 673';
  const whatsappUrl = 'https://wa.me/212635487673?text=Bonjour,%20je%20souhaite%20demander%20une%20cotation%20pour%20des%20roulements%20HBSJ%20ou%20USJ.';

  return (
    <section id="commercial" className="py-12 sm:py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background world map dots */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#0052cc_2px,transparent_2px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0052cc] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-2.5">
              <span>ENGAGEMENTS INDUSTRIELS & SERVICE CLIENT</span>
              <span className="text-slate-400">·</span>
              <span>YOUR RELIABLE PARTNER</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0a192f]">
              Nos 4 Engagements Industriels & Service WhatsApp
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
            Fabricant direct engagé auprès des professionnels et grossistes : acier 100Cr6 haute résistance, approvisionnement régulier et réponse instantanée sur WhatsApp pour toutes vos cotations.
          </p>
        </div>

        {/* 4 Pillars - Direct adaptation of the business card */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl p-4 sm:p-6 mb-10 relative overflow-hidden">
          
          <div className="text-center mb-6 pb-4 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052cc]">
              Your Reliable Partner in Bearings & Auto Parts
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-0 lg:divide-x divide-slate-200">
            
            {/* Pillar 1: High Quality Products */}
            <div className="px-4 py-2 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 text-[#0052cc] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-base font-extrabold text-[#0a192f] mb-1">
                High Quality Products
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Acier 100Cr6 (GCr15), dureté 60-64 HRC, traitement thermique sous vide et tolérances strictes ISO.
              </p>
            </div>

            {/* Pillar 2: Stable Supply */}
            <div className="px-4 py-2 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 text-[#0052cc] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="text-base font-extrabold text-[#0a192f] mb-1">
                Stable Supply
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Arrivages continus par conteneurs et stock physique disponible immédiatement dans notre filiale.
              </p>
            </div>

            {/* Pillar 3: Competitive Prices */}
            <div className="px-4 py-2 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 text-[#0052cc] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-base font-extrabold text-[#0a192f] mb-1">
                Competitive Prices
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Tarifs directs d'usine sans aucun intermédiaire pour maximiser vos marges à la distribution.
              </p>
            </div>

            {/* Pillar 4: Global Service */}
            <div className="px-4 py-2 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 text-[#0052cc] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-base font-extrabold text-[#0a192f] mb-1">
                Global Service
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Expéditions directes d'usine, fret maritime et logistique internationale pour conteneurs et palettes.
              </p>
            </div>

          </div>
        </div>

        {/* Corporate Direct WhatsApp Banner (No individual personal details) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-gradient-to-r from-[#0052cc] via-[#0041a3] to-[#07172d] text-white p-6 sm:p-10">
          
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:14px_14px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-xs font-bold tracking-wide">
                <span>SERVICE COMMERCIAL DIRECT</span>
                <span>·</span>
                <span>RÉPONSE IMMÉDIATE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                Besoin d'une Cotation ou d'un Renseignement ?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Pour vérifier les spécifications d'une référence, obtenir une cotation usine selon vos volumes ou organiser une expédition internationale, contactez-nous directement sur WhatsApp.
              </p>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/30 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Ouvrir WhatsApp Commercial (+212 635 487 673)</span>
              </a>

              <a
                href="tel:+212635487673"
                className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>Appeler Directement</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
