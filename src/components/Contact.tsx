import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/528116825524?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Limon.io", "_blank");
  };

  const handleEmailContact = () => {
    window.open("mailto:limon_50@hotmail.com?subject=Consulta%20sobre%20servicios%20web", "_blank");
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              ¿Listo para
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> transformar</span> tu negocio?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conversemos sobre tu proyecto. Te ayudo a crear la presencia digital 
              que tu negocio necesita para crecer y destacar.
            </p>
          </div>

          {/* Contact options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="card-gradient border shadow-soft hover-lift cursor-pointer" onClick={handleWhatsAppContact}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Respuesta inmediata para consultas rápidas y cotizaciones
                </p>
                <Button variant="hero" className="w-full">
                  Chatear ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient border shadow-soft hover-lift cursor-pointer" onClick={handleEmailContact}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">
                  Para proyectos detallados y propuestas comerciales formales
                </p>
                <Button variant="outline" className="hover-lift w-full">
                  Enviar email
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Value proposition */}
          <Card className="card-gradient border shadow-medium">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Consulta Gratuita</div>
                  <p className="text-sm text-muted-foreground">
                    Analizamos tu negocio sin costo
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Entrega Rápida</div>
                  <p className="text-sm text-muted-foreground">
                    Proyectos listos en tiempo record
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Soporte 24/7</div>
                  <p className="text-sm text-muted-foreground">
                    Actualizaciones y mantenimiento
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
