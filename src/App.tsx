import React from 'react';
import { 
  TrendingUp, 
  AlertCircle, 
  ArrowDownCircle, 
  Link, 
  Users, 
  ChevronRight, 
  Play, 
  Instagram, 
  Linkedin, 
  Youtube, 
  CheckCircle2,
  BarChart3,
  LayoutDashboard,
  Database
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    <img 
      src="https://lh3.googleusercontent.com/d/1IoGaGJCS0tgeMLZ3hyqWdqCklOBM6O88" 
      alt="SPA - Sales Performance Academy" 
      className="h-16 w-auto"
      referrerPolicy="no-referrer"
    />
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = "",
  onClick 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'outline' | 'gold'; 
  className?: string;
  onClick?: () => void;
}) => {
  const baseStyles = "px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-sm";
  const variants = {
    primary: "bg-spa-blue hover:bg-spa-blue/80 text-white shadow-lg shadow-spa-blue/20",
    outline: "border border-white/20 hover:border-spa-gold hover:text-spa-gold text-white",
    gold: "bg-spa-gold hover:bg-spa-gold/80 text-spa-dark shadow-lg shadow-spa-gold/20"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const SectionTitle = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-display font-bold mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/60 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-spa-dark/80 backdrop-blur-md border-b border-white/5">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <Logo className="scale-75 origin-left" />
      <div className="hidden md:flex items-center gap-8">
        <a href="#sobre" className="text-sm font-medium hover:text-spa-gold transition-colors">Sobre</a>
        <a href="#programas" className="text-sm font-medium hover:text-spa-gold transition-colors">Programas</a>
        <a href="#tecnologia" className="text-sm font-medium hover:text-spa-gold transition-colors">Tecnologia</a>
        <Button variant="outline" className="py-2 px-6 text-xs">Diagnóstico</Button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-spa-blue/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-spa-gold font-bold tracking-widest text-sm uppercase mb-4 block">Alta Performance Comercial</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Estruturamos sua <span className="text-spa-gold">máquina comercial</span> para gerar receita previsível todos os meses.
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-xl">
              Transforme vendedores comuns em máquinas de performance com a nossa consultoria estratégica e ecossistema de ferramentas focado em previsibilidade e escala.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold">Solicitar um Diagnóstico Comercial</Button>
              <Button variant="outline">Conhecer o Método</Button>
            </div>
          </motion.div>
        </div>
        <div className="lg:w-1/2 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
          >
            <img 
              src="https://picsum.photos/seed/sales-dashboard/1200/675" 
              alt="Dashboard de Vendas" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-spa-dark via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-spa-gold rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl shadow-spa-gold/20">
                <Play className="text-spa-dark fill-spa-dark w-8 h-8 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <p className="text-xs text-spa-gold font-bold uppercase tracking-widest mb-1">Assista agora</p>
                <p className="text-lg font-bold">O Método SPA por Cosme Araújo</p>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-spa-gold" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const PainPoints = () => {
  const pains = [
    { icon: AlertCircle, text: "Sua equipe bate cabeça por falta de um processo comercial claro." },
    { icon: TrendingUp, text: "Suas taxas de conversão estão abaixo da média do mercado.", rotate: true },
    { icon: Link, text: "Seu marketing gera leads, mas as vendas estão desconectadas da atração." },
    { icon: Users, text: "Seu time comercial é desorganizado e depende apenas de 'talento' ou motivação." }
  ];

  return (
    <section className="py-24 bg-spa-graphite/50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Você investe em marketing, tem bons produtos, mas não tem previsibilidade de caixa?"
          subtitle="Se a sua empresa enfrenta algum destes cenários, o problema não é o mercado. É a falta de processo."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pains.map((pain, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-spa-gold transition-all group shadow-xl"
            >
              <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center mb-6">
                <pain.icon className={`w-6 h-6 text-black ${pain.rotate ? 'rotate-180' : ''}`} />
              </div>
              <p className="text-black font-semibold leading-relaxed">{pain.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-spa-blue/5 border border-spa-blue/20"
        >
          <p className="text-xl font-medium">
            A SPA não é apenas uma consultoria. <span className="text-spa-gold">Somos a resposta analítica</span> para organizar seu funil e escalar suas vendas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Founder = () => (
  <section id="sobre" className="py-24 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-3xl overflow-hidden border-4 border-spa-gold/20"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1vplwC0bvdZRaHdssWPHg0VotzPvHwHYP" 
              alt="Cosme Araújo" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-spa-dark via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-3xl font-display font-bold">Cosme Araújo</p>
              <p className="text-spa-gold font-medium uppercase tracking-widest text-sm">Arquiteto de Máquinas Comerciais</p>
            </div>
          </motion.div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-spa-gold/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-spa-blue/10 blur-3xl rounded-full" />
        </div>
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Conheça Cosme Araújo, o Arquiteto de Máquinas Comerciais.</h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>Cosme Araújo atua no mercado de vendas há mais de 15 anos. Ao longo de sua trajetória, ele uniu estratégia, execução e resultado para desenvolver profissionais e estruturar operações comerciais sólidas.</p>
              <p>Como treinador, consultor e mentor, já ajudou dezenas de empresas a organizar seus funis de vendas, alinhar marketing e vendas, e implementar estratégias de outbound e inbound.</p>
              <p>Apaixonado por tecnologia e inovação, Cosme defende uma tese clara: <span className="text-white font-bold italic">"vender é profissão, processo e estratégia"</span>. Ele acredita que a performance comercial não depende de talento isolado, mas de um método robusto, sistema eficiente e disciplina diária.</p>
              <p>Foi com essa visão que fundou a SPA, com o propósito de transformar o mercado e construir máquinas comerciais escaláveis.</p>
            </div>
            <div className="mt-10 flex gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-spa-gold">15+</span>
                <span className="text-xs uppercase tracking-widest text-white/50">Anos de Exp.</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-spa-gold">100+</span>
                <span className="text-xs uppercase tracking-widest text-white/50">Empresas</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-spa-gold">10k+</span>
                <span className="text-xs uppercase tracking-widest text-white/50">Vendedores</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Programs = () => {
  const programs = [
    {
      title: "Consultoria 2x Growth Sales",
      description: "Nossa consultoria estratégica premium. Desenhamos e implementamos a sua estrutura comercial interna com foco na integração total entre marketing e vendas.",
      button: "Quero Escalar Minha Empresa",
      highlight: true
    },
    {
      title: "Treinamento Vendedor 2X de Alta Performance",
      description: "Onde vendedores comuns se tornam máquinas de performance. Um treinamento imersivo que fornece método, sistema e disciplina para sua equipe.",
      button: "Quero Treinar Minha Equipe",
      highlight: false
    },
    {
      title: "Domine o Processo de Vendas no Whatsapp",
      description: "Transforme o WhatsApp da sua empresa em uma esteira de conversão acelerada. Aprenda a gerenciar leads com cadência e scripts focados em métricas.",
      button: "Dominar Vendas no WhatsApp",
      highlight: false
    }
  ];

  return (
    <section id="programas" className="py-24 bg-spa-graphite/30">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Nossos Programas de Aceleração e Alta Performance"
          subtitle="A escada de valor desenhada para cada estágio do seu negócio."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((prog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-3xl border flex flex-col h-full transition-all duration-500 ${
                prog.highlight 
                ? 'bg-spa-blue/10 border-spa-blue shadow-2xl shadow-spa-blue/10 scale-105 z-10' 
                : 'bg-spa-dark border-white/5 hover:border-white/20'
              }`}
            >
              <div className="mb-8">
                {prog.highlight && (
                  <span className="bg-spa-blue text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">Mais Procurado</span>
                )}
                <h3 className="text-2xl font-display font-bold mb-4">{prog.title}</h3>
                <p className="text-white/60 leading-relaxed">{prog.description}</p>
              </div>
              <div className="mt-auto">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-spa-gold" /> Método Exclusivo</li>
                  <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-spa-gold" /> Suporte Estratégico</li>
                  <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-spa-gold" /> Foco em ROI</li>
                </ul>
                <Button variant={prog.highlight ? 'gold' : 'outline'} className="w-full">
                  {prog.button}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Ecosystem = () => {
  const tools = [
    {
      icon: Database,
      title: "Prospect Elite CRM",
      description: "A ferramenta definitiva para organizar a sua prospecção ativa e inbound. Pare de perder leads e passe a dominar cada etapa da jornada de compra do seu cliente.",
      image: "https://lh3.googleusercontent.com/d/1byelUBwxkLLzq5ZkC8ttehtDzyAZhght"
    },
    {
      icon: BarChart3,
      title: "Painel SDR Performance",
      description: "Gestão à vista. Um dashboard focado em métricas reais de negócio (CPL, CAC, ROI), permitindo que diretores e gestores tomem decisões analíticas em tempo real.",
      image: "https://lh3.googleusercontent.com/d/15bgX-QREpwd2SGh9R7_YOuQCeHtFmfwo"
    },
    {
      icon: LayoutDashboard,
      title: "CRM SPA",
      description: "O coração da sua máquina comercial. Um sistema estruturado para gestão de leads e controle milimétrico do funil interno, desenvolvido com o método exclusivo.",
      image: "https://lh3.googleusercontent.com/d/1hzv_lhbKWKkJ_WInB9H7VbQAj4GzmMkr"
    }
  ];

  return (
    <section id="tecnologia" className="py-24">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Tecnologia para Previsibilidade e Controle"
          subtitle="Nós não entregamos apenas teoria. Construímos um ecossistema de ferramentas práticas para que a execução diária do seu time seja impecável e baseada em dados."
        />

        <div className="space-y-24">
          {tools.map((tool, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
            >
              <div className="lg:w-1/2">
                <div className="w-16 h-16 rounded-2xl bg-spa-gold/10 flex items-center justify-center mb-8">
                  <tool.icon className="w-8 h-8 text-spa-gold" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-6">{tool.title}</h3>
                <p className="text-xl text-white/70 leading-relaxed mb-8">{tool.description}</p>
                <div className="flex items-center gap-4 text-spa-gold font-bold uppercase tracking-widest text-sm cursor-pointer hover:gap-6 transition-all">
                  Ver Demonstração <ChevronRight className="w-5 h-5" />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative p-4 rounded-3xl bg-spa-graphite border border-white/10 shadow-2xl">
                  <img 
                    src={tool.image} 
                    alt={tool.title} 
                    className="rounded-2xl w-full shadow-inner"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-tr from-spa-blue/20 to-spa-gold/20 rounded-3xl -z-10 blur-xl opacity-50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-spa-dark border-t border-white/5 pt-24 pb-12">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-10"
        >
          Chegou a hora de parar de depender de sorte e construir uma estrutura comercial de verdade.
        </motion.h2>
        <Button variant="gold" className="mx-auto">Agendar meu Diagnóstico Estratégico</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <Logo className="mb-8" />
          <p className="text-white/50 text-sm leading-relaxed italic">
            "Vender é profissão, é processo e é estratégia." <br /> – Cosme Araújo
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-spa-gold">Links Úteis</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Estudos de Caso</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog de Autoridade</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-spa-gold">Programas</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Consultoria 2x Growth</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Treinamento Vendedor 2X</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Vendas no WhatsApp</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mentoria Elite</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-spa-gold">Redes Sociais</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-spa-blue transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-spa-blue transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-spa-blue transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>© 2024 SPA - Sales Performance Academy. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Políticas de Privacidade</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Founder />
      <Programs />
      <Ecosystem />
      <Footer />
    </div>
  );
}
