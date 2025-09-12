import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Rocket, Target, Sparkles, ArrowRight, CheckCircle } from "lucide-react";

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

const features = [
  "Optimización SEO avanzada",
  "Responsive en todos los dispositivos", 
  "Velocidad de carga ultrarrápida",
  "Integración con redes sociales",
  "Panel de administración intuitivo",
  "Soporte técnico permanente"
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 subtle-gradient overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            ¿Por qué elegirnos?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Transformamos Ideas en
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Éxito Digital
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No solo creamos sitios web, construimos máquinas de conversión que impulsan tu negocio hacia el siguiente nivel
          </p>
        </div>

        {/* Interactive Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={index}
                  className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-500 hover-lift ${
                    isActive 
                      ? 'bg-primary/5 border-primary/30 shadow-large' 
                      : 'bg-card border-border hover:border-primary/20'
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
                      <Icon className={`h-6 w-6 ${benefit.color} transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{benefit.title}</h3>
                        <Badge variant="secondary" className={`${isActive ? 'animate-pulse' : ''}`}>
                          {benefit.stat}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Features Showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-background p-8 rounded-3xl border">
              <h3 className="text-2xl font-bold mb-6 text-center">Lo que incluye tu proyecto</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm hover-lift"
                    style={{ 
                      animationDelay: `${index * 0.1}s` 
                    }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button size="lg" className="group">
                  Comenzar mi proyecto
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Call to Action Strip */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para destacar de la competencia?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Únete a más de 100+ empresas que ya han transformado su presencia digital con nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default">
              Ver Portfolio
            </Button>
            <Button size="lg" variant="outline">
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
