 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ShoppingCart, Calendar, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web Básicas",
    description: "Sitios web que muestran tus servicios, productos y costos con animaciones modernas",
    features: ["Diseño responsivo", "Animaciones CSS", "Contenido actualizable", "CTA integrado con WhatsApp"]
  },
  {
    icon: Calendar,
    title: "Herramientas de Citas",
    description: "Calendarios interactivos de Google y Luma para agendar citas y gestionar eventos con cobro de accesos.",
    features: ["Integración Google Calendar", "Cobro por eventos", "Gestión de capacitaciones", "Reservas online"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Completo",
    description: "Sitios con catálogos y carritos de compra conectados a Stripe, Amazon, Mercado Libre y WhatsApp.",
    features: ["Catálogo de productos", "Carrito de compras", "Pagos con Stripe", "Integración multi-plataforma"]
  },
  {
    icon: Sparkles,
    title: "Proyectos con IA",
    description: "Desarrollos experimentales con Inteligencia Artificial, juegos digitales y páginas con estilo futurista.",
    features: ["Landings generadas por IA", "Juegos sin datos", "Diseños futuristas", "Animaciones"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Servicios que 
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> impulsan</span> tu negocio
          </h2>
          <p className="text-xl text-muted-foreground">
            Desde páginas web básicas hasta proyectos experimentales con IA, 
            ofrezco soluciones digitales completas para cada necesidad.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient border shadow-soft hover-lift">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
