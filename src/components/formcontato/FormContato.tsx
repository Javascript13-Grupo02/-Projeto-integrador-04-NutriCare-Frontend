import { AtIcon, EnvelopeSimpleIcon, UserIcon } from "@phosphor-icons/react"

function FormContato() {
  return (
    // Conteiner externo
    <div className="flex flex-nowrap rounded-2xl bg-orange-100 text-orange-800 
                    w-200 h-1/2 my-4 mx-4 px-8 pt-4 pb-8 justify-center shadow-2xl">
        
        <form className="flex flex-col columns-1 justify-start gap-4 mt-4 mb-8 mx-8 w-full">

            <h1 className="font-bold text-3xl mb-12">
                Entre em contato
            </h1>

            {/* div de nome */}
            <div className="flex flex-col gap-1.5">
                <div className="flex flex-row items-center gap-0.5"> 
                    <UserIcon size={20} color="#9f2d00" weight="bold"  />
                    <label htmlFor="nome" className="font-bold">Nome</label>
                </div>
                <input type="text"
                        placeholder="Digite o seu nome"
                        id="nome"
                        name="nome"
                        className="border-2 rounded-xl py-2 px-4 w-6/10 bg-orange-50 focus:outline-none" />
            </div>

            {/* div de email */}
            <div className="flex flex-col gap-1.5">
                <div className="flex flex-row items-end gap-0.5">
                    <AtIcon size={20} color="#9f2d00" weight="bold" />
                    <label htmlFor="email" className="font-bold">E-mail</label>
                    
                </div>
                <input type="email"
                        placeholder="example@example.com"
                        id="email"
                        name="email"
                        className="border-2 rounded-xl py-2 px-4 w-7/10 bg-orange-50 focus:outline-none"/>
            </div>

            {/* div de mensagem */}
            <div className="flex flex-col gap-1.5">
                <div className="flex flex-row items-end gap-0.5">
                    <EnvelopeSimpleIcon size={20} color="#9f2d00" weight="bold" />
                    <label htmlFor="mensagem" className="font-bold">Mensagem</label>
                    
                </div>
                <textarea
                        placeholder="Digite uma mensagem de até 500 caracteres"
                        id="mensagem"
                        name="mensagem"
                        className="border-2 rounded-xl py-2.5 px-4 w-9/10 
                                  field-sizing-content bg-orange-50 resize-none focus:outline-none"
                                  rows={5}/>
            </div>
        </form>
    </div>
  )
}

export default FormContato