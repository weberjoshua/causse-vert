import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { CausseVertLogo } from './CausseVertLogo';

interface ContactSectionProps {
  initialService?: string;
  initialTown?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Taille de Haies',
  initialTown = 'Lacapelle-Marival',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: initialTown,
    service: initialService,
    hedgeLength: '20',
    lawnArea: '500',
    evacuate: true,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour Causse Vert, je souhaiterais un devis pour : ${formData.service} à ${formData.city || 'Lacapelle-Marival'}. Mon nom : ${formData.fullName || 'Client'}. Tél : ${formData.phone || ''}. Message : ${formData.message || 'Merci de me recontacter.'}`
  );

  return (
    <section id="contact" className="py-20 bg-[#f0f2eb] text-[#1a1a1a] border-t border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#4a5d23] font-bold font-sans">
            Devis Gratuit & Visite sur Place
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] tracking-tight italic">
            Parlons de Votre Jardin
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-black/60 font-sans">
            Une question ou besoin d’un devis ? Remplissez ce formulaire ou contactez-moi directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Coordonnées & Trust Info */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm space-y-6">
              
              <div className="flex items-center gap-4">
                <CausseVertLogo size={52} />
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1a1a1a] italic">
                    Causse Vert
                  </h3>
                  <p className="text-[10px] font-sans uppercase tracking-widest text-[#4a5d23] font-bold">
                    Entretien de haies et jardins • Lot (46)
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-black/5">
                {/* Phone */}
                <a
                  href="tel:0647325535"
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#fdfcf8] hover:bg-[#f0f2eb] border border-black/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4a5d23] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-sans font-bold text-black/50">
                      Téléphone Direct
                    </div>
                    <div className="text-base font-sans font-bold text-[#1a1a1a] group-hover:text-[#4a5d23]">
                      06 47 32 55 35
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:caussevert@gmail.com"
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#fdfcf8] hover:bg-[#f0f2eb] border border-black/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4a5d23] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-sans font-bold text-black/50">
                      Email
                    </div>
                    <div className="text-xs sm:text-sm font-sans font-bold text-[#1a1a1a] group-hover:text-[#4a5d23] break-all">
                      caussevert@gmail.com
                    </div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#fdfcf8] border border-black/5">
                  <div className="w-10 h-10 rounded-xl bg-[#4a5d23] flex items-center justify-center shrink-0 text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-sans font-bold text-black/50">
                      Adresse
                    </div>
                    <div className="text-xs sm:text-sm font-sans font-medium text-[#1a1a1a]">
                      467 Rte de Figeac, 46120 Lacapelle-Marival
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours & Availability */}
              <div className="pt-2 border-t border-black/5 flex items-center justify-between text-xs font-sans text-black/60">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#4a5d23]" />
                  <span>Lun - Sam : 8h00 - 19h00</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#4a5d23] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Devis gratuit</span>
                </div>
              </div>

            </div>

            {/* Quick WhatsApp Action Button */}
            <a
              href={`https://wa.me/33647325535?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contacter sur WhatsApp</span>
            </a>

          </div>

          {/* Right Column: Quote Request Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm">
            
            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#f0f2eb] text-[#4a5d23] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a] italic">
                  Demande de devis enregistrée !
                </h3>
                <p className="text-xs sm:text-sm font-sans text-black/70 max-w-md mx-auto leading-relaxed">
                  Merci <strong>{formData.fullName}</strong>. Je prends connaissance de votre demande pour votre jardin à <strong>{formData.city}</strong> et je vous recontacte au <strong>{formData.phone}</strong> sous 24h.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:0647325535"
                    className="px-6 py-3 rounded-full bg-[#4a5d23] text-white font-sans font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Appeler le 06 47 32 55 35
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-black/60 hover:text-black font-sans text-xs underline cursor-pointer"
                  >
                    Nouvelle demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-2 italic">
                  Formulaire de Devis Gratuit
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] uppercase font-sans font-bold tracking-widest text-black/70 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex : Jean Dupont"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fdfcf8] border border-black/10 text-[#1a1a1a] placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#4a5d23]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] uppercase font-sans font-bold tracking-widest text-black/70 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex : 06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fdfcf8] border border-black/10 text-[#1a1a1a] placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#4a5d23]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-[10px] uppercase font-sans font-bold tracking-widest text-black/70 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fdfcf8] border border-black/10 text-[#1a1a1a] placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#4a5d23]"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-[10px] uppercase font-sans font-bold tracking-widest text-black/70 mb-1">
                      Commune (Lot) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Lacapelle-Marival, Figeac..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fdfcf8] border border-black/10 text-[#1a1a1a] placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#4a5d23]"
                    />
                  </div>
                </div>

                {/* Service select */}
                <div>
                  <label className="block text-[10px] uppercase font-sans font-bold tracking-widest text-black/70 mb-1">
                    Prestation souhaitée *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#fdfcf8] border border-black/10 text-[#1a1a1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#4a5d23]"
                  >
                    <option value="Taille de Haies">Taille de Haies</option>
                    <option value="Tonte de Pelouse">Tonte de Pelouse & Finitions</option>
                    <option value="Entretien de Jardins">Entretien de Jardins & Remise au propre</option>
                    <option value="Remise en état de friche">Remise en état de terrain</option>
                  </select>
                </div>

                {/* Waste checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="evacuate"
                    checked={formData.evacuate}
                    onChange={(e) => setFormData({ ...formData, evacuate: e.target.checked })}
                    className="w-4 h-4 rounded text-[#4a5d23] focus:ring-[#4a5d23]"
                  />
                  <label htmlFor="evacuate" className="text-xs font-sans text-black/70 cursor-pointer">
                    Je souhaite l’évacuation et le recyclage des déchets verts
                  </label>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] uppercase font-sans font-bold tracking-widest text-black/70 mb-1">
                    Précisions sur vos extérieurs
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex : Longueur de haie d'environ 30 m, pelouse de 800 m²..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#fdfcf8] border border-black/10 text-[#1a1a1a] placeholder-black/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#4a5d23]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#4a5d23] hover:bg-[#39481b] text-white font-sans font-bold text-xs uppercase tracking-widest shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Envoyer ma demande de devis gratuit</span>
                  </button>
                  <p className="text-[10px] font-sans text-black/50 text-center mt-2">
                    🔒 Vos informations restent strictement confidentielles. Réponse sous 24h.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
