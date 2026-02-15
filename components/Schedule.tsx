
import React from 'react';
import { Clock, Calendar } from 'lucide-react';

const Schedule: React.FC = () => {
  const times = [
    { days: 'Segunda à Sexta', time: '05:30 às 22:00', icon: Clock },
    { days: 'Sábado', time: '07:00 às 12:00', icon: Calendar },
    { days: 'Domingo', time: 'Fechado', icon: Calendar, closed: true },
  ];

  return (
    <section id="horarios" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 tracking-tight uppercase">Horário de <br/> <span className="text-primary-light">Funcionamento</span></h2>
            <p className="text-gray-400 text-lg mb-8 font-medium leading-relaxed">
              Estamos funcionando desde cedo para garantir que você não perca seu treino, não importa quão corrida seja sua rotina. Venha treinar no seu tempo!
            </p>
            <div className="bg-light/10 border border-light/20 p-6 rounded-2xl">
              <p className="text-light-light font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-light-light rounded-full animate-pulse"></span>
                Academia climatizada e segura
              </p>
            </div>
          </div>
          
          {/* Lateral com os horários de funcionamento */}
          <div className="space-y-4">
            {times.map((item, idx) => (
              <div key={idx} className={`p-6 rounded-3xl border transition-all ${item.closed ? 'bg-white/5 border-white/10' : 'bg-white/10 border-white/20 hover:bg-white/[0.15]'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${item.closed ? 'bg-red-500/20 text-red-400' : 'bg-primary-light/20 text-secondary-light'}`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{item.days}</p>
                      <p className={`text-2xl font-bold ${item.closed ? 'text-red-400' : 'text-white'}`}>{item.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background visual element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full"></div>
    </section>
  );
};

export default Schedule;
