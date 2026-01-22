
import React, { useState } from 'react';
import { QUESTIONS } from '../constants';

interface QuizPageProps {
  onComplete: () => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleAnswer = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50 py-12">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
        <div className="h-2 bg-slate-100 w-full">
          <div 
            className="h-full bg-green-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="p-8 md:p-12">
          <span className="text-green-600 font-bold text-sm uppercase tracking-widest mb-2 block">
            Pergunta {currentIndex + 1} de {QUESTIONS.length}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={handleAnswer}
                className="w-full text-left p-5 md:p-6 rounded-2xl border-2 border-slate-100 hover:border-green-500 hover:bg-green-50 transition-all group flex items-center justify-between"
              >
                <span className="text-lg md:text-xl text-slate-700 font-semibold group-hover:text-green-700">
                  {option}
                </span>
                <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-green-500 flex items-center justify-center transition-all">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 scale-0 group-active:scale-100 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-slate-400 text-sm font-medium">
        Suas informações são 100% confidenciais.
      </p>
    </main>
  );
};

export default QuizPage;
