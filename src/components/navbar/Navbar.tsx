import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='w-full flex justify-center py-4 bg-orange-800 text-white'>
      <div className="container flex justify-between text-lg mx-8">

        <Link to='/home' className="text-2xl font-bold">NutriCare</Link>

        <div className='flex gap-4'>
          <Link to='/sobre' className=' hover:text-emerald-500 transition-colors'>Sobre</Link>
          <Link to='/equipe' className=' hover:text-emerald-500 transition-colors'>Equipe</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar