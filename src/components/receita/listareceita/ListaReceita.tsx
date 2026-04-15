import CardReceita from "../cardreceita/CardReceita";

const receitas = [
  {
    id: 1,
    nome: "Salmão Grelhado com Aspargos",
    descricao: "Filé de salmão grelhado com aspargos frescos e mix de tomatinhos coloridos.",
    categoria: "zero lactose",
    calorias: 420,
    preco: 59.90,
    nutriscore: "A",
    foto: "https://images.unsplash.com/photo-1588428894220-ae6af96e8c2d?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    nome: "Sopa de Batata Doce",
    descricao: "Sopa cremosa de batata doce com sementes de abóbora e queijo feta.",
    categoria: "sem glúten",
    calorias: 310,
    preco: 34.90,
    nutriscore: "A",
    foto: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    nome: "Açaí Bowl com Frutas",
    descricao: "Bowl de açaí com kiwi, amoras, banana, morango e semente de chia.",
    categoria: "vegano",
    calorias: 380,
    preco: 38.50,
    nutriscore: "A",
    foto: "https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function ListaReceitas() {
  return (
    <section className="py-24 bg-orange-100">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <span className="block text-base font-medium text-orange-600 uppercase tracking-widest mb-4">
            Receitas
          </span>
          <h2 className="text-4xl font-bold text-orange-800 leading-snug">
            A escolha perfeita para o seu dia
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {receitas.map((receita) => (
            <CardReceita key={receita.id} receita={receita} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ListaReceitas; 