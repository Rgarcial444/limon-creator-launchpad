import React from 'react';
import Navigation from '@/components/Navigation';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative z-10">
        <Navigation />
        <section className="py-16 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-6">Nosotros</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Esta página estará disponible próximamente.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
