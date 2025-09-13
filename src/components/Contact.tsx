import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, Phone, ArrowRight, Clock, Shield, Zap } from "lucide-react";

const Contact = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/528116825524?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Limon.io", "_blank");
  };

  const handleEmailContact = () => {
    window.open("mailto:limon_50@hotmail.com?subject=Consulta%20sobre%20servicios%20web", "_blank");
  };

  const handlePhoneContact = () => {
    window.open("tel:+528116825524", "_self");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header mejorado */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contacto Directo
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ¿Listo para
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent block md:inline"> transformar</span> 
              <span className="block md:inline"> tu negocio?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conversemos sobre tu proyecto. Te ayudo a crear la presencia digital 
              que tu negocio necesita para <span className="font-semibold text-foreground">crecer y destacar</span>.
            </p>
          </div>

          {/* Contact options mejoradas */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* WhatsApp - Opción principal */}
            <Card className="relative overflow-hidden card-gradient border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group" 
                  onClick={handleWhatsAppContact}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <CardContent className="relative p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                  Más Popular
                </div>
                <h3 className="text-2xl font-bold mb-3">WhatsApp</h3>
                <p className="text-muted-foreground mb-6 text-base">
                  Respuesta <span className="font-semibold">inmediata</span> para consultas rápidas y cotizaciones personalizadas
                </p>
                <Button variant="hero" className="w-full text-lg py-6 group-hover:scale-105 transition-transform">
                  Chatear ahora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="card-gradient border shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group" 
                  onClick={handleEmailContact}>
              <CardContent className="p-8 text-center">
                <div className="w-18 h-18 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-9 w-9 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Profesional</h3>
                <p className="text-muted-foreground mb-6">
                  Para proyectos <span className="font-semibold">detallados</span> y propuestas comerciales formales
                </p>
                <Button variant="outline" className="hover-lift w-full py-5 group-hover:border-primary transition-colors">
                  Enviar email
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Teléfono */}
            <Card className="card-gradient border shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group" 
                  onClick={handlePhoneContact}>
              <CardContent className="p-8 text-center">
                <div className="w-18 h-18 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-9 w-9 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Llamada Directa</h3>
                <p className="text-muted-foreground mb-6">
                  Para <span className="font-semibold">emergencias</span> o consultas urgentes que requieren atención inmediata
                </p>
                <Button variant="outline" className="hover-lift w-full py-5 group-hover:border-primary transition-colors">
                  Llamar ahora
                  <Phone className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Value proposition mejorada */}
          <Card className="card-gradient border shadow-lg bg-gradient-to-r from-primary/5 to-transparent">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold text-center mb-8">¿Por qué elegir Limon.io?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-3">Consulta Gratuita</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Analizamos tu negocio y objetivos <span className="font-semibold">sin ningún costo</span> ni compromiso
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-3">Entrega Rápida</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Proyectos listos en <span className="font-semibold">tiempo récord</span> sin comprometer la calidad
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-3">Soporte 24/7</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Actualizaciones, mantenimiento y <span className="font-semibold">soporte continuo</span> para tu tranquilidad
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to action adicional */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              <span className="font-semibold text-foreground">+50 proyectos exitosos</span> respaldan nuestra experiencia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={handleWhatsAppContact} variant="hero" size="lg" className="px-8 py-4 text-lg">
                Comenzar mi proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Primera consulta gratuita • Sin compromiso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
