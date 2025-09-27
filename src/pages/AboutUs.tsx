import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { WarpBackground } from '@/components/ui/warp-background';
import { 
  Rocket, 
  Zap, 
  Heart, 
  Code2, 
  ArrowRight,
  MessageCircle,
  Trophy,
  Target,
  Briefcase,
  GraduationCap,
  Users,
  MapPin,
  Mail,
  Calendar
} from 'lucide-react';
import Navigation from '@/components/Navigation';

// Datos del fundador con background profesional creativo
const founder = {
  name: 'Ricardo García',
  role: 'Fundador',
  location: 'Toluca/CDMX, México',
  email: 'Limon_50@hotmail.com',
  image: 'https://haxduiibwxlolflkrjuz.supabase.co/storage/v1/object/public/imagenes%20limoniocreators/myphoto.png',
  taglines: [
    'Transformando ideas en realidades digitales',
    'Arquitecto de experiencias tech',
    'Innovador serial en desarrollo web'
  ],
  bio: 'Con más de 2 años construyendo el futuro digital, he liderado equipos que han revolucionado la presencia online. Mi misión es democratizar la tecnología, haciendo que las mejores herramientas digitales estén al alcance de todos los emprendedores.',
  background: {
    experience: '2+ años',
    projects: '5+',
    clients: '15+',
    satisfaction: '99.5%'
  },
  journey: [
    {
      year: '2016',
      title: 'Primer Proyecto',
      description: 'Desarrollé mi primera web freelance para una cafetería local'
    },
    {
      year: '2018',
      title: 'Agencia Digital',
      description: 'Trabajé con mi primer agencia digital con un equipo de 3 desarrolladores'
    },
    {
      year: '2020',
      title: 'Expansión Internacional',
      description: 'Comenzamos a trabajar con clientes de LATAM'
    },
    {
      year: '2022',
      title: 'Limon Creators',
      description: 'Nace Limon Creators como la evolución de mi visión tech'
    },
    {
      year: '2025',
      title: 'Presente',
      description: 'Liderando la transformación digital de cientos de empresas'
    }
  ],
  expertise: [
    { skill: 'Team Leadership', level: 95 },
    { skill: 'Client Relations', level: 90 },
    { skill: 'Full Stack Development', level: 88 },
    { skill: 'Product Strategy', level: 92 }
  ]
};

const companyValues = [
  {
    icon: Rocket,
    title: 'Velocidad de Ejecución',
    description: 'Convertimos ideas en productos funcionales y en tiempo récord',
    metric: '3x más rápido'
  },
  {
    icon: Heart,
    title: 'Obsesión por el Cliente',
    description: 'Tu éxito es nuestra única métrica que importa',
    metric: '99.2% satisfacción'
  },
  {
    icon: Target,
    title: 'Resultados Medibles',
    description: 'Cada línea de código genera ROI comprobable',
    metric: '+130% conversiones'
  }
];

const AboutUs = () => {
  const [activeTagline, setActiveTagline] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTagline(prev => (prev + 1) % founder.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />
      
      {/* Hero Minimalista con Warp Background */}
      <WarpBackground 
        className="relative py-20 px-6 overflow-hidden min-h-[80vh] flex items-center"
        perspective={120}
        beamsPerSide={3}
        beamDuration={8}
        gridColor="hsl(220 13% 91% / 0.3)"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Contenido Principal */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{founder.location}</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-light leading-tight text-slate-900">
                  {founder.name}
                </h1>
                
                <div className="h-16 flex items-center">
                  <h2 className="text-2xl md:text-3xl text-slate-600 font-light transition-all duration-500">
                    {founder.taglines[activeTagline]}
                  </h2>
                </div>
                
                <p className="text-lg text-slate-700 leading-relaxed max-w-xl font-light">
                  {founder.bio}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => window.open('https://wa.me/527223145340?text=Hola Ricardo, quiero conocer más sobre Limon Creators', '_blank')}
                  className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Conversemos
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {founder.email}
                </Button>
              </div>
            </div>

            {/* Tarjeta de Perfil Profesional */}
            <div className="relative">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-4xl font-bold text-slate-700 shadow-lg">
                      RG
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{founder.role}</h3>
                    <p className="text-slate-600">Limon Creators</p>
                  </div>

                  {/* Métricas de Impacto */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                    {Object.entries(founder.background).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-slate-900">{value}</div>
                        <div className="text-xs text-slate-500 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </WarpBackground>

      {/* Journey Timeline Moderna */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200">
              <Calendar className="mr-2 h-3 w-3" />
              Mi Trayectoria
            </Badge>
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              El Camino hacia la Excelencia
            </h2>
          </div>

          <div className="space-y-8">
            {founder.journey.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-semibold shadow-lg group-hover:scale-110 transition-transform">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores Minimalistas */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              Lo que nos Define
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Principios que guían cada decisión y cada línea de código
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {value.description}
                  </p>
                  <Badge className="bg-slate-100 text-slate-700 border-slate-200">
                    {value.metric}
                  </Badge>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              Áreas de Expertise
            </h2>
          </div>

          <div className="space-y-6">
            {founder.expertise.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-slate-50 rounded-lg">
                <span className="text-lg font-medium text-slate-900">{item.skill}</span>
                <div className="flex items-center space-x-4">
                  <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-900 transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 w-12 text-right">
                    {item.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Minimalista */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light mb-6">
            ¿Listo para crear algo extraordinario?
          </h2>
          <p className="text-xl text-slate-300 mb-8 font-light">
            Transformemos tu visión en una realidad digital que impacte
          </p>
          
          <Button 
            size="lg" 
            onClick={() => window.open('https://wa.me/527223145340?text=Hola Ricardo, tengo una idea que quiero convertir en realidad', '_blank')}
            className="bg-white text-slate-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-4"
          >
            Iniciar Proyecto <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
