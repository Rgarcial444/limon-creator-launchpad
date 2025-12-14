import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Zap, Rocket, Target, Sparkles, MessageCircle, Brain, Bot } from "lucide-react";
import Navigation from '@/components/Navigation';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { CircularTestimonials } from '@/components/ui/circular-testimonials';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: Zap,
    title: "Desarrollo Ultrarrápido",
    description: "Entregamos tu proyecto en tiempo récord sin comprometer la calidad",
    stat: "50% más rápido",
    color: "text-yellow-400"
  },
  {
    icon: Target,
    title: "Resultados Garantizados",
    description: "Cada proyecto está diseñado para generar conversiones reales",
    stat: "95% éxito",
    color: "text-green-400"
  },
  {
    icon: Sparkles,
    title: "Diseño que Impacta",
    description: "Creamos experiencias visuales que cautivan a tu audiencia",
    stat: "100% único",
    color: "text-purple-400"
  },
  {
    icon: Rocket,
    title: "Escalabilidad Total",
    description: "Tu sitio crecerá junto con tu negocio sin límites técnicos",
    stat: "∞ potencial",
    color: "text-blue-400"
  }
];

const aiShowcases = [
  {
    quote: "Automatización inteligente de procesos: desde chatbots hasta análisis predictivo. Transformamos la forma en que trabajas con soluciones de IA personalizadas.",
    name: "Chatbots Inteligentes",
    designation: "Atención 24/7 sin esfuerzo",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    quote: "Generación de contenido, análisis de datos y automatización de marketing. Potencia tu negocio con las últimas tecnologías de inteligencia artificial.",
    name: "IA Generativa",
    designation: "Contenido que conecta",
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
  },
  {
    quote: "Integración de modelos de lenguaje avanzados en tus flujos de trabajo. GPT, Claude, y más, adaptados a las necesidades específicas de tu empresa.",
    name: "Modelos de Lenguaje",
    designation: "El poder de la conversación",
    src: "https://images.unsplash.com/photo-1676299081847-c3c9e3f7d7bb?w=600&h=400&fit=crop",
  },
];

const aiFeatures = [
  { icon: Brain, label: "Machine Learning", desc: "Modelos predictivos" },
  { icon: Bot, label: "Chatbots", desc: "Asistentes 24/7" },
  { icon: Zap, label: "Automatización", desc: "Flujos inteligentes" },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleContact = () => {
    const message = 'Hola! Quiero conocer más sobre sus servicios digitales';
    const whatsappURL = `https://wa.me/527223145340?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:32px_32px] pointer-events-none" />
      
      <div className="relative z-10">
        <Navigation />
        
        {/* Header + AI Section combinados */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Sobre Nosotros</h1>
              <h2 className="text-lg md:text-xl text-slate-300 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Servicios especializados en desarrollo web, aplicaciones móviles y software personalizado
              </h2>
            </div>

            {/* AI Features pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {aiFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/20 rounded-xl hover:border-cyan-500/50 transition-colors backdrop-blur-sm"
                >
                  <feature.icon className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="font-medium text-white text-sm">{feature.label}</p>
                    <p className="text-xs text-slate-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* AI Testimonials carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <CircularTestimonials
                testimonials={aiShowcases}
                autoplay={true}
                colors={{
                  name: "#ffffff",
                  designation: "#22d3ee",
                  testimony: "#cbd5e1",
                  arrowBackground: "#0891b2",
                  arrowForeground: "#ffffff",
                  arrowHoverBackground: "#22d3ee",
                }}
                fontSizes={{
                  name: "1.5rem",
                  designation: "1rem",
                  quote: "1.1rem",
                }}
              />
            </motion.div>
          </div>
        </section>

        <section className="py-24 subtle-gradient overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-white">
                Transformamos Ideas en Éxito Digital
              </h2>
              <h3 className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                Creamos sitios web y soluciones digitales que impulsan tu negocio
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isActive = index === activeIndex;
                
                return (
                  <div
                    key={index}
                    className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-500 hover-lift ${
                      isActive 
                        ? 'bg-white/10 border-cyan-500/30 shadow-2xl backdrop-blur-md' 
                        : 'bg-white/5 border-white/20 hover:border-cyan-500/20 backdrop-blur-sm'
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className="text-center space-y-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
                        <Icon className={`h-8 w-8 ${benefit.color} transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
                      </div>
                      <div>
                        <Badge className={`mb-2 bg-slate-800/80 text-white border-slate-600/50 backdrop-blur-sm ${isActive ? 'animate-pulse' : ''}`}>
                          {benefit.stat}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                        <p className="text-slate-300 leading-relaxed text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        <section className="py-12 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Conversemos sobre tu proyecto. Te ayudo a crear la presencia digital que tu negocio necesita para crecer y destacar.
            </p>
            <div className="flex justify-center">
              <RainbowButton
                onClick={handleContact}
                className="!bg-gradient-to-r from-cyan-500 to-blue-500 !text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversemos
              </RainbowButton>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;