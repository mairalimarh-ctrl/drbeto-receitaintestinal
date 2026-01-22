
import React, { useState } from 'react';
import { AppStep } from './types';
import VslPage from './components/VslPage';
import QuizPage from './components/QuizPage';
import LoadingPage from './components/LoadingPage';
import PitchPage from './components/PitchPage';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.VSL);

  const navigateTo = (nextStep: AppStep) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(nextStep);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {step === AppStep.VSL && (
        <VslPage onComplete={() => navigateTo(AppStep.QUIZ)} />
      )}
      
      {step === AppStep.QUIZ && (
        <QuizPage onComplete={() => navigateTo(AppStep.LOADING)} />
      )}
      
      {step === AppStep.LOADING && (
        <LoadingPage onComplete={() => navigateTo(AppStep.PITCH)} />
      )}
      
      {step === AppStep.PITCH && (
        <PitchPage />
      )}

      {/* Footer minimalista em todas as páginas */}
      <footer className="py-8 bg-slate-100 border-t border-slate-200 mt-auto">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; 2024 Receita Lache - Todos os direitos reservados.</p>
          <p className="mt-2">Políticas de Privacidade | Termos de Uso</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
