
import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  ChevronDown, 
  Check, 
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Calendar,
  Award,
  Users,
  Sparkles,
  MapPin,
  UtensilsCrossed,
  FileText,
  Loader2
} from 'lucide-react';

// --- Types ---
interface Package {
  id: string;
  name: string;
  price: number | 'Sob Consulta';
  description: string;
  image: string;
  features: string[];
  tag?: string;
}

// --- Data ---
const PACKAGES: Package[] = [
  {
    id: 'intimista',
    name: 'Essência Intimista',
    price: 150000,
    description: 'A sutileza dos detalhes em um encontro exclusivo e memorável.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
    features: ['Curadoria de Design Floral', 'Mesa de Doces Artisanal', 'Até 25 Convidados', 'Gestão de Cerimonial']
  },
  {
    id: 'premium',
    name: 'Elite Signature',
    price: 450000,
    tag: 'Sinfonia do Casal',
    description: 'Onde o luxo encontra a emoção em produções de tirar o fôlego.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800',
    features: ['Cenografia de Luxo Total', 'Buffet Gastronómico Assinado', 'Som, Luz & Efeitos Sensoriais', 'Staff de Excelência Elite']
  },
  {
    id: 'gala',
    name: 'Majestic Gala',
    price: 'Sob Consulta',
    description: 'A celebração definitiva. Transformamos sonhos em marcos históricos.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    features: ['Assessoria 360º Personalizada', 'Arquitetura de Evento Exclusiva', 'Alta Gastronomia Internacional', 'Hospitalidade VIP & Concierge']
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 px-6 py-4 ${isScrolled ? 'bg-[#061B16]/98 backdrop-blur-xl py-3 shadow-[0_10px_40px_rgba(0,0,0,0.3)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-11 h-11 bg-gold rounded-full flex items-center justify-center text-midnight font-black text-2xl serif italic shadow-[0_0_20px_rgba(197,160,89,0.3)] group-hover:scale-110 transition duration-500">E</div>
          <span className={`text-2xl font-bold serif tracking-tighter ${isScrolled ? 'text-white' : 'text-midnight'}`}>Elite Events</span>
        </div>
        
        <div className={`hidden md:flex gap-12 text-[11px] font-bold uppercase tracking-[0.25em] ${isScrolled ? 'text-white/70' : 'text-midnight/60'}`}>
          <a href="#portfolio" className="hover:text-gold transition-colors duration-300">Portfolio</a>
          <a href="#solicitar" className="hover:text-gold transition-colors duration-300">Orçamento</a>
          <a href="#faq" className="hover:text-gold transition-colors duration-300">Suporte</a>
        </div>

        <button 
          onClick={() => document.getElementById('solicitar')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden sm:block btn-luxury px-9 py-3 rounded-full text-[11px] font-black uppercase tracking-widest shadow-xl"
        >
          SOLICITAR ORÇAMENTO
        </button>

        <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#061B16] text-white p-12 flex flex-col justify-center gap-10 transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-gold"><X size={44} /></button>
        <div className="space-y-8 text-center">
          <a href="#portfolio" className="block text-5xl serif" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#solicitar" className="block text-5xl serif" onClick={() => setIsOpen(false)}>Orçamento</a>
          <a href="#faq" className="block text-5xl serif" onClick={() => setIsOpen(false)}>Suporte</a>
        </div>
        <button onClick={() => document.getElementById('solicitar')?.scrollIntoView({ behavior: 'smooth' })} className="btn-luxury py-6 rounded-2xl font-black text-xl uppercase mt-8">CONTACTAR AGORA</button>
      </div>
    </nav>
  );
};

const App = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telemovel: '',
    data: '',
    localizacao: 'Talatona',
    mensagem: ''
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Pequeno delay para simular processamento "premium"
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const whatsappMsg = `Olá Elite Events! Gostaria de solicitar um orçamento:\n\n👤 Nome: ${formData.nome}\n📱 Telemóvel: ${formData.telemovel}\n📅 Data: ${formData.data}\n📍 Localização: ${formData.localizacao}\n✨ Mensagem: ${formData.mensagem}`;
    window.open(`https://wa.me/244000000000?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    setIsSubmitting(false);
  };

  const openWhatsAppTriagem = () => {
    const msg = "Olá! Ficamos muito felizes por querer celebrar connosco! 🎉\n\nPara te enviarmos um orçamento detalhado e confirmarmos a nossa disponibilidade, por favor preenche os dados abaixo:\n\n📅 Data do Evento:\n📍 Local (ou Zona de Luanda):\n👥 Número estimado de convidados:\n🎈 Tipo de Evento:\n✨ O que vais precisar? (Apenas Decoração / Apenas Buffet / Serviço Completo)\n💰 Orçamento estimado: (Opcional)";
    window.open(`https://wa.me/244000000000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const openWhatsAppCatering = () => {
    const msg = "Saudações da Elite Events Catering! 🥘\n\nJá estamos com água na boca só de pensar no teu evento! Para personalizarmos o teu menu, diz-nos:\n\nQual é o dia da festa?\nOnde será servido? (Casa particular, Salão, Quintal gourmet)\nHorário do serviço? (Almoço, Jantar ou Cocktel)\nAlguma restrição alimentar? (Ex: Alergias ou pratos tradicionais obrigatórios)";
    window.open(`https://wa.me/244000000000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-[#F7F2ED] -skew-x-12 translate-x-1/3 -z-10"></div>
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-left duration-1000">
            <div className="flex items-center gap-4">
              <Sparkles className="text-gold animate-pulse" size={24} />
              <span className="text-gold font-bold text-[11px] uppercase tracking-[0.5em] italic">Excelência em Eventos Luanda</span>
            </div>
            <h1 className="text-6xl md:text-[6.5rem] leading-[1] text-midnight font-black serif italic tracking-tighter">
              A Arte de <br />
              <span className="text-gold">Celebrar o Amor</span>
            </h1>
            <p className="text-xl text-midnight/50 font-medium leading-relaxed max-w-xl">
              Arquitetamos memórias de puro prestígio. Decorações autorais e buffet assinado para os eventos mais exclusivos de Angola.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button 
                onClick={() => document.getElementById('solicitar')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-luxury px-12 py-6 rounded-3xl font-black text-xs uppercase tracking-[0.25em] shadow-2xl flex items-center justify-center gap-4"
              >
                Solicitar Orçamento <ArrowRight size={20} />
              </button>
              <button 
                onClick={openWhatsAppTriagem}
                className="bg-midnight text-white px-12 py-6 rounded-3xl font-black text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-midnight transition-all duration-500 shadow-xl flex items-center gap-3"
              >
                Falar no WhatsApp
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-[15px] border-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.4)] rotate-3">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Hero Elite" />
            </div>
          </div>
        </div>
      </section>

      {/* Opções de Atendimento */}
      <section className="py-24 bg-midnight text-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 space-y-6 hover:bg-gold/10 transition duration-500 group cursor-pointer" onClick={openWhatsAppTriagem}>
            <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4">
              <FileText className="text-gold" size={32} />
            </div>
            <h3 className="text-3xl serif italic text-gold">Planeamento Completo</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Ideal para quem busca assessoria integral e decoração premium. Receba um orçamento detalhado via triagem WhatsApp.
            </p>
            <span className="flex items-center gap-3 text-gold font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
              Preencher Triagem Digital <ArrowRight size={18} />
            </span>
          </div>

          <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 space-y-6 hover:bg-gold/10 transition duration-500 group cursor-pointer" onClick={openWhatsAppCatering}>
            <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4">
              <UtensilsCrossed className="text-gold" size={32} />
            </div>
            <h3 className="text-3xl serif italic text-gold">Catering & Buffet</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              O melhor sabor de Angola na sua mesa. Personalizamos o seu menu com sabores tradicionais e contemporâneos.
            </p>
            <span className="flex items-center gap-3 text-gold font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
              Consultar Menu de Sabores <ArrowRight size={18} />
            </span>
          </div>
        </div>
      </section>

      {/* Solicitação de Orçamento Form */}
      <section id="solicitar" className="py-40 bg-[#F7F2ED] px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl serif text-midnight italic">Dê o primeiro passo para um dia memorável</h2>
            <p className="text-midnight/40 font-bold uppercase tracking-widest text-xs">Preencha os detalhes para um orçamento personalizado</p>
          </div>
          
          <form onSubmit={handleFormSubmit} className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl space-y-10 border border-gold/10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-midnight/40 ml-2">Nome Completo</label>
                <input required type="text" placeholder="Como devemos chamá-lo(a)?"
                  className="w-full bg-[#FDFCFB] border-b-2 border-gold/20 focus:border-gold py-4 px-4 text-midnight outline-none transition"
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-midnight/40 ml-2">Telemóvel</label>
                <input required type="tel" placeholder="+244"
                  className="w-full bg-[#FDFCFB] border-b-2 border-gold/20 focus:border-gold py-4 px-4 text-midnight outline-none transition"
                  onChange={(e) => setFormData({...formData, telemovel: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-midnight/40 ml-2">Data Prevista</label>
                <input required type="date"
                  className="w-full bg-[#FDFCFB] border-b-2 border-gold/20 focus:border-gold py-4 px-4 text-midnight outline-none transition"
                  onChange={(e) => setFormData({...formData, data: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-midnight/40 ml-2">Zona do Evento</label>
                <select className="w-full bg-[#FDFCFB] border-b-2 border-gold/20 focus:border-gold py-4 px-4 text-midnight outline-none transition cursor-pointer"
                  onChange={(e) => setFormData({...formData, localizacao: e.target.value})}
                >
                  <option value="Talatona">Talatona</option>
                  <option value="Alvalade">Alvalade</option>
                  <option value="Viana">Viana</option>
                  <option value="Benfica">Benfica</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-midnight/40 ml-2">O que sonha para este dia?</label>
              <textarea placeholder="Conte-nos brevemente o que imagina..."
                className="w-full bg-[#FDFCFB] border-b-2 border-gold/20 focus:border-gold py-4 px-4 text-midnight outline-none transition min-h-[120px]"
                onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
              />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full btn-luxury py-8 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-xl flex items-center justify-center gap-4">
              {isSubmitting ? (
                <> <Loader2 className="animate-spin" size={20} /> Processando... </>
              ) : (
                "Solicitar Orçamento em Kwanzas"
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Footer & FAQ Placeholder */}
      <footer className="bg-midnight pt-40 pb-20 px-6 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-midnight font-black text-4xl serif italic">E</div>
            <h3 className="text-4xl font-bold serif tracking-tighter">Elite Events</h3>
          </div>
          <div className="flex gap-8">
            <a href="#" className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-gold transition border border-white/10"><Instagram size={28} /></a>
            <a href="#" onClick={openWhatsAppTriagem} className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-gold transition border border-white/10"><MessageCircle size={28} /></a>
          </div>
          <p className="text-[11px] text-white/10 font-black uppercase tracking-[0.5em]">© 2025 ELITE EVENTS LUANDA — EXCELÊNCIA EM CADA DETALHE.</p>
        </div>
      </footer>

      {/* Floating Concierge */}
      <button 
        className="fixed bottom-12 right-12 z-[70] bg-[#25D366] text-white p-7 rounded-[2.5rem] shadow-[0_25px_60px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-500 group"
        onClick={openWhatsAppTriagem}
      >
        <div className="flex items-center gap-4">
          <MessageCircle size={36} />
          <span className="hidden lg:block font-black text-xs uppercase tracking-[0.3em]">Atendimento VIP</span>
        </div>
      </button>
    </div>
  );
};

export default App;
