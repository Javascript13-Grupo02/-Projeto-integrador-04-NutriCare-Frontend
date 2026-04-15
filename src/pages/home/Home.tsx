import FormContato from "../../components/formcontato/FormContato"
import Hero from "../../components/hero/Hero"
import ListaReceitas from "../../components/receita/listareceita/ListaReceita"

function Home() {
  return (
    <>
      <section className="bg-orange-100 flex flex-col items-center justify-center pt-8 bg-[url('https://images.unsplash.com/photo-1498837167922-ddd27525d352')] bg-cover bg-center relative h-dvh">
        <div className="absolute inset-0 bg-black/50">
        </div>
        <div className="z-10 flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold  text-white text-center m-2">Fresco, Rápido, Saudável</h1>
          <p className="text-2xl md:text-3xl font-medium leading-snug text-white text-center m-2">Alimentação saudável e saborosa na sua porta a qualquer momento do dia</p>
        </div>
      </section>
      {/* <Hero /> */}
      <ListaReceitas />
      <FormContato />
    </>
  )
}

export default Home