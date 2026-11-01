import React from 'react';
import { ArrowRight, Download, CheckCircle2 } from 'lucide-react';
import { BRAND_SUMMARY } from '../data/officialTariffs';
import { HbsjBearingLogo } from './HbsjBearingLogo';

interface BrandsPresentationProps {
  onSelectBrand: (brand: 'HBSJ' | 'USJ') => void;
}

export const BrandsPresentation: React.FC<BrandsPresentationProps> = ({ onSelectBrand }) => {
  return (
    <section id="marques" className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0052cc] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-2">
              <span>NOS DEUX MARQUES EXCLUSIVES</span>
              <span className="text-slate-400">·</span>
              <span>Fabrication Directe Usine Chine</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0a192f]">
              Une Offre Industrielle Adaptée à Chaque Exigence
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
            Propriétaires de nos propres usines en Chine, nous fabriquons selon les normes de qualité européennes les plus strictes et exportons deux marques complémentaires dans le monde entier.
          </p>
        </div>

        {/* 2 Brands Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Brand 1: USJ BEARING (Normes Européennes) */}
          <div className="bg-white rounded-2xl border-2 border-amber-400 p-5 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-amber-500 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-50 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-50 border border-amber-300 text-amber-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <span>🇪🇺</span>
                  <span>Normes Européennes (Heavy Duty)</span>
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">95 Réf. Disponibles</span>
              </div>

              <div className="flex items-baseline gap-2.5 mb-2">
                <h3 className="font-display text-2xl sm:text-4xl font-black text-[#0a192f]">
                  USJ BEARING
                </h3>
                <span className="text-[11px] sm:text-xs text-amber-700 font-bold uppercase">Gamme Premium</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Conçue selon les standards stricts européens (DIN/ISO). Destinée aux environnements exigeants, carrières, charges vibratoires, industries lourdes et pièces de roues automobiles renforcées.
              </p>

              {/* Key Features List */}
              <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-700 pt-3 border-t border-slate-100">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Spécifications Europe :</strong> Tolérances P6 / P5 et jeu radial contrôlé</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Gamme Spécialisée :</strong> Moyeux DU/DAC blindés, cages à aiguilles K</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Paliers Renforcés :</strong> Séries UCP et UCF fonte haute densité</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Haute Longévité :</strong> Traitement thermique et lubrification longue durée</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-slate-100 mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              <a
                href={BRAND_SUMMARY.USJ.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>Télécharger Catalogue USJ (PDF)</span>
              </a>

              <button
                onClick={() => onSelectBrand('USJ')}
                className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-amber-600/20 active:scale-98"
              >
                <span>Voir la Gamme USJ (95 Réf)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Brand 2: HBSJ BEARING (Top Qualité Chine) with Business Card Styling */}
          <div className="bg-white rounded-2xl border-2 border-[#0052cc] p-5 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-blue-700 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-[#0052cc] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <span>🇨🇳</span>
                  <span>Le Top Qualité en Chine</span>
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">76 Réf. Disponibles</span>
              </div>

              {/* Official HBSJ Logo Banner */}
              <div className="mb-2">
                <HbsjBearingLogo className="h-12 sm:h-14" showSubtitle={false} />
              </div>

              <div className="flex items-baseline gap-2.5 mb-2">
                <h3 className="font-display text-2xl sm:text-4xl font-black text-[#0a192f]">
                  HBSJ BEARING
                </h3>
                <span className="text-[11px] sm:text-xs text-[#0052cc] font-bold uppercase">Premier Choix Usine</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Le sommet de la qualité manufacturière chinoise : acier au chrome 100Cr6 de premier ordre, avec le prix tarif direct usine le plus compétitif pour grossistes, importateurs et distributeurs.
              </p>

              {/* Key Features List */}
              <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-700 pt-3 border-t border-slate-100">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
                  <span><strong>Top Qualité Chine :</strong> Acier dégazé sous vide GCr15 / 100Cr6</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
                  <span><strong>Prix Direct Fabricant :</strong> Tarifs compétitifs sortie d'usine selon vos volumes de commande</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
                  <span><strong>Rotations & Volumes :</strong> Idéal pour distributeurs, revendeurs et constructeurs d'équipements</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
                  <span><strong>Paliers UCP Économiques :</strong> UCP 204 à 211 avec graisseur intégré</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-slate-100 mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              <a
                href={BRAND_SUMMARY.HBSJ.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-[#0052cc]" />
                <span>Télécharger Catalogue HBSJ (PDF)</span>
              </a>

              <button
                onClick={() => onSelectBrand('HBSJ')}
                className="px-5 py-2.5 bg-[#0052cc] hover:bg-[#0041a3] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-blue-600/20 active:scale-98"
              >
                <span>Voir la Gamme HBSJ (76 Réf)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
