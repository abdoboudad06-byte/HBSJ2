import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Microchip, Layers, Activity } from 'lucide-react';

export const QualityStandards: React.FC = () => {
  const qualitySteps = [
    {
      num: '01',
      title: 'Métallurgie de Haute Pureté',
      desc: 'Acier au chrome 100Cr6 (GCr15 / AISI 52100) dégazé sous vide pour éliminer toute inclusion d’oxygène et garantir une résistance maximale à la fatigue de contact.'
    },
    {
      num: '02',
      title: 'Traitement Thermique Contrôlé',
      desc: 'Trempe sous atmosphère contrôlée et revenus multiples atteignant une dureté superficielle et à cœur de 60 à 64 HRC, assurant une stabilité dimensionnelle jusqu’à 150°C.'
    },
    {
      num: '03',
      title: 'Super-Finition des Pistes',
      desc: 'Rectification micrométrique et pierrage des chemins de roulement avec une rugosité de surface Ra ≤ 0.02 µm pour un film d’huile hydrodynamique parfait.'
    },
    {
      num: '04',
      title: 'Contrôle Vibratoire & 100% CMM',
      desc: 'Chaque lot passe sur machine de mesure tridimensionnelle CMM et banc vibro-acoustique pour valider les niveaux de bruit (grade Z3/V3) et l’absence de balourd.'
    }
  ];

  return (
    <section id="qualite" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <span>ASSURANCE QUALITÉ & MÉTROLOGIE</span>
              <span className="text-slate-600">·</span>
              <span>Normes Mondiales</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Rigueur Technique & Normes ISO
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-lg">
            La fiabilité d’une machine dépend de la précision de ses roulements. Chez HBSJ, chaque roulement est fabriqué et testé selon les standards industriels les plus stricts.
          </p>
        </div>

        {/* 2-Column Split: Image on Left, Steps on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Inspection Lab Image */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <img 
                src="/src/assets/images/bearing_quality_lab_1793480067761.jpg" 
                alt="Laboratoire de contrôle qualité et métrologie des roulements HBSJ"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[16/10] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-3.5 rounded-xl">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-white">Laboratoire de Métrologie Tridimensionnelle</span>
                  </div>
                  <span className="font-mono text-blue-400 text-[11px]">Tolérance ±0.001 mm</span>
                </div>
              </div>
            </div>

            {/* Certifications Row */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                <div className="font-mono font-bold text-white text-sm">ISO 9001</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Management Qualité</div>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                <div className="font-mono font-bold text-blue-400 text-sm">ISO/TS 16949</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Norme Automobile</div>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                <div className="font-mono font-bold text-white text-sm">ABEC-5 / P5</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Haute Précision</div>
              </div>
            </div>
          </div>

          {/* Right Column: Steps with clean editorial numbering (no mechanical comment slashes //) */}
          <div className="lg:col-span-6 space-y-4">
            {qualitySteps.map((step) => (
              <div 
                key={step.num}
                className="p-5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xl font-bold text-blue-400 shrink-0">
                    {step.num}.
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
