import { InstagramLogo, GithubLogo } from "@phosphor-icons/react"

function Footer() {

    return (
        <div className="flex justify-center bg-orange-800 text-white">
            <div className="container flex items-center justify-between py-4 px-6">
                
                {/*  Copyright */}
                <p className="text-xl font-bold">
                    NutriCare | Copyright: 2026
                </p>

                {/*  Redes Sociais */}
                <div className="flex flex-col items-center gap-1">
                    <p className="text-lg">Acesse nossas redes sociais</p>
                    <div className="flex gap-4 items-center">
                        <InstagramLogo size={48} weight='bold' className="hover:text-emerald-500 cursor-pointer transition-colors" />
                        <GithubLogo size={48} weight='bold' className="hover:text-emerald-500 cursor-pointer transition-colors" />
                        
                        {/* Linktree */}
                        <a href="#" className="hover:text-emerald-500 transition-colors">
                            <svg xmlns="" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.511 5.853l4.005-4.117 2.118 2.057-4.152 4.117h5.836v2.902h-5.898l4.219 4.219-2.121 2.122-5.52-5.521-5.519 5.521-2.122-2.122 4.219-4.219H2.683V7.91h5.835L4.366 3.793l2.12-2.057 4.005 4.117V0h3.02v5.853zM10.49 16.mainstream h3.02V24H10.49v-7.149z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/*  Terms e Privacy */}
                <div className="flex gap-4 text-sm">
                    <a href="#" className="hover:text-emerald-500 transition-colors">Terms</a>
                    <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
                </div>

            </div>
        </div>
    )
}

export default Footer