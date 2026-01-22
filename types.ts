
export enum AppStep {
  VSL = 'VSL',
  QUIZ = 'QUIZ',
  LOADING = 'LOADING',
  PITCH = 'PITCH'
}

export interface QuizAnswer {
  questionId: string;
  answer: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
}
