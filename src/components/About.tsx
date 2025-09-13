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
                    ? 'bg-primary/5 border-primary/30 shadow-large' 
                    : 'bg-card border-border hover:border-primary/20'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
                    <Icon className={`h-8 w-8 ${benefit.color} transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
                  </div>
                  <div>
                    <Badge variant="secondary" className={`mb-2 ${isActive ? 'animate-pulse' : ''}`}>
                      {benefit.stat}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
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
