import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

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
          "name": "¿Cuánto tiempo toma desarrollar un sitio web?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un sitio web básico puede estar listo en 2-3 semanas, mientras que proyectos complejos toman 2-3 meses. Proporcionamos cronogramas detallados antes de comenzar."
          }
        },
        {
          "@type": "Question",
          "name": "¿Los sitios son responsivos y optimizados para móviles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, todos nuestros desarrollos son completamente responsivos con diseño mobile-first, garantizando experiencia perfecta en todos los dispositivos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Ofrecen mantenimiento y soporte?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, ofrecemos planes de mantenimiento con actualizaciones de seguridad, correcciones, optimizaciones y soporte técnico continuo."
          }
        },
        {
          "@type": "Question",
          "name": "¿Pueden ayudar con el SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Todos nuestros sitios incluyen SEO básico optimizado. También ofrecemos servicios avanzados de posicionamiento, keywords y estrategias orgánicas."
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
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer: "Un sitio web básico puede estar listo en 2-3 semanas, mientras que proyectos complejos toman 2-3 meses. Proporcionamos cronogramas detallados antes de comenzar."
    },
    {
      question: "¿Los sitios son responsivos y optimizados para móviles?",
      answer: "Sí, todos nuestros desarrollos son completamente responsivos con diseño mobile-first, garantizando experiencia perfecta en todos los dispositivos."
    },
    {
      question: "¿Ofrecen mantenimiento y soporte?",
      answer: "Sí, ofrecemos planes de mantenimiento con actualizaciones de seguridad, correcciones, optimizaciones y soporte técnico continuo."
    },
    {
      question: "¿Pueden ayudar con el SEO?",
      answer: "Todos nuestros sitios incluyen SEO básico optimizado. También ofrecemos servicios avanzados de posicionamiento, keywords y estrategias orgánicas."
    }
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-6">
        <header className="text-center mb-10">
          <Badge variant="outline" className="mb-3">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Respuestas rápidas sobre desarrollo web y servicios
          </p>
        </header>

        <Accordion type="single" collapsible className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
