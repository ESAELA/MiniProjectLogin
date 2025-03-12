import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js'

function ForgotUsername () {
    return (
        <div className="bg-gray-300 min-h-screen flex flex-col justify-center font-display">
            <div className='flex flex-col justify-center items-center space-y-10'>

                <div className='w-md'>
                    <h1 className='text-3xl text-center text-white uppercase -tracking-tigh font-bold'>
                        Esqueceu o nome de usuário
                    </h1>
                </div>
                
                <div className="bg-white shadow-xl flex flex-col justify-center items-center w-md gap-10 sm:bg-green-500 md:bg-red-500">

                    <div className='flex flex-col items-center gap-5'>
                        <div className='w-sm mt-10'>
                            <h1 className='text-center text-3xl font-semibold'>
                                Insira seu endereço de e-mail
                            </h1>
                        </div>
                        <div className='w-sm'>
                            <p className='text-2xl text-center text-gray-500 font-semibold'>
                                A recuperação do seu nome de usuário começa com o e-mail vinculado à sua conta.
                            </p>
                        </div>
                    </div>
                    
                    <div className='bg-gray-200 h-20 w-sm text-black'>
                        <input type="" placeholder="E-mail" className='w-full h-full p-5 uppercase text-black' />
                    </div>
                    <div className='rounded-4xl p-2 px-4 py-4 mt-4 cursor-pointer border-2 border-gray-300 transition duration-300 ease-in-out hover:-translate-y-1'>
                        <Icon path={mdiArrowRight} size={3} />
                    </div>
                    <div className='mb-10 text-gray-500 font-bold'>
                        <a href="" className='text-lg tracking-wider hover:text-black'>
                            Esqueceu sua senha?
                        </a>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default ForgotUsername;