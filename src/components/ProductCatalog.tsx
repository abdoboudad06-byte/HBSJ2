import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, ArrowUpRight, Eye, ChevronRight, Check } from 'lucide-react';
import { BEARING_PRODUCTS, CATEGORY_INFO } from '../data/bearingCatalog';
import { BearingCategory, BearingProduct } from '../types/bearing';

interface ProductCatalogProps {
  onOpenQuote: (productRef?: string) => void;
  onSelectProduct: (product: BearingProduct) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenQuote,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [minBore, setMinBore] = useState<number>(0);
  const [maxBore, setMaxBore] = useState<number>(100);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return BEARING_PRODUCTS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const refMatch = item.reference.toLowerCase().includes(query);
        const nameMatch = item.name.toLowerCase().includes(query);
        const subTypeMatch = item.subType.toLowerCase().includes(query);
        const crossRefMatch = Object.values(item.crossReferences).some((ref) =>
          ref?.toLowerCase().includes(query)
        );
        const appMatch = item.applications.some((app) =>
          app.toLowerCase().includes(query)
        );
        if (!refMatch && !nameMatch && !subTypeMatch && !crossRefMatch && !appMatch) {
          return false;
        }
      }

      // Bore diameter filter
      if (item.innerDiameter < minBore || item.innerDiameter > maxBore) {
        return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, minBore, maxBore]);

  return (
    <section id="catalogue" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <span>CATALOGUE INDUSTRIEL HBSJ</span>
              <span className="text-slate-600">·</span>
              <span>Conforme ISO 492 / DIN 620</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Gamme Complète de Roulements & Paliers
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-lg">
            Consultez nos références certifiées haute précision. Chaque roulement est inspecté dimensionnellement, testé au niveau vibratoire et gravé au laser avec traçabilité complète.
          </p>
        </div>

        {/* Category Filter Tabs (Functional segmented buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CATEGORY_INFO.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  isActive ? 'bg-blue-700 text-white' : 'bg-slate-800 text-slate-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Dimension Filter Bar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 mb-8 flex flex-col md:flex-row items-center gap-4 justify-between">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher réf (ex: 6205, 32210, UCP, SKF...)"
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Effacer
              </button>
            )}
          </div>

          {/* Quick Bore Dimension Range */}
          <div className="flex items-center gap-3 w-full md:w-auto text-xs text-slate-300">
            <span className="shrink-0 text-slate-400 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-400" />
              Alésage (d) :
            </span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="200"
                value={minBore}
                onChange={(e) => setMinBore(Number(e.target.value))}
                className="w-16 px-2 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-center font-mono"
              />
              <span className="text-slate-500">à</span>
              <input
                type="number"
                min="0"
                max="300"
                value={maxBore}
                onChange={(e) => setMaxBore(Number(e.target.value))}
                className="w-16 px-2 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-center font-mono"
              />
              <span className="text-slate-500">mm</span>
            </div>

            {(searchQuery || minBore > 0 || maxBore < 100) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setMinBore(0);
                  setMaxBore(100);
                  setSelectedCategory('all');
                }}
                className="ml-2 text-xs text-blue-400 hover:text-blue-300 underline cursor-pointer"
              >
                Réinitialiser
              </button>
            )}
          </div>

          <div className="text-xs text-slate-400 font-mono shrink-0">
            {filteredProducts.length} référence(s) affichée(s)
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-dashed border-slate-800">
            <p className="text-base text-slate-300 font-medium">Aucun roulement ne correspond à vos critères de recherche.</p>
            <p className="text-xs text-slate-500 mt-1">
              Contactez notre service commercial sur WhatsApp pour commander une référence spécifique non listée.
            </p>
            <button
              onClick={() => onOpenQuote()}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Envoyer une Demande Hors Catalogue
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between p-5 group shadow-lg"
              >
                {/* Card Top: Metadata without pill boxes (Zero-pill discipline) */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-semibold">{product.categoryName}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{product.precisionGrade}</span>
                    </div>
                    <span className="font-mono text-slate-500 text-[11px]">{product.clearance}</span>
                  </div>

                  {/* Primary Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {product.reference}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {product.name}
                  </p>

                  {/* Dimensions Specs Row */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 bg-slate-950/70 p-2.5 rounded-lg text-center font-mono">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">Alésage d</div>
                      <div className="text-sm font-bold text-slate-100 tabular-nums">Ø{product.innerDiameter} mm</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">Diamètre D</div>
                      <div className="text-sm font-bold text-slate-100 tabular-nums">Ø{product.outerDiameter} mm</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">Largeur B</div>
                      <div className="text-sm font-bold text-slate-100 tabular-nums">{product.width} mm</div>
                    </div>
                  </div>

                  {/* Dynamic & Static loads */}
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-1 font-mono">
                    <span>Charge Dyn. Cr: <strong className="text-white">{product.dynamicLoad} kN</strong></span>
                    <span>Max: <strong className="text-blue-400">{product.limitingSpeedGrease.toLocaleString()} RPM</strong></span>
                  </div>

                  {/* Cross References Equivalence */}
                  <div className="mt-3 pt-2 text-[11px] text-slate-400 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-slate-500">Équivalence :</span>
                    <span className="font-mono text-slate-300">
                      SKF {product.crossReferences.skf || 'Standard'}
                    </span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    <span>Fiche Technique</span>
                  </button>

                  <button
                    onClick={() => onOpenQuote(product.reference)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                  >
                    <span>Devis Rapide</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
