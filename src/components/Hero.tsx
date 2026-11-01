import React, { useState } from 'react';
import { ArrowUpRight, Search, ShieldCheck, Download, Check, Info, FileText } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreDepot: () => void;
  onSelectBrand: (brand: 'HBSJ' | 'USJ') => void;
}

const BEARING_HOTSPOTS = [
  {
    id: 'outer-ring',
    x: 32,
    y: 28,
    title: 'Bague Extérieure en Acier 100Cr6',
    desc: 'Usinée et trempée dans nos usines en Chine. Rugosité Ra ≤ 0.02 µm pour rotation silencieuse et sans frottement.'
  },
  {
    id: 'rolling-elements',
    x: 48,
    y: 38,
    title: 'Éléments Roulants Calibrés',
    desc: 'Billes et rouleaux de classe G10. Disponible en gamme USJ (Norme Européenne renforcée) et HBSJ (Top Qualité Chine).'
  },
  {
    id: 'brass-cage',
    x: 38,
    y: 54,
    title: 'Cages Métalliques / Laiton Massif',
    desc: 'Conçues pour résister aux accélérations et vibrations sévères dans les concasseurs, carrières et moteurs.'
  },
  {
    id: 'inner-ring',
    x: 45,
    y: 72,
    title: 'Alésage d Rectifié au Micron',
    desc: 'Diamètres d de 10mm à 80mm+ parfaitement calibrés selon les normes ISO 15 / DIN 620.'
  },
  {
    id: 'seals',
    x: 70,
    y: 44,
    title: 'Étanchéité Renforcée 2RS & ZZ',
    desc: 'Joints nitrile double lèvre étanches contre la poussière minérale et la boue, ou flasques tôle 2Z.'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreDepot, onSelectBrand }) => {
  const [activeHotspot, setActiveHotspot] = useState<typeof BEARING_HOTSPOTS[0] | null>(BEARING_HOTSPOTS[1]);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Industrial Story & Proposition */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-300 bg-slate-900 border border-slate-700/80 rounded px-3 py-1">
              <span className="text-amber-400">USJ (Norme Europe)</span>
              <span className="text-slate-600">·</span>
              <span className="text-blue-400">HBSJ (Top Qualité Chine)</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12] text-balance">
              Fabricant Industriel de Roulements en Chine aux <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">Normes Européennes</span>
            </h1>

            <p className="text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Nous possédons nos propres usines en Chine et assurons la fabrication directe de deux marques déposées : <strong>USJ</strong> (conçue aux normes européennes strictes) et <strong>HBSJ</strong> (le top de la qualité chinoise). Toutes nos références sont disponibles pour approvisionnement direct et export mondial.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onExploreDepot}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Voir le Catalogue (171 Réf)</span>
              </button>

              <a
                href="#panier-devis"
                className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-600/60 rounded-lg hover:bg-emerald-900/60 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span>Demander une Cotation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* PDF Price Lists Direct Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="text-slate-500">Catalogues officiels PDF :</span>
              <a
                href="/public/assets/aistudio/hbsj_9847da1b.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 underline flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>PDF HBSJ (76 réf)</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="/public/assets/aistudio/usj_16db0aa4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 underline flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>PDF USJ (95 réf)</span>
              </a>
            </div>

            {/* Quick trust metrics row */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 font-mono">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">171</div>
                <div className="text-[11px] font-sans text-slate-400 mt-0.5">Réf. Catalogue</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tabular-nums">USINE</div>
                <div className="text-[11px] font-sans text-slate-400 mt-0.5">Direct Fabricant</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums">MONDIAL</div>
                <div className="text-[11px] font-sans text-slate-400 mt-0.5">Export International</div>
              </div>
            </div>

          </div>

          {/* Right Column: Macro Visual with Interactive Hotspots */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              
              <img 
                src="/src/assets/images/hero_bearing_macro_1793480067383.jpg" 
                alt="Roulements industriels HBSJ et USJ haute précision"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[16/10] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/20 pointer-events-none" />

              {/* Interactive inspection hotspot buttons */}
              {BEARING_HOTSPOTS.map((hotspot) => {
                const isSelected = activeHotspot?.id === hotspot.id;
                return (
                  <button
                    key={hotspot.id}
                    onClick={() => setActiveHotspot(hotspot)}
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-500/40 scale-110 z-20 font-black' 
                        : 'bg-slate-900/90 text-blue-400 border border-blue-400/50 hover:bg-blue-600 hover:text-white z-10'
                    }`}
                    title={hotspot.title}
                  >
                    <span className="text-xs font-bold">{isSelected ? '✓' : '+'}</span>
                  </button>
                );
              })}

              {/* Hotspot card overlay */}
              {activeHotspot && (
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/95 backdrop-blur-md border border-slate-800 p-4 rounded-xl shadow-xl animate-fadeIn">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Qualité Usine</span>
                        <span className="text-slate-600">·</span>
                        <h4 className="text-sm font-bold text-white">{activeHotspot.title}</h4>
                      </div>
                      <p className="text-xs text-slate-300 mt-1 leading-normal">
                        {activeHotspot.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Dual Brand Badge */}
              <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-sm border border-slate-800 px-3 py-1 rounded text-xs font-mono text-slate-300 flex items-center gap-2">
                <span className="text-amber-400 font-bold">USJ</span>
                <span className="text-slate-600">|</span>
                <span className="text-blue-400 font-bold">HBSJ</span>
                <span className="text-slate-500 text-[10px]">QUALITÉ EUROPÉENNE</span>
              </div>

            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 mt-2 px-1">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-blue-400" />
                Cliquez sur les points (+) pour inspecter les matériaux de fabrication
              </span>
              <span className="font-mono text-slate-500">ISO 9001 / DIN 620</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
