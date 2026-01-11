
import { ClassItem, Trainer, Plan } from './types';

export const CLASSES: ClassItem[] = [
  {
    id: '1',
    title: 'Musculação',
    description: 'Treino de força completo com equipamentos de última geração e supervisão profissional.',
    image: 'imgs/musculacao-img.png', 
    icon: 'Dumbbell'
  },
  {
    id: '2',
    title: 'Funcional Kids',
    description: 'Atividades lúdicas e dinâmicas para desenvolver a coordenação e saúde das crianças.',
    image: 'imgs/funcionalkids-img.png',
    icon: 'Trophy'
  },
  {
    id: '3',
    title: 'Bike Indoor',
    description: 'Aulas de ciclismo indoor de alta intensidade para queimar calorias e ganhar resistência.',
    image: 'imgs/bike-img.png',//https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800&auto=format&fit=crop
    icon: 'Bike'
  },
  {
    id: '4',
    title: 'Abdominal',
    description: 'Foco total no core para fortalecimento abdominal e melhoria da postura.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
    icon: 'Activity'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Matheus José',
    specialty: 'Personal Trainer & Musculação',
    //image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Bianca',
    specialty: 'Especialista em Funcional Kids',
    //image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Virna',
    specialty: 'Instrutor de Bike Indoor',
    //image:'https://images.unsplash.com/photo-1548690312-e3b507d17a47?q=80&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Curitiba',
    specialty: 'Personal Trainer & Musculação',
    //image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=400&h=400&auto=format&fit=crop'
  }
];

export const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Plano Fitness',
    features: ['Acesso à musculação', 'Avaliação física bimestral', 'Horário livre'],
  },
  {
    id: 'pro',
    name: 'Plano Premium',
    features: ['Todas as aulas coletivas', 'Musculação completa', '1 Convidado por mês', 'Avaliação física mensal'],
    highlight: true,
  },
  {
    id: 'kids',
    name: 'Plano Kids',
    features: ['Funcional Kids especializado', 'Horários flexíveis', 'Acompanhamento pedagógico'],
  }
];
