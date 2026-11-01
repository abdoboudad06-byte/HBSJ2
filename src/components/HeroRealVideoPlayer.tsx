import React, { useRef } from 'react';
import { ArrowRight, MessageCircle, FileText, Building2, Globe, ShieldCheck } from 'lucide-react';
import { HbsjBearingLogo } from './HbsjBearingLogo';

interface HeroRealVideoPlayerProps {
  onOpenWhatsApp: (ref?: string) => void;
  onGoToCatalog: () => void;
  onSelectBrand: (brand: 'HBSJ' | 'USJ') => void;
}

export const HeroRealVideoPlayer: React.FC<HeroRealVideoPlayerProps> = ({
  onOpenWhatsApp,
  onGoToCatalog,
  onSelectBrand,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="relative w-full bg-slate-50 text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Background World Dot Pattern - Emphasizing Global Footprint */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#0052cc_2px,transparent_2px)] [background-size:20px_20px]" />

      {/* =========================================================================
          MOBILE LAYOUT (< lg):
          1. Crystal-Clear Video Showcase
          2. Followed by global corporate info (Company in China, Official Branch in Morocco, Worldwide Sales)
          ========================================================================= */}
      <div className="lg:hidden flex flex-col w-full">
        
        {/* 1. Video Player prominently visible with clean aspect ratio */}
        <div className="relative w-full aspect-video sm:aspect-[16/10] bg-black overflow-hidden border-b-2 border-[#0052cc] shadow-xl">
          <video
            ref={videoRef}
            src="/assets/aistudio/bearing_mechanical_explained.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Minimal live indicator tag on video */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>CINÉMATIQUE ROULEMENT EN DIRECT</span>
          </div>

          <div className="absolute bottom-2.5 right-3 z-10 text-[10px] font-mono tracking-widest text-white bg-[#0052cc]/90 px-2.5 py-0.5 rounded font-bold backdrop-blur-sm">
            WORLDWIDE BEARING MANUFACTURER
          </div>
        </div>

        {/* 2. Corporate Information Below Video (Clean mobile view, China factory with European quality) */}
        <div className="px-4 py-6 space-y-4 bg-white">
          
          {/* Title in Deep Navy with Royal Blue Accent */}
          <div className="space-y-1">
            <h1 className="font-display text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight uppercase leading-tight">
              HBSJ & USJ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052cc] via-[#0066cc] to-[#0a192f]">
                BEARING INDUSTRY
              </span>
            </h1>
            <p className="text-xs text-slate-500 font-bold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>Usines en Chine · Qualité Européenne Certifiée · Export Mondial</span>
            </p>
          </div>

          {/* Value Proposition */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Fabricant direct de roulements industriels de haute précision dans nos propres usines en Chine. Conçus selon les standards et normes européennes les plus rigoureux, nous produisons et exportons nos marques de référence <strong>USJ</strong> (Normes Europe) et <strong>HBSJ</strong> (Top Qualité Chine) dans le monde entier.
          </p>

          {/* China Factory Quality & Global Stock Card */}
          <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200/90 space-y-1 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-[#0a192f] text-xs">
              <Building2 className="w-4 h-4 text-[#0052cc] shrink-0" />
              <span>Usines en Chine : 171 références industrielles pour export mondial</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Fabrication en acier 100Cr6 haute durabilité, contrôle métrologique tridimensionnel et expéditions directes d'usine par conteneurs et palettes.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col gap-2.5 pt-1">
            <button
              onClick={onGoToCatalog}
              className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0052cc] hover:bg-[#0041a3] active:scale-98 rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Consulter le Catalogue (171 Réf)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenWhatsApp()}
              className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 active:scale-98 rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Demander un Devis sur WhatsApp</span>
            </button>
          </div>

          {/* Official PDF Downloads */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2 text-xs">
            <span className="text-slate-500 text-[11px] font-medium">Catalogues officiels :</span>
            <div className="flex items-center gap-2.5">
              <a
                href="/public/assets/aistudio/hbsj_9847da1b.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0052cc] font-bold text-[#0052cc] underline flex items-center gap-1 font-mono text-[11px]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF HBSJ (76 réf)</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href="/public/assets/aistudio/usj_16db0aa4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-700 font-bold text-amber-700 underline flex items-center gap-1 font-mono text-[11px]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF USJ (95 réf)</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          DESKTOP LAYOUT (>= lg):
          Clean presentation without any Morocco mentions - purely China factory with European quality
          ========================================================================= */}
      <div className="hidden lg:grid lg:grid-cols-12 max-w-7xl mx-auto px-8 py-16 gap-12 items-center">
        
        {/* Left Column: Information */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-3">
            <HbsjBearingLogo className="h-16" showSubtitle={false} />
            <h1 className="font-display text-5xl font-black text-[#0a192f] tracking-tight uppercase leading-tight">
              HBSJ & USJ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052cc] via-[#0066cc] to-[#0a192f]">
                BEARING INDUSTRY
              </span>
            </h1>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0052cc]">
              <Globe className="w-4 h-4" />
              <span>Usines de Fabrication en Chine · Qualité & Normes Européennes · Export Mondial</span>
            </div>
          </div>

          <p className="text-base text-slate-600 font-normal leading-relaxed max-w-xl">
            Fabricant direct de roulements industriels de haute précision dans nos usines en Chine. Conçus selon les normes de qualité européennes les plus strictes (aciers 100Cr6, tolérances micrométriques ISO/DIN), nous assurons une production fiable et l'exportation directe dans le monde entier.
          </p>

          <div className="p-4 bg-white rounded-xl border border-blue-200 text-xs text-slate-700 space-y-1.5 max-w-xl shadow-md">
            <div className="flex items-center gap-2 font-bold text-[#0a192f] text-sm">
              <Building2 className="w-4 h-4 text-[#0052cc]" />
              <span>Capacité Industrielle : 171 références certifiées pour export mondial</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Roulements rigides, à rouleaux coniques, paliers fonte UCP/UCF, moyeux automobiles et aiguilles de précision au meilleur prix direct fabricant.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={onGoToCatalog}
              className="px-7 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0052cc] hover:bg-[#0041a3] rounded-xl shadow-xl shadow-blue-600/25 transition-all flex items-center gap-2.5 cursor-pointer hover:scale-[1.02]"
            >
              <span>Consulter le Catalogue (171 Réf)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenWhatsApp()}
              className="px-7 py-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-xl shadow-emerald-600/25 transition-all flex items-center gap-2.5 cursor-pointer hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Demander un Devis sur WhatsApp</span>
            </button>
          </div>

          <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
            <span>Télécharger les catalogues officiels :</span>
            <a
              href="/public/assets/aistudio/hbsj_9847da1b.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0052cc] font-bold text-[#0052cc] underline flex items-center gap-1 font-mono"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Catalogue HBSJ (PDF 76 réf)</span>
            </a>
            <span>·</span>
            <a
              href="/public/assets/aistudio/usj_16db0aa4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-700 font-bold text-amber-700 underline flex items-center gap-1 font-mono"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Catalogue USJ (PDF 95 réf)</span>
            </a>
          </div>

        </div>

        {/* Right Column: High Definition Video Window */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#0052cc] bg-black shadow-2xl shadow-blue-600/20 aspect-[4/3]">
            <video
              src="/assets/aistudio/bearing_mechanical_explained.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>CINÉMATIQUE MÉCANIQUE</span>
            </div>

            <div className="absolute bottom-3 right-3 z-10 text-xs font-mono text-white bg-[#0052cc] px-2.5 py-1 rounded-lg shadow-md font-bold">
              GLOBAL EXPORT · ACIER 100Cr6
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
