import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { WarpBackground } from '@/components/ui/warp-background'; // ✅ NUEVO IMPORT
import { 
  Rocket, 
  Zap, 
  Heart, 
  Users, 
  Code2, 
  Sparkles, 
  ArrowRight,
  Quote,
  Star,
  Trophy,
  Target,
  Coffee
} from 'lucide-react';
import Navigation from '@/components/Navigation';
// ❌ REMOVIDO: import { MarqueeAnimation } from '@/components/ui/marquee-effect';

// ... (mantén todos tus arrays: teamMembers, companyValues, achievements)

const AboutUs = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTeamMember(prev => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      {/* Hero con WarpBackground */}
      <WarpBackground 
        className="relative py-32 px-6 overflow-hidden"
        perspective={150}
        beamsPerSide={4}
        beamDuration={5}
        gridColor="hsl(var(--primary) / 0.1)"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* AQUÍ va TODO tu contenido del hero existente */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-none px-6 py-2 text-sm font-semibold">
                  🚀 Transformando el Futuro Digital
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  No Solo
                  <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                    Construimos
                  </span>
                  <span className="block">Creamos Imperios</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Somos los arquitectos digitales que convierten visiones ambiciosas en 
                  realidades tecnológicas que dominan mercados.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all">
                  Conoce Nuestro Poder <Rocket className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-all">
                  Ver Casos de Éxito <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Tu Team Showcase Dinámico existente */}
            <div className="relative">
              {/* Mantén todo tu código del team showcase */}
            </div>
          </div>
        </div>
      </WarpBackground>

      {/* ❌ REMOVIDO: Marquee de Filosofía */}

      {/* Valores con WarpBackground sutil */}
      <section className="py-24 px-6">
        <WarpBackground 
          className="container mx-auto max-w-6xl"
          perspective={80}
          beamsPerSide={2}
          beamDuration={6}
          gridColor="hsl(var(--muted) / 0.05)"
        >
          {/* AQUÍ va TODO tu contenido de valores existente */}
        </WarpBackground>
      </section>

      {/* Resto de secciones sin WarpBackground por ahora */}
      {/* ... métricas, CTA, etc. (mantén como están) */}
    </div>
  );
};

export default AboutUs;
