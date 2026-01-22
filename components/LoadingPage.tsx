
import React, { useState, useEffect } from 'react';

interface LoadingPageProps {
  onComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Analisando seu perfil...",
    "Cruzando dados com nosso banco...",
    "Calculando dosagens ideais...",
    "Preparando sua Receita Lache...",
    "Finalizando diagnóstico..."
  ];

  useEffect(() => {
    const totalTime = 5000; // 5 seconds
    const intervalTime = 50;
    const steps = totalTime / intervalTime;
    const progressIncrement = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + progressIncrement;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const messageTimer = setInterval(() => {
      setMessageIndex(prev => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [onComplete]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="w-full max-w-md text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-8 border-slate-100 rounded-full"></div>
          <div 
            className="absolute inset-0 border-8 border-green-500 rounded-full border-t-transparent animate-spin"
            style={{ animationDuration: '1.5s' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-slate-800">{Math.round(progress)}%</span>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-slate-900 mb-2 animate-pulse">
          {messages[messageIndex]}
        </h2>
        <p className="text-slate-500 font-medium">
          Isso levará apenas alguns segundos.
        </p>

        <div className="mt-12 space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="h-2 bg-slate-200 rounded flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default LoadingPage;
