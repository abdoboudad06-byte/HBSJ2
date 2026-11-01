import React, { useState } from 'react';
import { Cpu, Calculator, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { BEARING_PRODUCTS } from '../data/bearingCatalog';
import { BearingProduct } from '../types/bearing';

interface BearingCalculatorProps {
  onOpenQuote: (productRef: string) => void;
  onSelectProduct: (product: BearingProduct) => void;
}

export const BearingCalculator: React.FC<BearingCalculatorProps> = ({
  onOpenQuote,
  onSelectProduct,
}) => {
  const [shaftDiameter, setShaftDiameter] = useState<number>(25);
  const [loadProfile, setLoadProfile] = useState<'standard' | 'heavy_radial' | 'combined' | 'compact'>('standard');
  const [temperatureProfile, setTemperatureProfile] = useState<'normal' | 'high_temp'>('normal');

  // Find the best match from our catalog or closest
  const matchedBearing = React.useMemo(() => {
    // 1. Direct diameter match
    const exactMatches = BEARING_PRODUCTS.filter((b) => b.innerDiameter === shaftDiameter);
    if (exactMatches.length > 0) {
      if (loadProfile === 'heavy_radial') {
        const roller = exactMatches.find((b) => b.category === 'roller' || b.category === 'units');
        if (roller) return roller;
      } else if (loadProfile === 'combined') {
        const tapered = exactMatches.find((b) => b.category === 'tapered');
        if (tapered) return tapered;
      } else if (loadProfile === 'compact') {
        const needle = exactMatches.find((b) => b.category === 'needle');
        if (needle) return needle;
      }
      return exactMatches[0];
    }

    // 2. Nearest diameter
    return BEARING_PRODUCTS.reduce((prev, curr) => {
      return Math.abs(curr.innerDiameter - shaftDiameter) < Math.abs(prev.innerDiameter - shaftDiameter)
        ? curr
        : prev;
    });
  }, [shaftDiameter, loadProfile]);

  const recommendedClearance = temperatureProfile === 'high_temp' ? 'C3 (Jeu radial augmenté)' : 'Normal (CN)';
  const recommendedLubricant = temperatureProfile === 'high_temp' 
    ? 'Graisse synthétique haute température (-30°C à +160°C)' 
    : 'Graisse polyvalente au savon de lithium complexe (NLGI 2)';

  return (
    <section id="calculateur" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <span>OUTIL D'INGÉNIERIE & PRÉCISION</span>
              <span className="text-slate-600">·</span>
              <span>Assistance Technique B2B</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Sélecteur d'Alésage & Préconisation Technique
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-lg">
            Déterminez instantanément la référence HBSJ idéale pour votre arbre mécanique selon votre diamètre, charge de service et environnement thermique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Box Left */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
            
            {/* Step 1: Shaft Diameter */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-blue-400" />
                  Diamètre de l'arbre / Alésage (d)
                </label>
                <span className="text-base font-mono font-bold text-blue-400">
                  {shaftDiameter} mm
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="80"
                step="5"
                value={shaftDiameter}
                onChange={(e) => setShaftDiameter(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>Ø 20 mm</span>
                <span>Ø 30 mm</span>
                <span>Ø 40 mm</span>
                <span>Ø 50 mm</span>
                <span>Ø 60 mm</span>
                <span>Ø 80 mm</span>
              </div>
            </div>

            {/* Step 2: Load Profile */}
            <div>
              <label className="text-sm font-bold text-white block mb-2">
                Profil de Charge & Contraintes Mécaniques
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setLoadProfile('standard')}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    loadProfile === 'standard'
                      ? 'bg-blue-600/20 border-blue-500 text-white font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold">Standard Polyvalent</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Billes rigides, vitesse rapide</div>
                </button>

                <button
                  type="button"
                  onClick={() => setLoadProfile('heavy_radial')}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    loadProfile === 'heavy_radial'
                      ? 'bg-blue-600/20 border-blue-500 text-white font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold">Charges Lourdes & Chocs</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Rouleaux cylindriques / sphériques</div>
                </button>

                <button
                  type="button"
                  onClick={() => setLoadProfile('combined')}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    loadProfile === 'combined'
                      ? 'bg-blue-600/20 border-blue-500 text-white font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold">Charges Axiales + Radiales</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Rouleaux coniques, ponts</div>
                </button>

                <button
                  type="button"
                  onClick={() => setLoadProfile('compact')}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    loadProfile === 'compact'
                      ? 'bg-blue-600/20 border-blue-500 text-white font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-bold">Encombrement Réduit</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Douilles & roulements à aiguilles</div>
                </button>
              </div>
            </div>

            {/* Step 3: Temperature */}
            <div>
              <label className="text-sm font-bold text-white block mb-2">
                Température & Environnement de Fonctionnement
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setTemperatureProfile('normal')}
                  className={`p-2.5 rounded-lg border text-center transition-all ${
                    temperatureProfile === 'normal'
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Normal (-20°C à +90°C)
                </button>

                <button
                  type="button"
                  onClick={() => setTemperatureProfile('high_temp')}
                  className={`p-2.5 rounded-lg border text-center transition-all ${
                    temperatureProfile === 'high_temp'
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Haute Température (&gt;100°C) / C3
                </button>
              </div>
            </div>

          </div>

          {/* Result Card Right */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-blue-900/60 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                  Préconisation d'Ingénierie HBSJ
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
                  {matchedBearing.reference}
                </h3>
              </div>
              <span className="text-xs font-mono bg-blue-950 border border-blue-800 text-blue-300 px-3 py-1 rounded">
                ISO Recommandé
              </span>
            </div>

            {/* Match Specifications */}
            <div className="space-y-3">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs flex justify-between items-center">
                <span className="text-slate-400">Dimensions (d × D × B) :</span>
                <span className="font-mono font-bold text-white text-sm">
                  Ø{matchedBearing.innerDiameter} × Ø{matchedBearing.outerDiameter} × {matchedBearing.width} mm
                </span>
              </div>

              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs flex justify-between items-center">
                <span className="text-slate-400">Jeu Radial Interne Recommandé :</span>
                <span className="font-mono font-bold text-blue-400 text-sm">
                  {recommendedClearance}
                </span>
              </div>

              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs flex justify-between items-center">
                <span className="text-slate-400">Équivalence Directe SKF :</span>
                <span className="font-mono font-bold text-emerald-400 text-sm">
                  {matchedBearing.crossReferences.skf || 'Standard'}
                </span>
              </div>

              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs flex justify-between items-center">
                <span className="text-slate-400">Capacité Dynamique (Cr) :</span>
                <span className="font-mono font-bold text-white text-sm">
                  {matchedBearing.dynamicLoad} kN
                </span>
              </div>

              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                <span className="text-slate-400 block mb-1">Préconisation de Lubrification :</span>
                <span className="text-slate-200">{recommendedLubricant}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
              <button
                onClick={() => onSelectProduct(matchedBearing)}
                className="flex-1 py-3 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors text-center"
              >
                Fiche Complète
              </button>
              <button
                onClick={() => onOpenQuote(matchedBearing.reference)}
                className="flex-1 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-600/30"
              >
                <span>Demander le Prix de cette Réf.</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
