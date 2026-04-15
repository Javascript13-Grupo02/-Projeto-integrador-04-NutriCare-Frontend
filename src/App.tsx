import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Sobre from "./pages/sobre/Sobre"
import Equipe from "./pages/equipe/Equipe"
import Home from "./pages/home/Home"


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/equipe" element={<Equipe />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App