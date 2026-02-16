
import { ClassItem, Trainer, Plan, Avaliation } from './types';

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
    name: 'Plano Musculação',
    features: ['Acesso à musculação', 'Horário livre', 'Fichas de treino personalizada', 'Acompanhamento profissional', "8% de desconto com plano família"],
    values_anual: 'Anual 12x R$ 109,00',
    values_mensal: 'Mensal R$ 139,00',
    values_semestral: 'Semestral 6x R$ 119,00',
  },
  {
    id: 'pro',
    name: 'Musculação & Aulas Coletivas',
    features: ['Musculação completa', 'Circ. Funcional', 'Pump', 'Fit 30', 'Gap', 'Step', "8% de desconto com plano família"],
    highlight: true,
    values_anual: 'Anual 12x R$ 129,00',
    values_mensal: 'Mensal R$ 179,00',
    values_semestral: 'Semestral 6x R$ 149,00',
  },
  {
    id: 'kids',
    name: 'Plano Kids',
    features: ['Funcional Kids especializado', 'Horários flexíveis', 'Acompanhamento pedagógico'],
    values_anual: 'R$ ',
    values_mensal: 'R$ ',
    values_semestral: 'R$ ',
  }
];

export const AVALIATION: Avaliation[] = [
  {
    id: '1',
    title: 'Avaliação Bioimpedância',
    description: 'Análise detalhada da composição corporal, força, flexibilidade e resistência para personalizar seu treino.',
    values_aluno: 'R$ 59,00',
    values_externo: 'R$ 89,00',
  },
  {
    id: '2',
    title: 'Consulta Nutricional',
    description: 'Orientação nutricional personalizada para potencializar seus resultados e manter uma alimentação saudável.',
    values_aluno: 'R$ 139,00',
    values_externo: 'R$ 179,00',
  }

]