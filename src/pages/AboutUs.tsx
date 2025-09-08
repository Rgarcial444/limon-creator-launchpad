import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Lightbulb, Award, TrendingUp, Heart, Code, Globe } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Enfoque en Resultados',
    description: 'Cada proyecto está diseñado para generar un impacto real y medible en tu negocio.'
  },
  {
    icon: Users,
    title: 'Colaboración Estrecha',
    description: 'Trabajamos contigo como un socio estratégico, no solo como un proveedor.'
  },
  {
    icon: Lightbulb,
    title: 'Innovación Constante',
    description: 'Utilizamos las últimas tecnologías y tendencias para mantenerte a la vanguardia.'
  },
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Nos comprometemos con la excelencia en cada línea de código y pixel de diseño.'
  }
];

const timeline = [
  {
    year: '2020',
    title: 'Fundación de la empresa',
    description: 'Iniciamos con la visión de democratizar la tecnología para PyMEs mexicanas.'
  },
  {
    year: '2021',
    title: 'Primeros 50 proyectos',
    description: 'Completamos nuestros primeros 50 proyectos exitosos, estableciendo nuestra reputación.'
  },
  {
    year: '2022',
    title: 'Expansión de servicios',
    description: 'Agregamos desarrollo de aplicaciones móviles y sistemas empresariales.'
  },
  {
    year: '2023',
    title: 'Certificaciones técnicas',
    description: 'Obtuvimos certificaciones en las principales tecnologías y frameworks.'
  },
  {
    year: '2024',
    title: 'Presente y futuro',
    description: 'Continuamos innovando y creciendo junto a nuestros clientes.'
  }
];

const stats = [
  { number: '200+', label: 'Proyectos Completados', icon: Code },
  { number: '98%', label: 'Satisfacción del Cliente', icon: Heart },
  { number: '50+', label: 'Empresas Confiaron en Nosotros', icon: Users },
  { number: '24/7', label: 'Soporte Disponible', icon: Globe }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Nuestra Historia
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transformando Ideas en
            <span className="block text-primary">Realidades Digitales</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Desde 2020, hemos ayudado a empresas mexicanas a crecer a través de 
            soluciones tecnológicas innovadoras, combinando experiencia empresarial 
            con desarrollo técnico de vanguardia.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center">
                  <Target className="h-8 w-8 mr-3 text-primary" />
                  Nuestra Misión
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Empoderar a las empresas mexicanas con tecnología de clase mundial, 
                  creando soluciones digitales que impulsen su crecimiento y competitividad 
                  en el mercado global, sin importar su tamaño o industria.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center">
                  <Lightbulb className="h-8 w-8 mr-3 text-primary" />
                  Nuestra Visión
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser el socio tecnológico de referencia en México, reconocido por 
                  transformar desafíos empresariales en oportunidades digitales que 
                  generen un impacto real y duradero.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Equipo trabajando en soluciones digitales"
                className="rounded-2xl shadow-large hover-scale"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Nuestros Valores
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Los Principios que Nos Guían
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada decisión y línea de código está respaldada por nuestros valores fundamentales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover-lift bg-background shadow-soft border">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Nuestro Camino
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              La Historia de Limon.io Creators
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="bg-card p-6 rounded-xl shadow-soft border hover-lift">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-primary">{item.year}</span>
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Únete a las empresas que ya confiaron en nosotros para llevar sus ideas al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/5215512345678?text=Hola! Me gustaría conocer más sobre sus servicios', '_blank')}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Hablemos de tu Proyecto
            </button>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium"
            >
              Ver Nuestros Servicios
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;