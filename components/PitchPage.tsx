
import React from 'react';
import { IMAGES, VIDEO_2_ID, VIDEO_2_PARAMS } from '../constants';
import LiteVideoPlayer from './LiteVideoPlayer';

const PitchPage: React.FC = () => {
  const checkoutUrl = "https://app.sellpay.com.br/c/21u9";

  return (
    <main className="flex flex-col items-center bg-white min-h-screen">
      {/* Top Banner */}
      <div className="w-full bg-slate-900 text-white py-3 px-4 text-center text-xs md:text-sm font-bold uppercase tracking-widest">
        Acesso Liberado: Sua Receita Lache está pronta!
      </div>

      {/* Header Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 text-center max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
          RECUPERE A LIBERDADE DO SEU INTESTINO COM A <span className="text-green-600">RECEITA LACHE</span>
        </h1>
        <p className="text-base md:text-xl text-slate-600 font-medium mb-12">
          Assista ao vídeo abaixo para ver como aplicar sua dosagem personalizada e esvaziar seu intestino naturalmente.
        </p>
        
        <div className="mb-12 flex justify-center">
          <LiteVideoPlayer 
            videoId={VIDEO_2_ID} 
            params={VIDEO_2_PARAMS}
            aspectRatio="9:16"
          />
        </div>

        <div className="flex flex-col items-center px-4">
          <a
            href={checkoutUrl}
            className="w-full max-w-lg bg-green-600 hover:bg-green-700 text-white font-black text-xl md:text-3xl px-8 py-6 rounded-2xl shadow-[0_10px_0_0_rgba(21,128,61,1)] active:shadow-none active:translate-y-2 transition-all uppercase tracking-tight text-center"
          >
            QUERO MINHA RECEITA AGORA!
          </a>
          <img className="mt-6 w-full max-w-[250px] opacity-80" src="https://logodownload.org/wp-content/uploads/2021/01/selo-compra-segura-3.png" alt="Compra Segura" />
        </div>
      </section>

      {/* Product Mockup Section */}
      <section className="w-full bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                O que é a Receita Lache?
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                A <strong>Receita Lache</strong> não é um laxante comum. É uma combinação natural de nutrientes que atua diretamente nas paredes intestinais, removendo resíduos acumulados há anos de forma suave e eficaz.
              </p>
              <ul className="space-y-4">
                {[
                  'Ingredientes 100% naturais',
                  'Fácil de preparar em casa',
                  'Esvaziamento completo e indolor',
                  'Redução imediata do inchaço abdominal'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img src={IMAGES.PRODUCT_MOCKUP} alt="Mockup Receita Lache" className="w-full max-w-sm drop-shadow-2xl rotate-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm">
          <div className="w-40 h-40 md:w-64 md:h-64 flex-shrink-0 overflow-hidden rounded-full border-8 border-slate-50 shadow-inner">
            <img src={IMAGES.DOCTOR} alt="Doutor Beto" className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Conheça o Doutor Beto</h3>
            <p className="text-green-600 font-bold mb-4">Especialista em Saúde Gastrointestinal</p>
            <p className="text-slate-600 text-lg leading-relaxed italic">
              "Dediquei os últimos 15 anos a estudar como a flora intestinal influencia nosso bem-estar total. A Receita Lache é o resultado de anos de pesquisa para encontrar uma solução segura e natural."
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-slate-900 py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase">
            Quem experimentou, aprovou!
          </h2>
          <div className="h-1 w-24 bg-green-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 max-w-6xl">
          {[IMAGES.TESTIMONIAL_1, IMAGES.TESTIMONIAL_2, IMAGES.TESTIMONIAL_3].map((img, i) => (
            <div key={i} className="bg-white p-4 rounded-3xl transform hover:scale-105 transition-transform duration-300 shadow-xl">
              <img src={img} alt={`Depoimento ${i+1}`} className="w-full rounded-2xl" />
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="container mx-auto px-4 py-20 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase leading-tight">
          Sua saúde intestinal não pode esperar
        </h2>
        
        <a
          href={checkoutUrl}
          className="inline-block w-full max-w-lg bg-green-600 hover:bg-green-700 text-white font-black text-2xl md:text-3xl px-8 py-6 rounded-2xl shadow-[0_10px_0_0_rgba(21,128,61,1)] active:shadow-none active:translate-y-2 transition-all uppercase tracking-tight"
        >
          GARANTIR MINHA VAGA!
        </a>
      </section>
    </main>
  );
};

export default PitchPage;
