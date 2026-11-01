import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ShieldCheck, Phone, Mail } from 'lucide-react';
import { QuoteRequest } from '../types/bearing';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductRef?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProductRef = '',
}) => {
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    city: 'Casablanca',
    productReference: initialProductRef,
    quantity: 10,
    deliveryUrgency: 'standard',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    if (initialProductRef) {
      setFormData((prev) => ({ ...prev, productReference: initialProductRef }));
    }
  }, [initialProductRef]);

  if (!isOpen) return null;

  const handlePhoneValidation = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    if (value.trim().length > 0 && value.trim().length < 8) {
      setPhoneError('Veuillez saisir un numéro de téléphone valide');
    } else {
      setPhoneError('');
    }
  };

  const getFormattedMessage = () => {
    return `*Demande de Devis - HBSJ BEARING*\n\n` +
      `👤 *Contact:* ${formData.fullName}\n` +
      `🏢 *Société:* ${formData.company || 'Particulier / Atelier'}\n` +
      `📍 *Ville:* ${formData.city}\n` +
      `📞 *Tél:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email || 'N/A'}\n\n` +
      `⚙️ *Référence(s):* ${formData.productReference}\n` +
      `📦 *Quantité:* ${formData.quantity} pièces\n` +
      `⚡ *Délai:* ${formData.deliveryUrgency === 'express' ? 'DÉPANNAGE EXPRESS' : formData.deliveryUrgency === 'urgent' ? 'Urgent (24h)' : 'Standard (48h)'}\n` +
      (formData.notes ? `📝 *Notes:* ${formData.notes}\n` : '') +
      `\n_Message envoyé depuis le site de présentation HBSJ Bearing_`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone && !formData.email) {
      setPhoneError('Veuillez renseigner au moins un numéro de téléphone ou un email');
      return;
    }
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(getFormattedMessage());
    window.open(`https://wa.me/212635487673?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Demande de Cotation HBSJ Bearing - ${formData.company || formData.fullName}`);
    const body = encodeURIComponent(getFormattedMessage().replace(/\*/g, ''));
    window.open(`mailto:contact@hbsjbearing.com?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
              Cotation Rapide B2B
            </div>
            <h3 className="text-lg font-display font-extrabold text-white mt-0.5">
              Demande de Prix & Disponibilité
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

        {/* Form Body or Success State */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white">Demande Prise en Compte !</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Merci <strong>{formData.fullName || 'cher client'}</strong>. Votre demande de cotation a bien été transmise à notre <strong>Service Commercial Export</strong>. Une cotation avec prix direct usine et disponibilité vous sera transmise sous 2 heures ouvrées.
              </p>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-left max-w-md mx-auto space-y-1.5 font-mono">
                <div className="text-blue-400 font-bold mb-2">Récapitulatif de votre demande :</div>
                <div>Réf : <span className="text-white">{formData.productReference || 'Toutes références'}</span></div>
                <div>Quantité : <span className="text-white">{formData.quantity} pcs</span></div>
                <div>Délai : <span className="text-white">{formData.deliveryUrgency}</span></div>
                <div>Service Commercial WhatsApp : <span className="text-white">+212 635 487 673</span></div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    const text = encodeURIComponent(getFormattedMessage());
                    window.open(`https://wa.me/212635487673?text=${text}`, '_blank');
                  }}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirmer aussi sur WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="p-3 bg-blue-950/40 border border-blue-900/50 rounded-xl text-xs text-slate-300 flex items-center justify-between">
                <span>Service Commercial Direct : <strong>WhatsApp (+212 635 487 673)</strong></span>
                <span className="font-mono text-blue-400">+212 635 487 673</span>
              </div>

              {/* Full Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Nom & Prénom <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ex: Mohamed Alami"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Entreprise / Atelier
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ex: Société Industrielle & Maintenance"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Téléphone (WhatsApp) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handlePhoneValidation(e.target.value)}
                    placeholder="Ex: 06 12 34 56 78"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 font-mono"
                  />
                  {phoneError && <p className="text-[11px] text-red-400 mt-1">{phoneError}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Email Professionnel
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@entreprise.ma"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* City & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Ville de Livraison
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Casablanca, Tanger, Rabat..."
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Délai Souhaité
                  </label>
                  <select
                    value={formData.deliveryUrgency}
                    onChange={(e) => setFormData({ ...formData, deliveryUrgency: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="standard">Standard (48 heures)</option>
                    <option value="urgent">Urgent (24 heures)</option>
                    <option value="express">Dépannage Express Machine à l'arrêt</option>
                  </select>
                </div>
              </div>

              {/* Product Reference & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Références de Roulements / Paliers <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.productReference}
                    onChange={(e) => setFormData({ ...formData, productReference: e.target.value })}
                    placeholder="Ex: 6205-2RS, 32210, UCP 205..."
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Quantité (pcs)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 font-mono text-center"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Précisions / Dimensions / Équivalences requises
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ex: Préciser jeu C3, étanchéité double lèvre, marque équivalente recherchée..."
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Envoyer via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmettre le Devis</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  Vos informations sont transmises de manière confidentielle à notre service commercial.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
