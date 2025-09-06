import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Users, Award } from "lucide-react";
import ricardoPortrait from "@/assets/ricardo-portrait.jpg";

const companies = [
  { name: "Clau.com", role: "Gestión de Cuentas Clave" },
  { name: "Kavak.com", role: "Desarrollo de Negocios" },
  { name: "Rappi.com", role: "Experiencia del Cliente" },
  { name: "Grupo Financiero Inbursa", role: "Gestión Estratégica" }
];

const About = () => {
  return (
    <section className="py-24 subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Sobre el Fundador
              </Badge>
              <h2 className="text-4xl font-bold leading-tight">
                Ricardo A. García Limón
                <span className="block text-2xl font-normal text-muted-foreground mt-2">
                  Fundador de Limon.io Creators
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Con experiencia sólida en gestión de cuentas clave, desarrollo de negocios 
                y experiencia del cliente en empresas líderes del mercado, Ricardo combina 
                estrategia empresarial con desarrollo web para crear soluciones digitales 
                que realmente convierten.
              </p>
            </div>
            
            {/* Experience stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-semibold">Orientado a resultados</div>
                  <div className="text-sm text-muted-foreground">Estrategia comercial</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-semibold">Experiencia del cliente</div>
                  <div className="text-sm text-muted-foreground">Enfoque centrado en el usuario</div>
                </div>
              </div>
            </div>
            
            {/* Companies */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Building2 className="h-5 w-5 mr-2 text-primary" />
                Experiencia Profesional
              </h3>
              <div className="grid gap-3">
                {companies.map((company, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card border shadow-soft hover-lift">
                    <div className="font-medium">{company.name}</div>
                    <div className="text-sm text-muted-foreground">{company.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right content - Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src={ricardoPortrait} 
                alt="Ricardo A. García Limón, Fundador de Limon.io Creators"
                className="w-full max-w-md mx-auto rounded-2xl shadow-large hover-scale"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;