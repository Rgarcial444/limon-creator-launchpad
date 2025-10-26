import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Code, Zap, Star, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { MarqueeAnimation } from '@/components/ui/marquee-effect';

const services = [
  {
    id: 1,
    title: 'Sitio Web Corporativo',
    description: 'Diseño web profesional que refleja la identidad de tu marca con funcionalidades avanzadas.',
    category: 'web',
    price: 'Desde $1,500 MXN',
    features: ['Diseño responsivo', 'SEO optimizado', 'Panel de administración', 'Integración con redes sociales'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    rating: 4.9,
    duration: '2-3 semanas',
    expandedContent: {
      technologies: ['React', 'Next.js', 'TailwindCSS', 'Node.js'],
      deliverables: ['Diseño mockup', 'Sitio web completo', 'Panel admin', 'Documentación'],
      process: 'Análisis → Diseño → Desarrollo → Testing → Despliegue'
    }
  },
  {
    id: 2,
    title: 'E-commerce Avanzado',
    description: 'Tienda en línea completa con sistema de pagos, inventario y gestión de pedidos.',
    category: 'ecommerce',
    price: 'Desde $4,500 MXN',
    features: ['Carrito de compras', 'Pagos seguros', 'Gestión de inventario', 'Panel de ventas'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    rating: 4.8,
    duration: '4-6 semanas',
    expandedContent: {
      technologies: ['WooCommerce', 'Stripe', 'PayPal', 'MySQL'],
      deliverables: ['Tienda online', 'Panel administrador', 'Sistema pagos', 'App móvil'],
      process: 'Planificación → Desarrollo → Integración pagos → Testing → Lanzamiento'
    }
  },
  {
    id: 3,
    title: 'Aplicación Móvil',
    description: 'App nativa o híbrida para iOS y Android con funcionalidades personalizadas.',
    category: 'mobile',
    price: 'Desde $6,000 MXN',
    features: ['Multiplataforma', 'Push notifications', 'Modo offline', 'Integración con APIs'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
    rating: 4.9,
    duration: '6-8 semanas',
    expandedContent: {
      technologies: ['React Native', 'Flutter', 'Firebase', 'MongoDB'],
      deliverables: ['App iOS', 'App Android', 'Backend API', 'Panel control'],
      process: 'Wireframes → Prototipo → Desarrollo → Testing → Store deployment'
    }
  },
  {
    id: 4,
    title: 'Landing Page Optimizada',
    description: 'Página de conversión diseñada para maximizar ventas y generar leads.',
    category: 'web',
    price: 'Desde $1,800 MXN',
    features: ['Conversión optimizada', 'A/B Testing', 'Analytics integrado', 'Formularios avanzados'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop',
    rating: 4.7,
    duration: '1-2 semanas',
    expandedContent: {
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Google Analytics'],
      deliverables: ['Landing page', 'Formularios', 'Analytics setup', 'SEO básico'],
      process: 'Brief → Diseño → Desarrollo → Optimización → Testing'
    }
  },
  {
    id: 5,
    title: 'Sistema CRM',
    description: 'Gestión completa de clientes y ventas con dashboard personalizado.',
    category: 'software',
    price: 'Desde $5,500 MXN',
    features: ['Gestión de leads', 'Automatización', 'Reportes detallados', 'Integración con email'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    rating: 4.8,
    duration: '5-7 semanas',
    expandedContent: {
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
      deliverables: ['Sistema CRM', 'Dashboard', 'Reportes', 'Integración email'],
      process: 'Análisis → Base de datos → Frontend → Backend → Testing'
    }
  },
  {
    id: 6,
    title: 'Marketplace Personalizado',
    description: 'Plataforma multi-vendor con sistema de comisiones y gestión avanzada.',
    category: 'ecommerce',
    price: 'Desde $8,000 MXN',
    features: ['Multi-vendor', 'Sistema de comisiones', 'Chat integrado', 'Gestión de disputas'],
    image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=400&h=250&fit=crop',
    rating: 4.9,
    duration: '8-10 semanas',
    expandedContent: {
      technologies: ['Django', 'PostgreSQL', 'Redis', 'WebSockets'],
      deliverables: ['Marketplace', 'Panel vendors', 'Sistema pagos', 'Chat en tiempo real'],
      process: 'Arquitectura → MVP → Funcionalidades → Testing → Despliegue'
    }
  }
];

const categories = [
  { id: 'all', name: 'Todos', icon: Globe },
  { id: 'web', name: 'Sitios Web', icon: Globe },
  { id: 'ecommerce', name: 'E-commerce', icon: Smartphone },
  { id: 'mobile', name: 'Apps Móviles', icon: Smartphone },
  { id: 'software', name: 'Software', icon: Code }
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCards, setExpandedCards] = useState(new Set());

  const filteredServices = services
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory);

  const handleContact = (serviceName) => {
    const message = `Hola! Me interesa el servicio: ${serviceName}. ¿Podrías darme más información?`;
    const whatsappURL = `https://wa.me/527223145340?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const toggleCardExpansion = (serviceId) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[length:28px_28px]" />

      <div className="relative z-10">
        <Navigation />
        
        <section className="py-16 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <Badge className="mb-4 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 border-gray-300 backdrop-blur-sm">
              Catálogo de Servicios
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Soluciones Digitales Para Tu Negocio
            </h1>
            <h2 className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Desarrollo web, e-commerce y aplicaciones móviles profesionales
            </h2>
          </div>
        </section>

        <section className="px-6 mb-12">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                const active = selectedCategory === category.id;
                return (
                  <Button
                    key={category.id}
                    variant={active ? 'default' : 'outline'}
                    size="lg"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`text-sm transition-all duration-300 ${
                      active
                        ? 'bg-gray-900 text-white border-gray-900 shadow-lg hover:shadow-xl'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 md:px-6 pb-24">
          <div className="container mx-auto max-w-7xl">
            {filteredServices.length === 0 ? (
              <div className="text-center py-16">
                <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">No se encontraron servicios</h3>
                <p className="text-gray-600">Prueba ajustando los filtros de búsqueda</p>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredServices.map((service) => {
                  const isExpanded = expandedCards.has(service.id);
                  
                  return (
                    <article
                      key={service.id}
                      className="group bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                      <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
                        {/* Columna izquierda - GLASSMORPHISM IMAGE */}
                        <div className="order-2 md:order-1 relative">
                          {/* Imagen de fondo con blur */}
                          <div className="absolute inset-0 rounded-xl overflow-hidden">
                            <img
                              src={service.image}
                              alt=""
                              className="w-full h-full object-cover scale-110 blur-2xl opacity-40"
                            />
                          </div>
                          
                          {/* Card de vidrio flotante */}
                          <div className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl p-4">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent"></div>
                            <img
                              src={service.image}
                              alt={service.title}
                              className="relative w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500 shadow-lg"
                            />
                            
                            {/* Brillo animado en hover */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 group-hover:via-white/10 transition-all duration-500 rounded-lg"></div>
                          </div>
                        </div>

                        {/* Columna derecha - Información del servicio */}
                        <div className="order-1 md:order-2 flex flex-col justify-between space-y-6">
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <Badge variant="secondary" className="text-sm bg-gray-900 text-white border-gray-900 px-4 py-1">
                                {service.duration}
                              </Badge>
                              <div className="flex items-center gap-2">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <span className="text-lg font-semibold text-gray-900">{service.rating}</span>
                              </div>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                              {service.title}
                            </h2>
                            
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                              {service.description}
                            </p>

                            <div className="mb-6">
                              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                {service.price}
                              </h3>
                            </div>

                            {/* Características principales */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                              {service.features.map((feature, index) => (
                                <div key={index} className="flex items-start text-sm text-gray-700">
                                  <Zap className="h-4 w-4 mr-2 text-gray-900 flex-shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Sección expandible */}
                          <div>
                            <button
                              onClick={() => toggleCardExpansion(service.id)}
                              className="w-full mb-4 flex items-center justify-between text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                            >
                              <span>Ver detalles técnicos</span>
                              {isExpanded ? (
                                <ChevronUp className="h-5 w-5" />
                              ) : (
                                <ChevronDown className="h-5 w-5" />
                              )}
                            </button>

                            {isExpanded && service.expandedContent && (
                              <div className="space-y-4 border-t pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Tecnologías:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {service.expandedContent.technologies.map((tech, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Entregables:</h4>
                                  <ul className="text-sm text-gray-600 space-y-1">
                                    {service.expandedContent.deliverables.map((item, index) => (
                                      <li key={index} className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Proceso:</h4>
                                  <p className="text-sm text-gray-600">{service.expandedContent.process}</p>
                                </div>
                              </div>
                            )}

                            <Button
                              onClick={() => handleContact(service.title)}
                              className="w-full bg-gray-900 text-white hover:bg-gray-900/90 shadow-md hover:shadow-lg transition-all duration-300 mt-4"
                              size="lg"
                            >
                              Solicitar Cotización
                            </Button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <footer className="relative px-6 mt-16 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="relative space-y-1 py-1">
            <div className="text-xs md:text-sm lg:text-base py-0.5" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              <MarqueeAnimation
                direction="left"
                baseVelocity={-2}
                className="text-cyan-400 font-medium"
              >
                DESARROLLO WEB • E-COMMERCE • APPS MÓVILES • SOFTWARE • INNOVACIÓN
              </MarqueeAnimation>
            </div>
            
            <div className="text-xs md:text-sm py-0.5" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              <MarqueeAnimation
                direction="right"
                baseVelocity={-1.5}
                className="text-slate-400 font-normal"
              >
                TECNOLOGÍA • DISEÑO • SOLUCIONES • CREATIVIDAD • RESULTADOS
              </MarqueeAnimation>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Catalog;
