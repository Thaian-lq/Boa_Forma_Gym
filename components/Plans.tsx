
import React from 'react';
import { Check, Info } from 'lucide-react';
import { PLANS } from '../constants';


const Plans: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight uppercase">Escolha seu Plano</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 font-medium">
            Temos opções flexíveis para atender seu objetivo, seja ganhar massa, perder peso ou cuidar da saúde da família.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-white p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col ${
                plan.highlight 
                ? 'ring-4 ring-primary/20 border-2 border-primary shadow-2xl z-10 scale-105' 
                : 'border border-gray-100 shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap">
                  Mais Popular
                </div>
              )}
              
              <h3 className="text-2xl font-black text-gray-800 mb-6">{plan.name}</h3>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 font-medium">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-primary/5 rounded-full flex items-center justify-center">
                      <Check className="text-primary" size={12} strokeWidth={4} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 bg-gray-100 p-3 rounded-lg">
                  <Info size={16} />
                  <span>Consulte valores no balcão</span>
                </div>
                {/* <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlight ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Saber mais
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-8 text-center">
            <h4 className="text-xl font-bold text-gray-800 mb-8 uppercase tracking-widest">Aceitamos Benefícios Corporativos</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="flex items-center gap-4 group">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-primary/10">
                  <Check className="text-primary" size={32} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-400 uppercase">Parceiro Oficial</p>
                  <p className="text-2xl font-black text-gray-900">Wellhub</p>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
              <div className="flex items-center gap-4 group">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-primary/10">
                  <Check className="text-primary" size={32} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-400 uppercase">Parceiro Oficial</p>
                  <p className="text-2xl font-black text-gray-900">TotalPass</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
