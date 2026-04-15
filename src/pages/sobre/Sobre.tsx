function Sobre() {
  return (
    <div className="bg-orange-100 w-full py-12 px-4 min-h-screen flex flex-col items-center">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold  text-orange-800">
            NutriCare
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold  text-orange-800">
            Inteligência em Alimentação Saudável
          </h2>
          <p className="text-2xl font-medium leading-snug text-orange-800">
            Alimentação saudável e saborosa na sua porta, a qualquer momento do
            dia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch w-full">
          <div className="flex flex-col items-center w-full h-full">
            <img
              src="https://ik.imagekit.io/vjqejp2vh/proj03/Logo%20NutriCare%20Transparente.png"
              alt="Logo NutriCare"
              className="w-64 md:w-80 h-auto drop-shadow-lg mb-8"
            />

            <div className="bg-white p-10 md:p-14 rounded-3xl shadow-md text-center w-full mt-auto">
              <h3 className="text-3xl font-bold mb-6 text-orange-800">
                Nossa Missão
              </h3>
              <p className="text-lg leading-relaxed">
                O Nutricare nasceu para transformar a experiência de delivery em
                um ato de cuidado e consciência nutricional. Nossa missão é
                oferecer transparência total através de uma API robusta,
                permitindo que o usuário tenha controle absoluto sobre o que
                consome, unindo a praticidade do catálogo digital ao rigor das
                informações dietéticas e calóricas.
              </p>
            </div>
          </div>

          <div className="w-full h-full">
            <div className="bg-white  p-10 md:p-14 rounded-3xl shadow-md">
              <h3 className="text-3xl font-bold mb-6 text-orange-800 text-center">
                Funcionalidades do Projeto
              </h3>

              <p className="text-lg leading-relaxed mb-8 text-center">
                O sistema foi desenhado para oferecer uma experiência
                inteligente e segura tanto na gestão quanto na consulta de
                produtos:
              </p>

              <div className="space-y-8 text-left">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-orange-800 ">
                    Gestão de Catálogo e Pesquisa
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 ">
                    <li>
                      <strong>Listar todos os produtos:</strong> Visualização
                      completa do menu de pratos e bebidas saudáveis.
                    </li>
                    <li>
                      <strong>Procurar produto por ID:</strong> Localização
                      específica e técnica de itens no inventário.
                    </li>
                    <li>
                      <strong>Pesquisar produto por nome:</strong> Sistema de
                      busca flexível para encontrar rapidamente suas opções
                      favoritas.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-orange-800 ">
                    Inteligência Nutricional
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Classificação Nutri-Score:</strong> Atribuição
                      automática de selos de qualidade nutricional (A a E) para
                      cada item, facilitando escolhas saudáveis.
                    </li>
                    <li>
                      <strong>Filtros por Dieta Especial:</strong> Suporte
                      nativo para categorização de produtos específicos, como:
                      <span className="block mt-1 ml-2 text-sm">
                        Vegano e Vegetariano | Sem Glúten | Zero Lactose
                      </span>
                    </li>
                    <li>
                      <strong>Controle Calórico:</strong> Monitoramento preciso
                      do valor energético (kcal) por porção.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sobre;
