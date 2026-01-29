
import React from 'react';
import { MapPin, Phone, ExternalLink, MapIcon } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight uppercase">Onde <span className="text-primary">Estamos</span></h2>
            <div className="w-20 h-1.5 bg-primary mb-8 rounded-full"></div>
            
            <p className="text-gray-600 text-lg mb-10 font-medium">
              Localizada em um ponto estratégico de Volta Redonda, nossa unidade oferece fácil acesso, estacionamento e total segurança para seu treino.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-gray-100 p-4 rounded-2xl text-primary">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Endereço Completo</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Rua 22, 647 – Jardim Vila Rica – Tiradentes<br/>
                    Volta Redonda – RJ | CEP: 27259-240
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://maps.google.com" target="_blank" className="flex items-center gap-2 bg-gray-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all">
                  Abrir no Maps <ExternalLink size={18} />
                </a>
                <a href="tel:24988232141" className="flex items-center gap-2 bg-primary/5 text-primary px-6 py-4 rounded-xl font-bold hover:bg-primary/10 transition-all border border-primary/10">
                  Ligar Agora <Phone size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px] border-4 border-white relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.170438186259!2d-44.1132225!3d-22.5193333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ea18252277d3b%3A0x6e7b172a6b2c212a!2sR.%20Vinte%20e%20Dois%2C%20647%20-%20Vila%20Rica%2C%20Volta%20Redonda%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
