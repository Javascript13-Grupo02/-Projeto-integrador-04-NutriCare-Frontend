import { ArticleIcon, CurrencyDollarIcon, FireSimpleIcon, ForkKnifeIcon } from "@phosphor-icons/react"

interface Receita {
  id?: number
  nome: string
  descricao: string
  categoria: string
  calorias: number
  preco: number
  nutriscore: string
  foto?: string
}

interface CardReceitaProps {
  receita: Receita
}

function CardReceita({ receita }: CardReceitaProps) {
  const {
    nome,
    descricao,
    categoria,
    calorias,
    preco,
    nutriscore,
    foto,
  } = receita;

  const categoriaColor: Record<string, string> = {
    "vegetariano":  "bg-green-400 text-green-900",
    "vegano":       "bg-lime-400 text-lime-900",
    "sem glúten":   "bg-yellow-300 text-yellow-900",
    "zero lactose": "bg-sky-300 text-sky-900",
  };

  const categoriaClass =
    categoriaColor[categoria?.toLowerCase()] ?? "bg-gray-200 text-gray-800";

  return (
    <>
      <div className="rounded-xl overflow-hidden shadow-md hover:-translate-y-3 hover:shadow-xl transition-all duration-300 bg-white">

        {foto ? (
          <img src={foto} alt={nome} className="w-full h-52 object-cover" />
        ) : (
          <div className="w-full h-52 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
          </div>
        )}

        <div className="px-10 pt-8 pb-10">

          <div className="flex gap-1 mb-3">
            <span className={`inline-block text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wide ${categoriaClass}`}>
              {categoria}
            </span>
          </div>

          <p className="text-xl font-semibold text-gray-800 mb-8">{nome}</p>

          <ul className="flex flex-col gap-5">

            <li className="flex items-center gap-4 text-lg">
              <FireSimpleIcon size={20} className="text-orange-500" />
              <span>
                <strong className="font-medium">{calorias}</strong> calorias
              </span>
            </li>

            <li className="flex items-center gap-4 text-lg">
              <ForkKnifeIcon size={20} className="text-orange-500" />
              <span>
                NutriScore® <strong className="font-medium">{nutriscore}</strong>
              </span>
            </li>

            <li className="flex items-start gap-4 text-lg">
              <ArticleIcon size={20} className="text-orange-500 shrink-0" />
              <span className="leading-snug">{descricao}</span>
            </li>

            <li className="flex items-center gap-4 text-lg">
              <CurrencyDollarIcon size={20} className="text-orange-500" />
              <span>
                <strong className="font-medium">
                  {Number(preco).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </span>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}

export default CardReceita;
