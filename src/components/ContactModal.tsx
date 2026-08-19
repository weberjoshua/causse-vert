import React, { useState } from 'react';
import { X, Phone, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { CausseVertLogo } from './CausseVertLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Taille de Haies',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Lacapelle-Marival');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour Causse Vert, je vous contacte pour un devis : ${service} à ${city}. Nom: ${name}, Tél: ${phone}. ${message}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#fdfcf8] border border-black/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-[#1a1a1a] overflow-hidden">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#f0f2eb] hover:bg-[#e2e6d9] text-black/60 hover:text-black transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#f0f2eb] text-[#4a5d23] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1a1a1a] italic">
              Demande bien reçue !
            </h3>
            <p className="text-xs sm:text-sm font-sans text-black/70">
              Merci <strong>{name}</strong>. Je vous recontacte au <strong>{phone}</strong> sous 24h pour organiser une visite d'estimation gratuite à {city}.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href="tel:0647325535"
                className="w-full py-3 rounded-full bg-[#4a5d23] text-white font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow"
              >
                <Phone className="w-3.5 h-3.5" />
                Appeler maintenant : 06 47 32 55 35
              </a>
              <button
                type="button"
                onClick={onClose}
                className="py-2 text-xs font-sans text-black/60 hover:text-black underline cursor-pointer"
              >
                Fermer cette fenêtre
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CausseVertLogo size={36} />
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1a1a1a] italic">
                  Demande de Devis Gratuit
                </h3>
                <p className="text-[10px] font-sans uppercase tracking-widest text-[#4a5d23] font-bold">
                  Lacapelle-Marival & Figeac (Lot 46)
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[10px] font-sans uppercase font-bold tracking-widest text-black/70 mb-1">
                  Votre nom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex : M. ou Mme Garcia"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-black/10 text-[#1a1a1a] placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#4a5d23]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-sans uppercase font-bold tracking-widest text-black/70 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="06 12 34 56 78"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-black/10 text-[#1a1a1a] placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#4a5d23]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans uppercase font-bold tracking-widest text-black/70 mb-1">
                    Commune (Lot) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lacapelle-Marival, Figeac..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-black/10 text-[#1a1a1a] placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#4a5d23]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-sans uppercase font-bold tracking-widest text-black/70 mb-1">
                  Prestation
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-black/10 text-[#1a1a1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#4a5d23]"
                >
                  <option value="Taille de Haies">Taille de Haies</option>
                  <option value="Tonte de Pelouse">Tonte de Pelouse</option>
                  <option value="Entretien de Jardins">Entretien de Jardins</option>
                  <option value="Remise en état de friche">Remise en état de terrain</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-sans uppercase font-bold tracking-widest text-black/70 mb-1">
                  Description succincte
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex : Longueur de haie approximative, surface..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-black/10 text-[#1a1a1a] placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#4a5d23]"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#4a5d23] hover:bg-[#39481b] text-white font-sans font-bold text-xs uppercase tracking-widest shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer ma demande</span>
                </button>

                <a
                  href={`https://wa.me/33647325535?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#1EBE5D] font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Échanger sur WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
