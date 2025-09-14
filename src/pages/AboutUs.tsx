import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
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
import { MarqueeAnimation } from '@/components/ui/marquee-effect';

const teamMembers = [
  {
    name: 'Ricardo Hernández',
    role: 'CEO & Fundador',
    image: '/src/assets/ricardo-portrait.jpg',
    quote: 'La tecnología debe servir a los negocios, no al revés',
    skills: ['Estrategia Digital', 'Liderazgo', 'Innovación']
  },
  {
    name: 'Ana García',
    role: 'CTO & Co-fundadora',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    quote: 'El código elegante resuelve problemas complejos de forma simple',
    skills: ['Full Stack', 'Arquitectura', 'DevOps']
  },
  {
    name: 'Carlos López',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    quote: 'El diseño es donde la ciencia y el arte se equilibran',
    skills: ['UI/UX', 'Branding', 'Prototyping']
  }
];

const companyValues = [
  {
    icon: Rocket,
    title: 'Velocidad de Impacto',
    description: 'Ejecutamos rápido sin sacrificar calidad. Tiempo es dinero, y lo respetamos.',
    color: 'from-blue-500/20 to-cyan-500/20',
    accent: 'text-blue-500'
  },
  {
    icon: Heart,
    title: 'Pasión Genuina',
    description: 'Cada proyecto es personal. Tu éxito es nuestro éxito, y eso nos motiva cada día.',
    color: 'from-red-500/20 to-pink-500/20',
    accent: 'text-red-500'
  },
  {
    icon: Zap,
    title: 'Innovación Constante',
    description: 'No seguimos tendencias, las creamos. Siempre un paso adelante del mercado.',
    color: 'from-yellow-500/20 to-orange-500/20',
    accent: 'text-yellow-600'
  },
  {
    icon: Target,
    title: 'Resultados Medibles',
    description: 'Cada línea de código tiene un propósito. Medimos, optimizamos y entregamos ROI real.',
    color: 'from-green-500/20 to-emerald-500/20',
    accent: 'text-green-500'
  }
];

const achievements = [
  { metric: '500+', label: 'Proyectos Exitosos', icon: Trophy },
  { metric: '99.2%', label: 'Satisfacción Cliente', icon: Star },
  { metric: '48h', label: 'Tiempo Respuesta', icon: Zap },
  { metric: '∞', label: 'Cafés Consumidos', icon: Coffee }
];

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
      
      {/* Hero Revolucionario */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
        <div className="container mx-auto max-w-7xl relative z-10">
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

            {/* Team Showcase Dinámico */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-4 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-20 h-20 bg-primary/10 rounded-full animate-pulse" />
                ))}
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Card className="w-80 bg-background/95 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
                  <CardHeader className="text-center pb-2">
                    <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-primary/20">
                      <AvatarImage src={teamMembers[activeTeamMember].image} />
                      <AvatarFallback>{teamMembers[activeTeamMember].name[0]}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">{teamMembers[activeTeamMember].name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {teamMembers[activeTeamMember].role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Quote className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground italic">
                        "{teamMembers[activeTeamMember].quote}"
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {teamMembers[activeTeamMember].skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee de Filosofía */}
      <section className="py-8 bg-primary/5 border-y border-primary/10">
        <MarqueeAnimation baseVelocity={15} className="text-primary/80 font-bold">
          INNOVACIÓN • RESULTADOS • PASIÓN • EXCELENCIA • VELOCIDAD • IMPACTO •
        </MarqueeAnimation>
      </section>

      {/* Valores Rediseñados */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20 text-sm font-semibold px-4 py-2">
              💎 ADN de la Empresa
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Los Valores que nos
              <span className="block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Definen
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No son solo palabras bonitas. Son principios que viven en cada decisión, 
              cada línea de código y cada interacción con nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative p-8 hover-lift hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/20 border-2 hover:border-primary/20"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center`}>
                        <Icon className={`h-8 w-8 ${value.accent}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Métricas de Impacto */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Números que Hablan por Nosotros
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className="group text-center p-6 rounded-2xl bg-background/80 backdrop-blur-sm hover-lift hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Revolucionario */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="space-y-8">
            <Sparkles className="h-16 w-16 text-primary mx-auto animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold">
              ¿Listo para Hacer
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Historia Juntos?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No vendemos servicios. Construimos alianzas estratégicas que transforman 
              industrias completas. Tu próximo paso puede cambiar todo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                size="lg" 
                onClick={() => window.open('https://wa.me/5215512345678?text=Quiero formar parte de la revolución digital', '_blank')}
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
              >
                Iniciar la Revolución <Rocket className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:scale-105 transition-all duration-300 text-lg px-8 py-4 border-2"
              >
                Ver Nuestro Arsenal <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;