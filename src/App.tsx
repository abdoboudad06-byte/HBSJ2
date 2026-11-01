import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroRealVideoPlayer } from './components/HeroRealVideoPlayer';
import { BrandsPresentation } from './components/BrandsPresentation';
import { CatalogPage } from './components/CatalogPage';
import { FactoryAndDepot } from './components/FactoryAndDepot';
import { CorporatePillars } from './components/CorporatePillars';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { TariffItem } from './data/officialTariffs';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'catalog'>('home');
  const defaultPhoneNumber = '212635487673';

  const handleOpenWhatsApp = (customText?: string) => {
    const text = customText
      ? encodeURIComponent(`Bonjour, je souhaite demander une cotation pour : ${customText}.`)
      : encodeURIComponent('Bonjour, je souhaite avoir des renseignements ou demander une cotation pour des roulements HBSJ / USJ.');
    window.open(`https://wa.me/${defaultPhoneNumber}?text=${text}`, '_blank');
  };

  const handleOrderSingleViaWhatsApp = (item: TariffItem) => {
    const msg = `Bonjour,\n\nJe souhaite demander le prix et la disponibilité pour la référence suivante :\n- Marque : ${item.brand} (${item.brand === 'USJ' ? 'Norme Europe' : 'Top Qualité Chine'})\n- Référence : ${item.type}\n- Catégorie : ${item.categoryLabel}\n${item.boreMm ? `- Dimensions : Ø${item.boreMm} × Ø${item.outerMm} × ${item.widthMm} mm\n` : ''}- Étanchéité : ${item.seal}\n\nPouvez-vous me transmettre votre meilleure cotation usine selon la quantité souhaitée ? Merci.`;
    window.open(`https://wa.me/${defaultPhoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleOrderMultipleViaWhatsApp = (items: TariffItem[]) => {
    let msg = `Bonjour,\n\nJe souhaite recevoir une cotation pour la liste de références suivantes :\n\n`;
    items.forEach((it, idx) => {
      msg += `${idx + 1}. [${it.brand}] ${it.type} (${it.categoryLabel}${it.boreMm ? ` - Ø${it.boreMm}×${it.outerMm}×${it.widthMm}mm` : ''})\n`;
    });
    msg += `\nMerci de me préparer un devis personnalisé selon les quantités et conditions de livraison.`;
    window.open(`https://wa.me/${defaultPhoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleSelectBrand = (brand: 'HBSJ' | 'USJ') => {
    setActivePage('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#0052cc] selection:text-white">
      
      {/* Top Bar Navigation with Official Logo */}
      <Navbar 
        activePage={activePage}
        onNavigate={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' ? (
          <>
            {/* 1. TOP PAGE: Real Native Video Player */}
            <HeroRealVideoPlayer 
              onOpenWhatsApp={() => handleOpenWhatsApp()}
              onGoToCatalog={() => {
                setActivePage('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectBrand={handleSelectBrand}
            />

            {/* 2. Dual Brands Presentation: USJ & HBSJ */}
            <BrandsPresentation 
              onSelectBrand={handleSelectBrand}
            />

            {/* 3. Global Industrial Factory in China & European Quality Standards */}
            <FactoryAndDepot />

            {/* 4. Corporate 4 Pillars & Commercial Service */}
            <CorporatePillars 
              onOpenWhatsApp={(ref) => handleOpenWhatsApp(ref)}
            />
          </>
        ) : (
          /* Separate Dedicated Page for Technical Catalogue (171 References without public retail prices) */
          <CatalogPage 
            onBackToHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOrderSingleViaWhatsApp={handleOrderSingleViaWhatsApp}
            onOrderMultipleViaWhatsApp={handleOrderMultipleViaWhatsApp}
          />
        )}
      </main>

      {/* Corporate Footer with Official Logo & Links */}
      <Footer 
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onNavigate={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Sticky Mobile Bottom Action Bar */}
      <MobileBottomBar 
        activePage={activePage}
        onNavigate={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

    </div>
  );
}
