import React from 'react';
import { APPLICATION_SECTORS } from '../data/bearingCatalog';
import { ArrowUpRight, Wrench, Factory, Truck, Sparkles } from 'lucide-react';

interface ApplicationsSectionProps {
  onOpenQuote: (sectorRef?: string) => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="gammes" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <span>SECTEURS D'ACTIVITÉ & TERRAIN</span>
              <span className="text-slate-600">·</span>
              <span>Solutions Éprouvées</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Applications Industrielles & Mobilité
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-lg">
            Nos roulements sont conçus pour fonctionner sans défaillance dans les environnements les plus exigeants : poussière abrasive, vibrations sévères et températures élevées.
          </p>
        </div>

        {/* Sectors Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {APPLICATION_SECTORS.map((sector, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-slate-950 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-blue-400 font-mono mb-3">
                  <span>SECTEUR 0{index + 1}</span>
                  <span className="text-slate-400 font-sans">{sector.tag}</span>
                </div>

                <h3 className="text-xl font-display font-extrabold text-white group-hover:text-blue-400 transition-colors">
                  {sector.name}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {sector.desc}
                </p>

                {/* References used in this sector */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="text-xs text-slate-400 mb-2">Références fréquemment installées :</div>
                  <div className="flex flex-wrap gap-2">
                    {sector.references.map((ref, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono bg-slate-900 border border-slate-800 text-blue-300 px-2.5 py-1 rounded"
                      >
                        {ref}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs text-slate-500">Garantie constructeur & support technique</span>
                <button
                  onClick={() => onOpenQuote(sector.name)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Consulter pour ce secteur</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
