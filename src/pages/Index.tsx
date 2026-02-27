import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import NovedadSemana from '@/components/NovedadSemana';
import PortafolioSection from '@/components/PortafolioSection';
import NosotrosSection from '@/components/NosotrosSection';

const Index = () => {
  return (
    <div>
      <section id="inicio">
        <Hero />
      </section>
      <NovedadSemana />
      <About />
      <PortafolioSection />
      <NosotrosSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
