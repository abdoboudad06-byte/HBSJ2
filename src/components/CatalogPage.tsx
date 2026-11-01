import React, { useState, useMemo } from 'react';
import { Search, Download, MessageCircle, ArrowLeft, FileText, ArrowUpDown, CheckSquare, Square, Building2, ShieldCheck, Globe, LayoutGrid, Table as TableIcon, X } from 'lucide-react';
import { ALL_TARIFF_ITEMS, TariffItem } from '../data/officialTariffs';

interface CatalogPageProps {
  onBackToHome: () => void;
  onOrderSingleViaWhatsApp: (item: TariffItem) => void;
  onOrderMultipleViaWhatsApp: (items: TariffItem[]) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  onBackToHome,
  onOrderSingleViaWhatsApp,
  onOrderMultipleViaWhatsApp,
}) => {
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<'ALL' | 'HBSJ' | 'USJ'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'typeAsc' | 'boreAsc' | 'boreDesc'>('default');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [mobileViewMode, setMobileViewMode] = useState<'cards' | 'table'>('cards');

  const categories = [
    { id: 'all', label: 'Toutes les Séries' },
    { id: 'ball_6000', label: 'Série 6000' },
    { id: 'ball_6200', label: 'Série 6200' },
    { id: 'ball_6300', label: 'Série 6300' },
    { id: 'tapered', label: 'Coniques (302../320..)' },
    { id: 'pillow_blocks', label: 'Paliers UCP / UCF' },
    { id: 'spherical', label: 'Sphériques & Tonnelets' },
    { id: 'needle', label: 'Aiguilles Série K / BA' },
    { id: 'wheel_hub', label: 'Moyeux Auto DU / DAC' },
  ];

  // Filtering and sorting (No public prices - technical catalog)
  const filteredList = useMemo(() => {
    return ALL_TARIFF_ITEMS.filter((item) => {
      // Brand filter
      if (selectedBrandFilter !== 'ALL' && item.brand !== selectedBrandFilter) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const typeMatch = item.type.toLowerCase().includes(query);
        const descMatch = item.description.toLowerCase().includes(query);
        const catMatch = item.categoryLabel.toLowerCase().includes(query);
        if (!typeMatch && !descMatch && !catMatch) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'typeAsc') return a.type.localeCompare(b.type);
      if (sortBy === 'boreAsc') return (a.boreMm || 0) - (b.boreMm || 0);
      if (sortBy === 'boreDesc') return (b.boreMm || 0) - (a.boreMm || 0);
      return 0;
    });
  }, [selectedBrandFilter, selectedCategory, searchQuery, sortBy]);

  const toggleSelectItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSendSelectedList = () => {
    const items = ALL_TARIFF_ITEMS.filter((i) => selectedItems.includes(i.id));
    onOrderMultipleViaWhatsApp(items);
  };

  return (
    <div className="py-6 sm:py-12 bg-slate-50 text-slate-900 min-h-screen pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-slate-200">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#0052cc] bg-white hover:bg-slate-100 border border-slate-300 px-3.5 py-2 rounded-lg transition-colors cursor-pointer w-fit shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-[#0052cc]" />
            <span>← Accueil & Présentation Usines</span>
          </button>

          <div className="text-[11px] sm:text-xs font-mono text-[#0052cc] font-bold flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 w-fit">
            <Globe className="w-4 h-4 text-[#0052cc]" />
            <span>Catalogue Mondial : 171 Références Techniques</span>
          </div>
        </div>

        {/* Page Title & Context Header - Global Technical Catalogue (Without retail prices) */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-4 sm:p-8 mb-6 sm:mb-8 shadow-xl">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0052cc] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              <span>CATALOGUE OFFICIEL DES RÉFÉRENCES TECHNIQUES</span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight">
              Catalogue Général des Roulements (171 Réf)
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Consultez l'ensemble des <strong>171 références industrielles</strong> produites dans nos usines pour nos deux marques <strong>USJ</strong> (Normes Européennes) et <strong>HBSJ</strong> (Top Qualité Chine). En tant que fabricant mondial, nos prix sont calculés sur mesure selon vos volumes, destination et conditions d'expédition.
            </p>

            {/* Global Distribution highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <Globe className="w-4 h-4 text-[#0052cc] shrink-0" />
                <span className="font-semibold">Ventes & Export dans le monde entier</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <Building2 className="w-4 h-4 text-[#0052cc] shrink-0" />
                <span className="font-semibold">Fabrication Usines Chine · Qualité Europe</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#0052cc] shrink-0" />
                <span className="font-semibold">Acier 100Cr6 · Conforme ISO/DIN</span>
              </div>
            </div>
          </div>

          {/* PDF Downloads Bar */}
          <div className="mt-5 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
              Télécharger les documents techniques officiels (PDF) :
            </div>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
              <a
                href="/public/assets/aistudio/hbsj_9847da1b.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg text-[11px] sm:text-xs font-bold text-[#0052cc] flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-[#0052cc]" />
                <span>Catalogue HBSJ (76 réf)</span>
              </a>
              <a
                href="/public/assets/aistudio/usj_16db0aa4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg text-[11px] sm:text-xs font-bold text-amber-900 flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-amber-700" />
                <span>Catalogue USJ (95 réf)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Brand Selector Tabs */}
        <div className="bg-white p-1 sm:p-1.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-1 mb-4 sm:mb-6 max-w-xl">
          <button
            onClick={() => setSelectedBrandFilter('ALL')}
            className={`flex-1 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer text-center ${
              selectedBrandFilter === 'ALL'
                ? 'bg-[#0052cc] text-white shadow-md'
                : 'text-slate-600 hover:text-[#0052cc] hover:bg-slate-50'
            }`}
          >
            Toutes (171)
          </button>
          <button
            onClick={() => setSelectedBrandFilter('USJ')}
            className={`flex-1 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
              selectedBrandFilter === 'USJ'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25'
                : 'text-amber-800 hover:text-amber-900 hover:bg-amber-50'
            }`}
          >
            <span>🇪🇺 USJ</span>
            <span className="text-[10px] font-mono bg-black/10 px-1 py-0.2 rounded font-bold">95</span>
          </button>
          <button
            onClick={() => setSelectedBrandFilter('HBSJ')}
            className={`flex-1 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
              selectedBrandFilter === 'HBSJ'
                ? 'bg-[#0052cc] text-white shadow-md shadow-blue-600/25'
                : 'text-[#0052cc] hover:text-blue-800 hover:bg-blue-50'
            }`}
          >
            <span>🇨🇳 HBSJ</span>
            <span className="text-[10px] font-mono bg-black/10 px-1 py-0.2 rounded font-bold">76</span>
          </button>
        </div>

        {/* Series Filter Horizontal Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-4 sm:mb-6 no-scrollbar touch-pan-x">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-[11px] sm:text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-sm ${
                selectedCategory === cat.id
                  ? 'bg-[#0a192f] text-white font-bold'
                  : 'bg-white text-slate-700 hover:text-[#0052cc] border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search, Sort, & Mobile View Mode Switcher */}
        <div className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 mb-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-sm">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Chercher référence (ex: 6205, UCP205, 30206...)"
              className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052cc] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Controls: Sorting & View Mode on Mobile */}
          <div className="flex items-center justify-between md:justify-end gap-2 text-xs">
            
            {/* View Mode Switcher */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-lg p-0.5 md:hidden">
              <button
                onClick={() => setMobileViewMode('cards')}
                className={`px-2 py-1 rounded text-[11px] font-bold flex items-center gap-1 transition-colors ${
                  mobileViewMode === 'cards' ? 'bg-[#0052cc] text-white' : 'text-slate-600'
                }`}
                title="Vue Cartes Mobiles"
              >
                <LayoutGrid className="w-3 h-3" />
                <span>Cartes</span>
              </button>
              <button
                onClick={() => setMobileViewMode('table')}
                className={`px-2 py-1 rounded text-[11px] font-bold flex items-center gap-1 transition-colors ${
                  mobileViewMode === 'table' ? 'bg-[#0052cc] text-white' : 'text-slate-600'
                }`}
                title="Vue Tableau Défilant"
              >
                <TableIcon className="w-3 h-3" />
                <span>Tableau</span>
              </button>
            </div>

            {/* Technical Sorting Select (No price sort) */}
            <div className="flex items-center gap-1.5 ml-auto">
              <span className="text-slate-500 hidden sm:inline">Trier :</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 text-xs focus:outline-none font-medium"
              >
                <option value="default">Ordre du catalogue</option>
                <option value="typeAsc">Référence (A-Z)</option>
                <option value="boreAsc">Alésage d croissant</option>
                <option value="boreDesc">Alésage d décroissant</option>
              </select>
            </div>

            <span className="font-mono text-slate-500 text-xs shrink-0 pl-1 font-bold">
              {filteredList.length} réf.
            </span>
          </div>

        </div>

        {/* 1. MOBILE CARDS VIEW: Technical Reference Cards Without Public Prices */}
        <div className={`space-y-3 ${mobileViewMode === 'cards' ? 'block md:hidden' : 'hidden'}`}>
          {filteredList.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs bg-white rounded-xl border border-slate-200">
              Aucune référence trouvée pour cette recherche.
            </div>
          ) : (
            filteredList.map((item) => {
              const isSelected = selectedItems.includes(item.id);
              const isUSJ = item.brand === 'USJ';

              return (
                <div 
                  key={`mobile-${item.id}`}
                  className={`p-4 rounded-xl border-2 transition-all bg-white shadow-sm ${
                    isSelected 
                      ? 'border-[#0052cc] bg-blue-50/50 shadow-md' 
                      : 'border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    
                    {/* Multi-select box & Reference */}
                    <div className="flex items-start gap-2.5">
                      <button
                        onClick={() => toggleSelectItem(item.id)}
                        className="mt-0.5 text-slate-400 hover:text-[#0052cc] cursor-pointer p-0.5"
                        aria-label="Sélectionner pour devis groupé"
                      >
                        {isSelected ? (
                          <CheckSquare className="w-5 h-5 text-[#0052cc]" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-300" />
                        )}
                      </button>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-black text-base text-[#0a192f] tracking-wide">
                            {item.type}
                          </span>
                          {item.itemNo && (
                            <span className="text-[10px] font-mono text-slate-400">
                              #{item.itemNo}
                            </span>
                          )}
                        </div>

                        <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                          {item.categoryLabel}
                        </div>
                      </div>
                    </div>

                    {/* Brand Pill */}
                    <div>
                      {isUSJ ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 border border-amber-300 text-amber-800">
                          <span>🇪🇺 USJ</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 border border-blue-200 text-[#0052cc]">
                          <span>🇨🇳 HBSJ</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Specs & Dimensions */}
                  <div className="grid grid-cols-2 gap-2 mt-2.5 pt-2 border-t border-slate-100 text-[11px]">
                    <div className="text-slate-500">
                      Dimensions :{' '}
                      <span className="font-mono font-bold text-slate-800">
                        {item.boreMm ? `Ø${item.boreMm}×${item.outerMm}×${item.widthMm}mm` : 'Standard'}
                      </span>
                    </div>
                    <div className="text-slate-500 text-right">
                      Étanchéité : <span className="font-mono font-bold text-slate-800">{item.seal}</span>
                    </div>
                  </div>

                  {/* Quote Action Row (Without public price) */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="text-[11px] text-slate-500 font-medium">
                      Tarif usine selon quantité
                    </div>

                    <button
                      onClick={() => onOrderSingleViaWhatsApp(item)}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all flex items-center gap-1.5 shadow-md shadow-emerald-600/20 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Demander Prix WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* 2. TABLE VIEW: Technical Columns Without Public Prices */}
        <div className={`overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-md ${
          mobileViewMode === 'cards' ? 'hidden md:block' : 'block'
        }`}>
          <table className="w-full text-left text-xs min-w-[700px] md:min-w-full">
            <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase text-[11px] font-mono tracking-wider sticky top-0">
              <tr>
                <th className="py-3 px-3 w-10 text-center">Choix</th>
                <th className="py-3 px-3">N°</th>
                <th className="py-3 px-4">Référence</th>
                <th className="py-3 px-4">Marque</th>
                <th className="py-3 px-4">Série & Type</th>
                <th className="py-3 px-4">Dimensions (d × D × B)</th>
                <th className="py-3 px-4">Étanchéité</th>
                <th className="py-3 px-4 text-center">Demande de Cotation / Devis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredList.map((item) => {
                const isSelected = selectedItems.includes(item.id);
                const isUSJ = item.brand === 'USJ';

                return (
                  <tr 
                    key={item.id} 
                    className={`hover:bg-blue-50/50 transition-colors group ${
                      isSelected ? 'bg-blue-50' : ''
                    }`}
                  >
                    {/* Checkbox for multi selection */}
                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={() => toggleSelectItem(item.id)}
                        className="text-slate-400 hover:text-[#0052cc] cursor-pointer p-1"
                        title="Sélectionner pour demande de devis groupé"
                      >
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-[#0052cc]" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-300" />
                        )}
                      </button>
                    </td>

                    {/* Item No */}
                    <td className="py-3 px-3 font-mono text-slate-400 tabular-nums">
                      {item.itemNo || '-'}
                    </td>

                    {/* Reference */}
                    <td className="py-3 px-4 font-mono font-bold text-[#0a192f] text-sm">
                      <span className="group-hover:text-[#0052cc] transition-colors">
                        {item.type}
                      </span>
                    </td>

                    {/* Brand */}
                    <td className="py-3 px-4">
                      {isUSJ ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-50 border border-amber-300 text-amber-800">
                          <span>🇪🇺 USJ</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-50 border border-blue-200 text-[#0052cc]">
                          <span>🇨🇳 HBSJ</span>
                        </span>
                      )}
                    </td>

                    {/* Category Label */}
                    <td className="py-3 px-4 text-slate-700">
                      <div className="font-medium">{item.categoryLabel}</div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[190px]">{item.description}</div>
                    </td>

                    {/* Dimensions */}
                    <td className="py-3 px-4 font-mono text-slate-700 tabular-nums">
                      {item.boreMm ? (
                        <span>Ø{item.boreMm} × Ø{item.outerMm} × {item.widthMm} mm</span>
                      ) : (
                        <span className="text-slate-400">Standard</span>
                      )}
                    </td>

                    {/* Seal */}
                    <td className="py-3 px-4 text-slate-600 font-mono text-[11px]">
                      {item.seal}
                    </td>

                    {/* Direct WhatsApp Action Button */}
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => onOrderSingleViaWhatsApp(item)}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm"
                        title="Demander le prix et la disponibilité pour cette référence"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Demander Prix sur WhatsApp</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Multi-Selection Sticky Bar */}
        {selectedItems.length > 0 && (
          <div className="fixed bottom-16 lg:bottom-4 left-3 right-3 sm:left-auto sm:right-6 sm:w-auto z-40 bg-white border-2 border-[#0052cc] p-3 sm:p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4 animate-in slide-in-from-bottom-4">
            <div>
              <div className="text-xs text-slate-800 font-bold">
                {selectedItems.length} référence(s) sélectionnée(s)
              </div>
              <div className="text-xs text-[#0052cc] font-semibold">
                Demande de cotation globale par volume
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedItems([])}
                className="px-2.5 py-2 text-xs text-slate-500 hover:text-slate-800 font-bold"
              >
                Effacer
              </button>
              <button
                onClick={handleSendSelectedList}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Demander le Devis sur WhatsApp</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
