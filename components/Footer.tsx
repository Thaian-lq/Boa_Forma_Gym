import React from 'react';
import { Dumbbell, Instagram, Facebook, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-gray-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-primary">
                <Dumbbell className="text-light" size={24} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-xl tracking-tighter">BOA FORMA</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-light">Academia</span>
              </div>
            </div>
            <p className="text-gray-400 font-medium mb-8 leading-relaxed">
              "Seu melhor treino começa aqui." <br/>
              Ajudando você a transformar sua vida através do esporte e da disciplina.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/boaformavr/" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/academiaboaformanoface/?locale=pt_BR" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              {/* <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Links Rápidos</h4>
            <ul className="space-y-4">
              {['Início', 'Planos', 'Aulas', 'Professores', 'Horários'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-primary-light transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contato</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li>Rua 22, 647 – Vila Rica</li>
              <li>Tiradentes, Volta Redonda – RJ</li>
              <li>(24) 99881-6218</li>
              <li>contato@boafomavr.com.br</li>
            </ul>
          </div>
          {/* <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Receba dicas de treino e promoções exclusivas.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary px-3 rounded-lg hover:bg-primary-dark transition-colors">.
                <Send size={16} />
              </button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500 font-medium flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Academia Boa Forma. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            {/* <a href="#" className="hover:text-primary-light">Privacidade</a>
            <a href="#" className="hover:text-primary-light">Termos de Uso</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
