import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import NovedadSemana from '@/components/NovedadSemana';
import PortafolioSection from '@/components/PortafolioSection';
import NosotrosSection from '@/components/NosotrosSection';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <section id="inicio">
        <Hero />
      </section>
      <NovedadSemana />

      {/* Respuesta en cinco minutos */}
      <section className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-200">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Respuesta en menos de cinco minutos
            </h2>
            <h3 className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 font-semibold">
              Sin costos ocultos. Sin vueltas.
            </h3>
            
            <div className="mt-5 md:mt-6 mb-10 md:mb-12 flex justify-center">
              <Link to="/catalogo" className="inline-block">
                <RainbowButton 
                  size="lg"
                  className="!bg-gradient-to-r from-blue-600 to-cyan-600 !text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-7 py-6"
                >
                  Explorar servicios
                </RainbowButton>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
              <article className="bg-white/90 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3" aria-hidden="true">✅</div>
                <h3 className="text-gray-900 font-bold text-base md:text-lg mb-2">Diseño que inspira confianza</h3>
                <p className="text-gray-600 text-sm">Interfaces claras y modernas que generan credibilidad y mejoran la conversión.</p>
              </article>
              <article className="bg-white/90 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3" aria-hidden="true">⚡</div>
                <h3 className="text-gray-900 font-bold text-base md:text-lg mb-2">Implementación rápida</h3>
                <p className="text-gray-600 text-sm">Lanza en días, no en meses, con procesos simples y sin fricción.</p>
              </article>
              <article className="bg-white/90 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3" aria-hidden="true">💰</div>
                <h3 className="text-gray-900 font-bold text-base md:text-lg mb-2">Precio fijo</h3>
                <p className="text-gray-600 text-sm">Presupuesto claro desde el inicio, sin sorpresas ni cargos escondidos.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* White band before portfolio */}
      <div className="py-4 px-6 border-b border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Portafolio — Proyectos & Clientes
          </p>
          <p className="text-xs text-muted-foreground hidden sm:block">
            Pasa el cursor para pausar y explorar
          </p>
        </div>
      </div>

      <PortafolioSection />
      <About />
      <NosotrosSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
