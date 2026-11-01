import React from 'react';
import { Factory, Warehouse, CheckCircle2 } from 'lucide-react';

export const FactoryAndDepot: React.FC = () => {
  return (
    <section id="industrie" className="py-12 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0052cc] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-2.5">
              <span>USINES EN CHINE · QUALITÉ EUROPÉENNE (DIN / ISO)</span>
              <span className="text-slate-400">·</span>
              <span>EXPORT MONDIAL</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0a192f]">
              Nos Usines en Chine & Standards Européens
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
            En tant que fabricant direct basé en Chine, nous concevons et usinons nos marques <strong>USJ</strong> et <strong>HBSJ</strong> selon les normes européennes les plus strictes. Nous exportons directement vers nos partenaires, revendeurs et industriels à travers le monde.
          </p>
        </div>

        {/* 2 Big Pillars: Factory in China & European Quality Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-10">
          
          {/* Pillar 1: Usines de Fabrication en Chine */}
          <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-md hover:border-[#0052cc] transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0052cc] flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#0052cc] uppercase tracking-widest">Capacité de Production Directe</span>
                <h3 className="text-xl sm:text-2xl font-display font-black text-[#0a192f] mt-1">
                  Nos Usines de Fabrication en Chine
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Des lignes de production robotisées équipées de tours CNC, fours de trempe thermique sous vide et rectifieuses de précision micrométrique pour un approvisionnement mondial de premier ordre.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 pt-3 border-t border-slate-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
                  <span><strong>Capacité de Production Massive :</strong> Lignes automatisées pour grandes séries et approvisionnement mondial sans rupture.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
                  <span><strong>Acier 100Cr6 de Haute Pureté :</strong> Élaboration dégazée sous vide pour une résistance maximale à la fatigue de contact.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
                  <span><strong>Prix Direct Fabricant B2B :</strong> Vente directe sortie usine pour distributeurs, importateurs et fabricants d'équipements.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 mt-6 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Fabricant International Déposant</span>
              <span className="text-[#0052cc] font-bold">ISO 9001:2015</span>
            </div>
          </div>

          {/* Pillar 2: Qualité & Normes Européennes */}
          <div className="bg-slate-50 rounded-2xl border-2 border-amber-300 p-6 sm:p-8 flex flex-col justify-between shadow-md hover:border-amber-500 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Warehouse className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest">Excellence Métrologique</span>
                <h3 className="text-xl sm:text-2xl font-display font-black text-[#0a192f] mt-1">
                  Qualité & Normes Européennes (USJ)
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Notre marque <strong>USJ</strong> est spécifiquement élaborée selon les cahiers des charges européens les plus stricts (normes DIN/ISO) pour garantir fiabilité, faible niveau sonore et durabilité extrême.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 pt-3 border-t border-slate-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Tolérances Européennes Micrométriques :</strong> Classes de précision P6 / P5 et contrôle rigoureux du jeu radial (C3 / CN).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Laboratoire Métrologique Intégré :</strong> Contrôle tridimensionnel CMM, spectrométrie d'acier et tests vibro-acoustiques à 100%.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Environnements Sévères & Heavy Duty :</strong> Paliers fonte, charges axiales et vibrations pour mines, carrières et mécanique automobile.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 mt-6 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Service Commercial & Export</span>
              <span className="text-amber-700 font-bold">WhatsApp (+212 635 487 673)</span>
            </div>
          </div>

        </div>

        {/* Advantage Strip */}
        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-mono font-black text-[#0a192f] mb-1">0 Intermédiaire</div>
            <p className="text-xs text-slate-600">Du laminoir de notre usine jusqu'à vos conteneurs et entrepôts</p>
          </div>
          <div>
            <div className="text-2xl font-mono font-black text-[#0052cc] mb-1">Qualité Europe</div>
            <p className="text-xs text-slate-600">Acier 100Cr6, tolérances DIN/ISO et contrôle métrologique</p>
          </div>
          <div>
            <div className="text-2xl font-mono font-black text-amber-700 mb-1">Export Mondial</div>
            <p className="text-xs text-slate-600">Expéditions sécurisées par conteneurs et palettes vers tous les continents</p>
          </div>
        </div>

      </div>
    </section>
  );
};
