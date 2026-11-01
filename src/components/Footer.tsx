import React from 'react';
import { Phone, Mail, MessageCircle, FileText } from 'lucide-react';
import { HbsjBearingLogo } from './HbsjBearingLogo';

interface FooterProps {
  onOpenQuote?: () => void;
  onOpenWhatsApp?: (text?: string) => void;
  onNavigate?: (page: 'home' | 'catalog') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onOpenWhatsApp, onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = '+212 635 487 673';
  const whatsappUrl = 'https://wa.me/212635487673?text=Bonjour,%20je%20souhaite%20demander%20des%20informations%20ou%20une%20cotation%20sur%20les%20roulements%20HBSJ%20ou%20USJ.';

  return (
    <footer className="bg-[#07172d] text-slate-300 border-t border-slate-800 text-xs pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <HbsjBearingLogo className="h-10" showSubtitle={true} />
            <p className="text-slate-400 text-xs leading-relaxed">
              Fabricant direct de roulements industriels dans nos usines en Chine aux normes de qualité européennes. Exportation et approvisionnement pour revendeurs et industriels à l'international.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-amber-950/70 border border-amber-600/40 text-amber-300 font-bold">
                🇪🇺 USJ (Normes Europe)
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-950/70 border border-blue-600/40 text-blue-300 font-bold">
                🇨🇳 HBSJ (Top Qualité Chine)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider">
              Navigation & Catalogue
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button 
                  onClick={() => onNavigate?.('catalog')}
                  className="hover:text-blue-400 transition-colors text-blue-400 font-bold flex items-center gap-1 cursor-pointer text-left"
                >
                  <span>→ Catalogue Technique (171 Réf)</span>
                </button>
              </li>
              <li>
                <a href="/public/assets/aistudio/hbsj_9847da1b.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  <span>Télécharger Catalogue HBSJ (PDF)</span>
                </a>
              </li>
              <li>
                <a href="/public/assets/aistudio/usj_16db0aa4.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Télécharger Catalogue USJ (PDF)</span>
                </a>
              </li>
              <li><a href="#marques" className="hover:text-white transition-colors">Comparatif des 2 Marques</a></li>
              <li><a href="#industrie" className="hover:text-white transition-colors">Usines Chine (Qualité Europe)</a></li>
            </ul>
          </div>

          {/* Gammes Produits */}
          <div className="space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider">
              Séries Disponibles
            </div>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li>• Roulements rigides à billes (Séries 6000, 6200, 6300)</li>
              <li>• Roulements à rouleaux coniques (302.., 320.., 322..)</li>
              <li>• Paliers complets fonte (Séries UCP 204-211 & UCF)</li>
              <li>• Moyeux et roulements de roues auto (DU / DAC)</li>
              <li>• Cages et douilles à aiguilles de précision (Série K)</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider">
              Service Commercial & Export
            </div>
            <div className="space-y-2 text-xs">
              <div className="text-white font-bold text-sm">HBSJ & USJ Industry</div>
              <div className="text-slate-400 text-[11px]">Ventes Directes Usine & Export Mondial</div>
              
              <a 
                href="tel:+212635487673"
                className="flex items-center gap-2 hover:text-white transition-colors text-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#0052cc] shrink-0" />
                <span className="font-mono tabular-nums">{phoneNumber}</span>
              </a>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contacter sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {currentYear} HBSJ BEARING & USJ BEARING. Tous droits réservés.
          </div>
          <div className="flex flex-wrap items-center gap-3 text-slate-400">
            <span>High Quality Products</span>
            <span>·</span>
            <span>Stable Supply</span>
            <span>·</span>
            <span>Competitive Prices</span>
            <span>·</span>
            <span>Global Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
