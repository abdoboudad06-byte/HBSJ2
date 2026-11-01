import React from 'react';
import { MessageCircle, Phone, BookOpen, Home } from 'lucide-react';

interface MobileBottomBarProps {
  activePage: 'home' | 'catalog';
  onNavigate: (page: 'home' | 'catalog') => void;
  onOpenWhatsApp: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  activePage,
  onNavigate,
  onOpenWhatsApp,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-pb">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* Button 1: Page Navigation Switcher */}
        {activePage === 'home' ? (
          <button
            onClick={() => onNavigate('catalog')}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:bg-blue-50 active:scale-95 transition-all text-center cursor-pointer shadow-sm"
          >
            <div className="relative">
              <BookOpen className="w-5 h-5 text-[#0052cc]" />
              <span className="absolute -top-1 -right-2 bg-[#0052cc] text-white text-[9px] font-mono px-1 rounded-full font-bold">
                171
              </span>
            </div>
            <span className="text-[11px] font-bold mt-1 text-[#0a192f]">Catalogue</span>
          </button>
        ) : (
          <button
            onClick={() => onNavigate('home')}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:bg-blue-50 active:scale-95 transition-all text-center cursor-pointer shadow-sm"
          >
            <Home className="w-5 h-5 text-[#0052cc]" />
            <span className="text-[11px] font-bold mt-1 text-[#0a192f]">Accueil Usines</span>
          </button>
        )}

        {/* Button 2: Direct Phone Call */}
        <a
          href="tel:+212635487673"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 active:scale-95 transition-all text-center shadow-sm"
        >
          <Phone className="w-5 h-5 text-[#0052cc]" />
          <span className="text-[11px] font-bold mt-1 text-[#0a192f]">Appeler</span>
        </a>

        {/* Button 3: Instant WhatsApp Contact */}
        <button
          onClick={onOpenWhatsApp}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-600/25 active:scale-95 transition-all text-center cursor-pointer"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping" />
          </div>
          <span className="text-[11px] font-extrabold mt-1">WhatsApp</span>
        </button>

      </div>
    </div>
  );
};
