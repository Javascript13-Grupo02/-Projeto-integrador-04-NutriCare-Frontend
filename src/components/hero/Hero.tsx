import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Pegamos o quanto rolamos e a altura total rolável
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableHeight = docHeight - windowHeight;

      // 2. Calculamos o progresso de 0 a 1
      const progress = scrollableHeight > 0 ? Math.min(1, scrollTop / scrollableHeight) : 0;
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Calculamos os valores de transformação baseados no progresso.
  // Você pode ajustar esses multiplicadores (como 0.3) para controlar a força do efeito.
  const imageScale = 1 + scrollProgress * 0.3; // A imagem aumenta 30% no final

  return (
    <main className="relative min-h-[200vh]">
      {/* --- CAMADA FIXED DO BACKGROUND --- */}
      {/* Ela está sempre lá, fixa, mas o conteúdo Hero vai cobri-la no início */}
      <div className="fixed inset-0 z-0">
        <div 
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1498837167922-ddd27525d352')] bg-cover bg-center"
          style={{
            transform: `scale(${imageScale})`,
            transition: 'transform 0.05s ease-out' // Transição suave
          }}
          aria-hidden="true"
        >
          {/* Overlay Escuro constante no BG */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

    
      {/* --- CAMADA DO CONTEÚDO HERO --- */}
      {/* Ela é relative e z-10 para ficar na frente do BG fixed inicialmente */}
      {/* Ela também precisa ter o MESMO BG e Overlay, para criar a ilusão de que a imagem está nela */}
      <section className="relative z-10 flex h-dvh flex-col items-center justify-center pt-8 overflow-hidden">
        
        {/* Imagem Hero Duplicada (Para o efeito de zoom antes de rolar) */}
        {/* Ela tem transform: scale(1) inicial e sobe com o scroll */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498837167922-ddd27525d352')] bg-cover bg-center"
          aria-hidden="true"
        >
           {/* Overlay Escuro do Hero */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Texto do Hero */}
        <div className="z-20 flex flex-col items-center justify-center gap-4 px-4 text-white">
          <h1 className="text-center text-4xl font-bold md:text-6xl tracking-tight">
            Fresco, Rápido, Saudável
          </h1>
          <p className="mt-6 max-w-2xl text-center text-xl font-medium md:text-2xl">
            Alimentação saudável e saborosa na sua porta a qualquer momento do dia
          </p>
          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all">
            Começar Agora
          </button>
        </div>
      </section>

      {/* --- CONTEÚDO ADICIONAL (Para gerar o Scroll) --- */}
      <section className="relative z-20 bg-white py-24 px-6 mt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl mb-8">
            Como funciona nossa plataforma?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Conforme você rolou a primeira seção, a imagem lá atrás sofreu um "zoom-in" suave 
            graças ao controle via JavaScript no `transform: scale()`. 
            A primeira seção (`z-10`) subiu, e agora você vê a seção branca (`z-20`) 
            cobrindo o conteúdo, mas você ainda consegue ver o fundo com zoom lá atrás.
          </p>
           {/* Mais conteúdo para scroll */}
          <div className="h-[800px] bg-gray-100 rounded-xl flex items-center justify-center">
            <span className="text-gray-400">Conteúdo do Cardápio</span>
          </div>
        </div>
      </section>
    </main>
  );
}
