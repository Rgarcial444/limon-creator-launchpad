import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import NovedadSemana from '@/components/NovedadSemana';
import DescubrirSection from '@/components/DescubrirSection';
import NosotrosSection from '@/components/NosotrosSection';

const Index = () => {
  return (
    <div>
      <section id="inicio">
        <Hero />
      </section>
      <NovedadSemana />
      <About />
      <DescubrirSection />
      <NosotrosSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
