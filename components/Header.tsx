
import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Planos', href: '#planos' },
    { label: 'Aulas', href: '#aulas' },
    { label: 'Professores', href: '#professores' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${isScrolled ? 'bg-primary' : 'bg-white'}`}>
            <Dumbbell className={isScrolled ? 'text-white' : 'text-primary'} size={24} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-black text-xl tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-white'}`}>BOA FORMA</span>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${isScrolled ? 'text-primary' : 'text-white'}`}>Academia</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className={`text-sm font-semibold transition-colors hover:text-primary-light ${isScrolled ? 'text-gray-700' : 'text-gray-100'}`}
            >
              {item.label}
            </a>
          ))}
          {/* <a href="#contato" className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primary-dark transition-all transform hover:scale-105">
            Treine Agora
          </a> */}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl p-6 border-t border-gray-100 flex flex-col gap-4">
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-gray-800 hover:text-primary py-2 border-b border-gray-50 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold mt-2 hover:bg-primary-dark transition-colors">
            Matricule-se Agora
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
