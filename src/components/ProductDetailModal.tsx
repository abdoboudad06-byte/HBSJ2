import React from 'react';
import { X, ArrowUpRight, ShieldCheck, Check, Layers, Sliders, Activity, Download } from 'lucide-react';
import { BearingProduct } from '../types/bearing';

interface ProductDetailModalProps {
  product: BearingProduct | null;
  onClose: () => void;
  onOpenQuote: (productRef: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenQuote,
}) => {
  if (!product) return null;

  const handlePrintOrDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold uppercase tracking-wider">
              <span>{product.categoryName}</span>
              <span className="text-slate-600">·</span>
              <span>{product.precisionGrade}</span>
            </div>
            <h3 className="text-xl font-display font-extrabold text-white mt-0.5">
              {product.reference}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Main overview */}
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 space-y-2">
            <h4 className="text-base font-bold text-white">{product.name}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{product.description}</p>
            <div className="text-xs text-slate-400 pt-1 flex flex-wrap gap-x-4 gap-y-1">
              <span><strong>Matière:</strong> {product.material}</span>
              <span><strong>Étanchéité:</strong> {product.sealType}</span>
              <span><strong>Jeu radial:</strong> {product.clearance}</span>
            </div>
          </div>

          {/* Technical Dimensions Blueprint Grid */}
          <div>
            <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Dimensions Géométriques & Tolérances (ISO 15)
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-center">
                <div className="text-xs text-slate-400">Alésage (d)</div>
                <div className="text-xl font-mono font-bold text-blue-400 mt-1 tabular-nums">
                  {product.innerDiameter} <span className="text-xs font-normal text-slate-500">mm</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Diamètre intérieur</div>
              </div>

              <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-center">
                <div className="text-xs text-slate-400">Diamètre Extérieur (D)</div>
                <div className="text-xl font-mono font-bold text-blue-400 mt-1 tabular-nums">
                  {product.outerDiameter} <span className="text-xs font-normal text-slate-500">mm</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Diamètre cage ext.</div>
              </div>

              <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-center">
                <div className="text-xs text-slate-400">Largeur (B / T)</div>
                <div className="text-xl font-mono font-bold text-blue-400 mt-1 tabular-nums">
                  {product.width} <span className="text-xs font-normal text-slate-500">mm</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Épaisseur axiale</div>
              </div>

              <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-center">
                <div className="text-xs text-slate-400">Masse Unitaire</div>
                <div className="text-xl font-mono font-bold text-white mt-1 tabular-nums">
                  {product.weight} <span className="text-xs font-normal text-slate-500">kg</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Poids net unitaire</div>
              </div>
            </div>
          </div>

          {/* Load Capacities & Limiting Speeds */}
          <div>
            <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Capacités de Charge & Vitesses Limites
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl">
                <div className="text-xs text-slate-400">Charge Dyn. (Cr)</div>
                <div className="text-lg font-mono font-bold text-white mt-1 tabular-nums">
                  {product.dynamicLoad.toFixed(1)} <span className="text-xs font-normal text-slate-400">kN</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Capacité de service</div>
              </div>

              <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl">
                <div className="text-xs text-slate-400">Charge Stat. (C0r)</div>
                <div className="text-lg font-mono font-bold text-white mt-1 tabular-nums">
                  {product.staticLoad.toFixed(1)} <span className="text-xs font-normal text-slate-400">kN</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Limite de déformation</div>
              </div>

              <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl">
                <div className="text-xs text-slate-400">Vitesse Graisse</div>
                <div className="text-lg font-mono font-bold text-blue-400 mt-1 tabular-nums">
                  {product.limitingSpeedGrease.toLocaleString()} <span className="text-xs font-normal text-slate-400">tr/min</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Lubrification standard</div>
              </div>

              <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl">
                <div className="text-xs text-slate-400">Vitesse Huile</div>
                <div className="text-lg font-mono font-bold text-blue-400 mt-1 tabular-nums">
                  {product.limitingSpeedOil.toLocaleString()} <span className="text-xs font-normal text-slate-400">tr/min</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Bain ou circulation</div>
              </div>
            </div>
          </div>

          {/* Interchangeability / Equivalences */}
          <div>
            <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Tableau d'Équivalences Internationales (Cross-Reference)
            </h5>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Réf. SKF :</span>
                  <span className="font-mono font-bold text-white text-sm">{product.crossReferences.skf || 'Sur demande'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Réf. FAG / INA :</span>
                  <span className="font-mono font-bold text-white text-sm">{product.crossReferences.fag || 'Sur demande'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Réf. TIMKEN :</span>
                  <span className="font-mono font-bold text-white text-sm">{product.crossReferences.timken || 'Sur demande'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Réf. NSK :</span>
                  <span className="font-mono font-bold text-white text-sm">{product.crossReferences.nsk || 'Sur demande'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Target Applications */}
          <div>
            <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Applications Typiques Recommandées
            </h5>
            <div className="flex flex-wrap gap-2 text-xs">
              {product.applications.map((app, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-300">
                  {app}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handlePrintOrDownload}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Fiche Technique (PDF / Impression)</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Fermer
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(product.reference);
              }}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors flex items-center gap-2"
            >
              <span>Demander un Devis pour ce Produit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
