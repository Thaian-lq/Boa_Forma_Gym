
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center bg-fitness-hero overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2 bg-light/20 border border-light/30 px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-light rounded-full animate-pulse"></span>
            <span className="text-light text-xs font-bold uppercase tracking-widest">Energia & Saúde</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 drop-shadow-lg">
            BEM-VINDO À <br/> 
            <span className="text-primary-light">ACADEMIA</span> BOA FORMA
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl font-medium">
            Saúde, bem-estar e qualidade de vida para todas as idades. 
            Ambiente moderno, climatizado e focado em seus resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#planos" className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary-dark/20 group">
              Conheça nossos planos
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#aulas" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold transition-all">
              Ver aulas
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block opacity-50">
        <ChevronDown size={32} />
      </div>
      
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
