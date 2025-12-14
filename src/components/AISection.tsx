import { CircularTestimonials } from '@/components/ui/circular-testimonials';
import { Sparkles, Brain, Zap, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const aiShowcases = [
  {
    quote: "Automatización inteligente de procesos: desde chatbots hasta análisis predictivo. Transformamos la forma en que trabajas con soluciones de IA personalizadas.",
    name: "Chatbots Inteligentes",
    designation: "Atención 24/7 sin esfuerzo",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    quote: "Generación de contenido, análisis de datos y automatización de marketing. Potencia tu negocio con las últimas tecnologías de inteligencia artificial.",
    name: "IA Generativa",
    designation: "Contenido que conecta",
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
  },
  {
    quote: "Integración de modelos de lenguaje avanzados en tus flujos de trabajo. GPT, Claude, y más, adaptados a las necesidades específicas de tu empresa.",
    name: "Modelos de Lenguaje",
    designation: "El poder de la conversación",
    src: "https://images.unsplash.com/photo-1676299081847-c3c9e3f7d7bb?w=600&h=400&fit=crop",
  },
];

const features = [
  { icon: Brain, label: "Machine Learning", desc: "Modelos predictivos" },
  { icon: Bot, label: "Chatbots", desc: "Asistentes 24/7" },
  { icon: Zap, label: "Automatización", desc: "Flujos inteligentes" },
];

const AISection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Próximamente</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Inteligencia Artificial
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre las nuevas soluciones de IA que estamos preparando para impulsar tu negocio al siguiente nivel
          </p>
        </motion.div>

        {/* Features pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <feature.icon className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground text-sm">{feature.label}</p>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <CircularTestimonials
            testimonials={aiShowcases}
            autoplay={true}
            colors={{
              name: "hsl(var(--foreground))",
              designation: "hsl(var(--primary))",
              testimony: "hsl(var(--muted-foreground))",
              arrowBackground: "hsl(var(--primary))",
              arrowForeground: "hsl(var(--primary-foreground))",
              arrowHoverBackground: "hsl(var(--accent))",
            }}
            fontSizes={{
              name: "1.5rem",
              designation: "1rem",
              quote: "1.1rem",
            }}
          />
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            ¿Interesado en nuestras soluciones de IA?{' '}
            <a 
              href="https://wa.me/5218000000000?text=Hola, me interesa conocer más sobre sus soluciones de IA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Contáctanos
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
