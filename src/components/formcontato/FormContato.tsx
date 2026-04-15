import { AtIcon, CheckCircleIcon, EnvelopeSimpleIcon, UserIcon } from "@phosphor-icons/react"
import { useState, type SyntheticEvent } from "react";


function FormContato() {

    const [enviado, setEnviado] = useState<boolean>(false);

    function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setEnviado(true);
    }

  return (

    // Conteiner externo
    <div className="flex items-center justify-center bg-orange-100 pb-4">
    <div className="flex flex-col justify-center rounded-2xl bg-orange-800 text-orange-100 
                        w-240 min-h-150 my-4 mx-4 px-8 py-8 shadow-2xl transition-all">
        
    {!enviado ? (
            /* ESTADO 1: FORMULÁRIO */
            <form onSubmit={handleSubmit}
                className="flex flex-col columns-1 justify-start gap-4 mt-3 mb-8 mx-8 w-full">

            <h1 className="font-bold text-3xl mt-8 mb-12">
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
                        required
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
                        required
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
                        required
                        className="border-2 rounded-xl py-2.5 px-4 w-9/10 
                                field-sizing-content bg-orange-50 resize-none focus:outline-none"
                                rows={5}/>
                
                <button type="submit"
                        id="submit"
                        name="submit"
                        className="flex justify-center items-center mt-2.5 w-9/10 p-4
                            rounded-lg text-white font-bold text-md bg-teal-600 
                            hover:bg-teal-700 inset-1 inset-"
                    >Enviar</button>
            </div>
        </form>
        ) : (
                /* ESTADO 2: MENSAGEM ENVIADA */

                <div className="flex flex-col items-center justify-center text-center gap-4 h-full animate-fade-in">
                    <CheckCircleIcon size={80} color="#00786f" weight="fill"/>
                    <h2 className="text-3xl font-bold text-teal-800">Mensagem Enviada!</h2>
                    <p className="text-orange-900">
                        Obrigado pelo contato. <br /> Retornaremos em breve.
                    </p>
                    <button 
                        onClick={() => setEnviado(false)}
                        className="mt-6 text-sm underline text-orange-700 hover:text-orange-900">
                        Enviar outra mensagem
                    </button>
                </div>
            )}
        </div>
    </div>

   
  )
  
}

export default FormContato