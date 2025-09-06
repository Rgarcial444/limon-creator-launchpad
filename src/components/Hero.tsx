import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroWorkspace from "@/assets/hero-workspace.jpg";

const Hero = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/528116825524?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Limon.io", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 subtle-gradient" />
      
      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Potencia tu
                <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  presencia digital
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Desarrollo sitios web y landing pages que convierten visitantes en clientes. 
                Soluciones digitales modernas para hacer crecer tu negocio.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero"
                onClick={handleWhatsAppContact}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contáctame por WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                Ver proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Proyectos</div>
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Responsivo</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large hover-lift">
              <img 
                src={heroWorkspace} 
                alt="Workspace profesional de desarrollo web"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;