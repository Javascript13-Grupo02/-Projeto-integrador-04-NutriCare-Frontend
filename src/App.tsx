import { BrowserRouter, Route, Routes } from "react-router-dom"
import FormContato from "./components/formcontato/FormContato"


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<FormContato />}/>

      
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App