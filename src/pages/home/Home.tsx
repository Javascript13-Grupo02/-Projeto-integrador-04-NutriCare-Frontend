import FormContato from "../../components/formcontato/FormContato"
import ListaReceitas from "../../components/receita/listareceita/ListaReceita"

function Home() {
  return (
    <>
      <ListaReceitas />
      <FormContato />
    </>
  )
}

export default Home