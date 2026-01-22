
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 'genero',
    text: 'Qual o seu gênero?',
    options: ['Masculino', 'Feminino', 'Prefiro não dizer']
  },
  {
    id: 'idade',
    text: 'Qual a sua faixa etária?',
    options: ['Menos de 25', '25 a 40', '41 a 60', 'Mais de 60']
  },
  {
    id: 'peso',
    text: 'Qual o seu objetivo atual?',
    options: ['Perder peso rapidamente', 'Melhorar digestão', 'Acabar com o inchaço', 'Regular intestino']
  },
  {
    id: 'dieta',
    text: 'Como você descreveria sua dieta?',
    options: ['Equilibrada', 'Muitas carnes e gorduras', 'Muitos carboidratos', 'Vegetariana/Vegana']
  },
  {
    id: 'restricoes',
    text: 'Possui alguma restrição alimentar?',
    options: ['Não', 'Glúten', 'Lactose', 'Outros']
  },
  {
    id: 'rotina',
    text: 'Qual seu nível de atividade física?',
    options: ['Sedentário', 'Leve (1-2x semana)', 'Moderado (3-4x semana)', 'Intenso (diário)']
  },
  {
    id: 'agua',
    text: 'Quanto de água você bebe por dia?',
    options: ['Menos de 1L', 'Cerca de 2L', 'Mais de 3L', 'Apenas quando sinto sede']
  }
];

export const IMAGES = {
  TESTIMONIAL_1: 'https://media.atomicatpages.net/u/EHwwcwAMHbbsq2SavLOaehV5rrU2/Pictures/gsLedd2629102.png?quality=70',
  TESTIMONIAL_2: 'https://media.atomicatpages.net/u/EHwwcwAMHbbsq2SavLOaehV5rrU2/Pictures/oWLBIW2629102.png?quality=73',
  TESTIMONIAL_3: 'https://media.atomicatpages.net/u/EHwwcwAMHbbsq2SavLOaehV5rrU2/Pictures/lXAAwu2629102.png?quality=83',
  DOCTOR: 'https://media.atomicatpages.net/u/EHwwcwAMHbbsq2SavLOaehV5rrU2/Pictures/BqwFAE4694298.png?quality=79',
  PRODUCT_MOCKUP: 'https://i.postimg.cc/ZRzxXKg2/Captura-de-Tela-2026-01-22-a-s-16-57-57.png'
};

export const VIDEO_1_ID = "2bba6603-df07-43ee-8b4d-8c39b0682a5a";
export const VIDEO_1_PARAMS = "aspectRatio=9%3A16&coverColor=%230f172a&progressSpeed=normal&progressBarHeight=5&showCover=true&coverStyle=gradient&playIconStyle=circle&playIconSize=medium&showTitle=true&showControls=false&showProgressBar=true&iconColor=%23ffffff&iconBackgroundColor=%23ff0000&iconBackgroundOpacity=52&progressBarColor=%23ff0000&controlsStyle=default&controlsPosition=bottom&controlsColor=%23ffffff&controlsBackground=gradient&hoverEffect=fade&autoPlay=true&loop=false&liveSimulatorEnabled=false&liveSimulatorViewersMin=10&liveSimulatorViewersMax=50&liveSimulatorGrowthRate=moderate&domainLockEnabled=false&domainLockDomains=&showComments=false";

export const VIDEO_2_ID = "fea66692-db3f-453d-a207-a36ec9f1ca03";
export const VIDEO_2_PARAMS = "aspectRatio=9%3A16&coverColor=%230f172a&progressSpeed=normal&progressBarHeight=4&showCover=true&coverStyle=gradient&playIconStyle=circle&playIconSize=medium&showTitle=true&showControls=false&showProgressBar=true&iconColor=%23ffffff&iconBackgroundColor=%23ff0000&iconBackgroundOpacity=55&progressBarColor=%2322c55e&controlsStyle=default&controlsPosition=bottom&controlsColor=%23ffffff&controlsBackground=gradient&hoverEffect=fade&autoPlay=true&loop=true&liveSimulatorEnabled=false&liveSimulatorViewersMin=10&liveSimulatorViewersMax=50&liveSimulatorGrowthRate=moderate&domainLockEnabled=false&domainLockDomains=&showComments=false";

export const DELAY_MS = 1080000; // 18 minutos
