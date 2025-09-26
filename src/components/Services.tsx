{/* Marquee Effect Footer - Versión Más Delgada */}
<footer className="relative px-6 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
  
  <div className="relative space-y-3 py-4">
    <MarqueeAnimation
      direction="left"
      baseVelocity={-2}
      className="text-lg md:text-xl lg:text-2xl py-1"
      style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
    >
      <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
        DESARROLLO WEB • E-COMMERCE • APPS MÓVILES • SOFTWARE • INNOVACIÓN
      </span>
    </MarqueeAnimation>
    
    <MarqueeAnimation
      direction="right"
      baseVelocity={-1.5}
      className="text-base md:text-lg lg:text-xl py-1"
      style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
    >
      <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-medium">
        TECNOLOGÍA • DISEÑO • SOLUCIONES • CREATIVIDAD • RESULTADOS
      </span>
    </MarqueeAnimation>
  </div>
  
  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-950 to-transparent backdrop-blur-sm" />
</footer>
