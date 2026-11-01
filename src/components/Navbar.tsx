import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, BookOpen, FileText } from 'lucide-react';
import { HbsjBearingLogo } from './HbsjBearingLogo';

interface NavbarProps {
  activePage: 'home' | 'catalog';
  onNavigate: (page: 'home' | 'catalog') => void;
  onOpenWhatsApp: (customText?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneNumber = '+212 635 487 673';
  const whatsappUrl = 'https://wa.me/212635487673?text=Bonjour,%20je%20souhaite%20demander%20des%20informations%20ou%20une%20cotation%20sur%20les%20roulements%20HBSJ%20ou%20USJ.';

  return (
    <>
      {/* Main Top Bar in Business Card Corporate White & Royal Blue */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-3 sm:px-8 py-2.5 sm:py-3.5">
          
          {/* Official Brand Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center text-slate-900 group shrink-0 cursor-pointer text-left"
            aria-label="Accueil HBSJ & USJ Bearing"
          >
            <HbsjBearingLogo className="h-8 sm:h-11" showSubtitle={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <button
              onClick={() => onNavigate('home')}
              className={`hover:text-[#0052cc] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activePage === 'home' ? 'text-[#0052cc] font-black border-b-2 border-[#0052cc] pb-0.5' : 'text-slate-700'
              }`}
            >
              Accueil & Usines
            </button>

            {/* Separate Dedicated Page for Catalogue */}
            <button
              onClick={() => onNavigate('catalog')}
              className={`hover:text-[#0052cc] transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                activePage === 'catalog'
                  ? 'text-[#0052cc] font-black bg-blue-50 border border-blue-200 px-3 py-1 rounded-lg'
                  : 'text-slate-800 font-bold bg-slate-100 hover:bg-blue-50 px-3 py-1 rounded-lg'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#0052cc]" />
              <span>Catalogue Références</span>
              <span className="text-[10px] bg-[#0052cc] text-white font-mono px-1.5 py-0.2 rounded-full font-bold">
                171 Réf
              </span>
            </button>

            <a 
              href="#marques" 
              onClick={() => onNavigate('home')}
              className="hover:text-[#0052cc] transition-colors whitespace-nowrap shrink-0"
            >
              Nos 2 Marques (USJ / HBSJ)
            </a>

            <a 
              href="#industrie" 
              onClick={() => onNavigate('home')}
              className="hover:text-[#0052cc] transition-colors whitespace-nowrap shrink-0"
            >
              Usines en Chine (Qualité Europe)
            </a>

            <a 
              href="#commercial" 
              onClick={() => onNavigate('home')}
              className="hover:text-[#0052cc] transition-colors whitespace-nowrap shrink-0"
            >
              Contact Commercial
            </a>
          </nav>

          {/* Desktop CTA in Card Royal Blue & Emerald WhatsApp */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:+212635487673"
              className="text-xs font-mono font-bold text-slate-700 hover:text-[#0052cc] flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>{phoneNumber}</span>
            </a>

            {activePage === 'home' ? (
              <button
                onClick={() => onNavigate('catalog')}
                className="px-4 py-2 text-xs font-bold text-white bg-[#0052cc] hover:bg-[#0041a3] rounded-lg shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Catalogue (171 Réf)</span>
              </button>
            ) : (
              <button
                onClick={() => onOpenWhatsApp()}
                className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Demander un Devis WhatsApp</span>
              </button>
            )}
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={() => onNavigate(activePage === 'home' ? 'catalog' : 'home')}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-lg flex items-center gap-1 cursor-pointer transition-all ${
                activePage === 'home' 
                  ? 'bg-[#0052cc] text-white shadow-sm'
                  : 'bg-emerald-600 text-white shadow-sm'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{activePage === 'home' ? 'Catalogue' : 'Accueil'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0052cc] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Menu Mobile"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0052cc]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-5 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-3 duration-200">
            
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs">
              <span className="text-[#0a192f] font-bold">Catalogue Mondial :</span>
              <span className="font-mono text-[#0052cc] font-extrabold bg-white px-2 py-0.5 rounded shadow-sm border border-blue-200">
                171 Réf. Techniques
              </span>
            </div>

            <nav className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`py-2.5 px-3 rounded-lg text-left transition-colors flex items-center justify-between ${
                  activePage === 'home' 
                    ? 'bg-blue-50 text-[#0052cc] font-black border border-blue-200' 
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span>Accueil & Présentation Usines</span>
                <span className="text-xs text-slate-400">→</span>
              </button>

              <button 
                onClick={() => {
                  onNavigate('catalog');
                  setMobileMenuOpen(false);
                }}
                className={`py-2.5 px-3 rounded-lg text-left transition-colors flex items-center justify-between ${
                  activePage === 'catalog'
                    ? 'bg-blue-50 text-[#0052cc] font-black border border-blue-200'
                    : 'hover:bg-slate-50 text-[#0052cc] font-bold'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#0052cc]" />
                  <span>Catalogue des 171 Références</span>
                </div>
                <span className="text-xs bg-[#0052cc] text-white font-mono px-2 py-0.5 rounded-full font-bold">
                  171 Réf
                </span>
              </button>

              <a 
                href="#marques" 
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 px-3 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors flex items-center justify-between"
              >
                <span>Nos 2 Marques : 🇪🇺 USJ & 🇨🇳 HBSJ</span>
                <span className="text-xs text-slate-400">→</span>
              </a>

              <a 
                href="#industrie" 
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 px-3 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors flex items-center justify-between"
              >
                <span>Usines en Chine (Qualité Europe)</span>
                <span className="text-xs text-slate-400">→</span>
              </a>

              <a 
                href="#commercial" 
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 px-3 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors flex items-center justify-between"
              >
                <span>Contact Commercial & WhatsApp</span>
                <span className="text-xs text-slate-400">→</span>
              </a>
            </nav>

            {/* Official PDF Downloads */}
            <div className="pt-3 border-t border-slate-200 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                Télécharger les catalogues officiels (PDF) :
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="/public/assets/aistudio/hbsj_9847da1b.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-[11px] font-bold text-[#0052cc] flex items-center gap-1.5 justify-center"
                >
                  <FileText className="w-3.5 h-3.5 text-[#0052cc]" />
                  <span>Catalogue HBSJ (PDF)</span>
                </a>
                <a
                  href="/public/assets/aistudio/usj_16db0aa4.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-[11px] font-bold text-amber-800 flex items-center gap-1.5 justify-center"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-700" />
                  <span>Catalogue USJ (PDF)</span>
                </a>
              </div>
            </div>

            {/* Direct Commercial Actions */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Demander une Cotation WhatsApp</span>
              </a>

              <a
                href="tel:+212635487673"
                className="w-full py-2.5 text-center text-xs font-bold text-[#0a192f] bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#0052cc]" />
                <span>Appeler : +212 635 487 673</span>
              </a>
            </div>

          </div>
        )}
      </header>
    </>
  );
};
