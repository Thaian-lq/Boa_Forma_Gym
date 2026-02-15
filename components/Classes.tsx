
import React from 'react';
import { CLASSES } from '../constants';
import * as Icons from 'lucide-react';

const Classes: React.FC = () => {
  return (
    <section id="aulas" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight uppercase">Nossas Atividades</h2>
            <div className="w-20 h-1.5 bg-primary mb-6 rounded-full"></div>
            <p className="text-gray-600 font-medium text-lg">
              Explore uma variedade de aulas projetadas para queimar gordura, ganhar força e se divertir.
            </p>
          </div>
          <div className="hidden md:block">
            {/* <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Ver grade completa
            </button> */}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLASSES.map((item) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.Activity;
            return (
              <div key={item.id} className="group relative overflow-hidden rounded-3xl bg-gray-900 h-96 shadow-xl transition-all hover:scale-[1.02]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-light mb-4 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-primary/20">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm font-medium line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Classes;
