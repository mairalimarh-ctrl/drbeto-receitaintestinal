
import React, { useState, useEffect } from 'react';
import { DELAY_MS, VIDEO_1_ID, VIDEO_1_PARAMS } from '../constants';
import LiteVideoPlayer from './LiteVideoPlayer';

interface VslPageProps {
  onComplete: () => void;
}

const VslPage: React.FC<VslPageProps> = ({ onComplete }) => {
  const [showButton, setShowButton] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Timer original de 18 minutos
    const timer = setTimeout(() => {
      setShowButton(true);
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  // Atalho para você testar sem esperar 18 minutos: clique 3 vezes no título!
  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    if (newCount >= 3) {
      setShowButton(true);
    }
    setClickCount(newCount);
  };

  return (
    <main className="flex flex-col items-center px-4 py-8 md:py-12 bg-white min-h-screen">
      <div className="max-w-4xl w-full text-center mb-8 cursor-default" onClick={handleSecretClick}>
        <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-red-200">
          ⚠️ Assista com atenção
        </div>
        <h1 className="text-2xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 px-2 select-none">
          ALERTA: Maior Especialista intestinal revela
        </h1>
        <p className="text-base md:text-2xl text-slate-600 font-medium italic px-4 select-none">
          "Faça isso só uma vez para esvaziar o intestino como um relógio"
        </p>
      </div>

      <div className="w-full mb-12 flex justify-center">
        <div className="max-h-[70vh] flex justify-center w-full">
           <LiteVideoPlayer 
            videoId={VIDEO_1_ID} 
            params={VIDEO_1_PARAMS}
            aspectRatio="9:16"
          />
        </div>
      </div>

      {/* O botão aparece com animação após 18min ou 3 cliques no título */}
      <div className={`w-full max-w-lg px-4 pb-20 transition-all duration-1000 transform ${showButton ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}>
        <button
          onClick={onComplete}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-xl md:text-2xl px-4 py-6 rounded-2xl shadow-[0_8px_0_0_rgba(21,128,61,1)] active:shadow-none active:translate-y-2 transition-all uppercase tracking-tight animate-bounce"
        >
          GERAR RECEITA PERSONALIZADA!
        </button>
        <p className="text-center mt-6 text-slate-400 font-medium text-sm">
          Clique no botão acima para iniciar seu diagnóstico gratuito.
        </p>
      </div>
    </main>
  );
};

export default VslPage;
