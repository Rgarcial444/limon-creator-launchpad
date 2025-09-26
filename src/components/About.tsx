import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Rocket, Target, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import Navigation from '@/components/Navigation';
import { MarqueeAnimation } from '@/components/ui/marquee-effect';
import { RainbowButton } from '@/components/ui/rainbow-button';

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
    const whatsappURL = `https://wa.me/5215512345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Fondo animado con patrones sutiles */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:32px_32px] pointer-events-none" />
      
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section Simplificado */}
        <section className="py-16 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <p className="text-xl text-slate-300 mb-8 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              Descubre nuestros servicios especializados en desarrollo web, aplicaciones móviles y software personalizado.
            </p>
          </div>
        </section>

        {/* Benefits Section - Full Width */}
        <section className="py-24 subtle-gradient overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                Transformamos Ideas en
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Éxito Digital
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                No solo creamos sitios web, construimos máquinas de conversión que impulsan tu negocio hacia el siguiente nivel
              </p>
            </div>

            {/* Benefits Grid - Full Width */}
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
        
        {/* Nueva sección de conversación */}
        <section className="py-12 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Conversemos sobre tu proyecto. Te ayudo a crear la presencia digital que tu negocio necesita para crecer y destacar.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <RainbowButton
                onClick={handleContact}
                className="!bg-gradient-to-r from-cyan-500 to-blue-500 !text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversemos
              </RainbowButton>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-slate-300 border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm transition-all duration-300"
              >
                Ver Portafolio <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Marquee Effect Footer - Solo Segunda Línea */}
        <footer className="relative px-6 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="relative py-1">
            <MarqueeAnimation
              direction="right"
              baseVelocity={-1.5}
              className="text-xs md:text-sm py-0.5"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-normal">
                TECNOLOGÍA • DISEÑO • SOLUCIONES • CREATIVIDAD • RESULTADOS
              </span>
            </MarqueeAnimation>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
