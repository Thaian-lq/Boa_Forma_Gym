
import { ClassItem, Trainer, Plan } from './types';

export const CLASSES: ClassItem[] = [
  {
    id: '1',
    title: 'Musculação',
    description: 'Treino de força completo com equipamentos de última geração e supervisão profissional.',
    image: 'https://v4excellencefitness.com.br/wp-content/uploads/2024/08/23478.jpg', 
    icon: 'Dumbbell'
  },
  {
    id: '2',
    title: 'Funcional Kids',
    description: 'Atividades lúdicas e dinâmicas para desenvolver a coordenação e saúde das crianças.',
    image: 'https://espacolaysguimaraes.com.br/wp-content/uploads/2021/02/9.jpg',
    icon: 'Trophy'
  },
  {
    id: '3',
    title: 'Bike Indoor',
    description: 'Aulas de ciclismo indoor de alta intensidade para queimar calorias e ganhar resistência.',
    image: 'https://revistaabm.com.br/storage/2019/04/04/a745243a03281275a69ab3aae01c47cf87fe36dc.jpg',
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
    image:'https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png',
  },
  {
    id: '2',
    name: 'Bianca',
    specialty: 'Especialista em Funcional Kids',
    image: 'https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png',
  },
  {
    id: '3',
    name: 'Virna',
    specialty: 'Instrutor de Bike Indoor',
    image:'https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png',
  },
  {
    id: '4',
    name: 'Curitiba',
    specialty: 'Personal Trainer & Musculação',
    image: 'https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png',
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
