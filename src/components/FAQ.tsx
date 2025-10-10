import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    // Add FAQPage schema markup for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué tecnologías utilizan para desarrollar sitios web?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Utilizamos las tecnologías más modernas y demandadas del mercado: React para interfaces dinámicas, TypeScript para código más seguro y mantenible, Tailwind CSS para diseños responsivos, Node.js para backend escalable, y WordPress cuando se requiere un CMS robusto. Todas nuestras soluciones están optimizadas para SEO y rendimiento."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tiempo toma desarrollar un sitio web profesional?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web corporativo básico puede tomar 2-3 semanas, mientras que aplicaciones web complejas o e-commerce pueden requerir 6-12 semanas. Siempre proporcionamos un cronograma detallado después de analizar tus requisitos específicos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Los sitios web son responsivos y optimizados para móviles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutamente. Todos nuestros desarrollos son 100% responsivos y mobile-first. Utilizamos diseño adaptativo que garantiza una experiencia óptima en smartphones, tablets y computadoras. También optimizamos para Core Web Vitals de Google, mejorando tu posicionamiento SEO."
          }
        },
        {
          "@type": "Question",
          "name": "¿Ofrecen servicios de mantenimiento y soporte?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, ofrecemos planes de mantenimiento continuo que incluyen: actualizaciones de seguridad, optimización de rendimiento, copias de seguridad automáticas, monitoreo 24/7, y soporte técnico prioritario. Nuestro objetivo es que tu sitio siempre esté actualizado, seguro y funcionando perfectamente."
          }
        },
        {
          "@type": "Question",
          "name": "¿Pueden ayudarme con el SEO y posicionamiento en Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitivamente. Todos nuestros sitios incluyen optimización SEO básica: estructura semántica HTML5, metadatos apropiados, velocidad de carga optimizada, y sitemap XML. También ofrecemos servicios avanzados de SEO técnico, optimización de contenido, link building, y auditorías completas de posicionamiento."
          }
        },
        {
          "@type": "Question",
          "name": "¿Trabajan con WordPress o solo con React?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trabajamos con ambas tecnologías y más. React es ideal para aplicaciones web interactivas y SPAs (Single Page Applications). WordPress es perfecto para sitios con gestión de contenido frecuente, blogs, y e-commerce con WooCommerce. También desarrollamos con Vue.js, Next.js, y otras tecnologías según las necesidades de cada proyecto."
          }
        }
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const faqs = [
    {
      question: "¿Qué tecnologías utilizan para desarrollar sitios web?",
      answer: "Utilizamos las tecnologías más modernas y demandadas del mercado: React para interfaces dinámicas, TypeScript para código más seguro y mantenible, Tailwind CSS para diseños responsivos, Node.js para backend escalable, y WordPress cuando se requiere un CMS robusto. Todas nuestras soluciones están optimizadas para SEO y rendimiento."
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web profesional?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web corporativo básico puede tomar 2-3 semanas, mientras que aplicaciones web complejas o e-commerce pueden requerir 6-12 semanas. Siempre proporcionamos un cronograma detallado después de analizar tus requisitos específicos."
    },
    {
      question: "¿Los sitios web son responsivos y optimizados para móviles?",
      answer: "Absolutamente. Todos nuestros desarrollos son 100% responsivos y mobile-first. Utilizamos diseño adaptativo que garantiza una experiencia óptima en smartphones, tablets y computadoras. También optimizamos para Core Web Vitals de Google, mejorando tu posicionamiento SEO."
    },
    {
      question: "¿Ofrecen servicios de mantenimiento y soporte?",
      answer: "Sí, ofrecemos planes de mantenimiento continuo que incluyen: actualizaciones de seguridad, optimización de rendimiento, copias de seguridad automáticas, monitoreo 24/7, y soporte técnico prioritario. Nuestro objetivo es que tu sitio siempre esté actualizado, seguro y funcionando perfectamente."
    },
    {
      question: "¿Pueden ayudarme con el SEO y posicionamiento en Google?",
      answer: "Definitivamente. Todos nuestros sitios incluyen optimización SEO básica: estructura semántica HTML5, metadatos apropiados, velocidad de carga optimizada, y sitemap XML. También ofrecemos servicios avanzados de SEO técnico, optimización de contenido, link building, y auditorías completas de posicionamiento."
    },
    {
      question: "¿Trabajan con WordPress o solo con React?",
      answer: "Trabajamos con ambas tecnologías y más. React es ideal para aplicaciones web interactivas y SPAs (Single Page Applications). WordPress es perfecto para sitios con gestión de contenido frecuente, blogs, y e-commerce con WooCommerce. También desarrollamos con Vue.js, Next.js, y otras tecnologías según las necesidades de cada proyecto."
    }
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resolvemos tus dudas sobre desarrollo web, tecnologías y nuestros servicios
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
