import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js'

function ForgotUsername () {
    return (
        <div className="bg-gray-300 min-h-screen flex flex-col justify-center font-display">
            <div className='flex flex-col justify-center items-center space-y-10 xl:flex xl:flex-row xl:justify-center'>

                <div className='flex flex-col items-center xl:flex xl:flex-row xl:justify-between xl:w-6xl xl:items-center md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:items-center xl:bg-black'>

                <div className='w-sm sm:w-lg  md:w-xl  md:h-30 mb-5 md:my-10 xl:bg-green-400 xl:w-85 xl:h-40 xl:flex xl:flex-col xl:justify-center'>
                    <h1 className='text-4xl text-center text-white uppercase -tracking-tigh font-bold sm:-tracking-wide sm:text-5xl sm:leading-14 md:text-6xl md:leading-17 xl:leading-13 xl:-tracking-widest'>
                        Esqueceu o nome de usuário
                    </h1>
                </div>
                
                <div className="bg-white shadow-xl flex flex-col justify-center items-center w-md gap-10 sm:w-xl md:w-2xl mb-10 xl:w-md  2xl:bg-green-600">

                    <div className='flex flex-col items-center gap-5 '>
                        <div className='w-sm mt-10 sm:w-md xl:w-96'>
                            <h1 className='text-center text-3xl font-bold sm:text-4xl sm:font-bold md:font-bold xl:text-3xl '>
                                Insira seu endereço de e-mail
                            </h1>
                        </div>
                        <div className='w-sm sm:w-lg md:w-xl  xl:w-96'>
                            <p className='text-2xl text-center text-gray-500 font-semibold sm:text-3xl md:text-4xl md:leading-12 md:tracking-wide xl:text-2xl xl:leading-7'>
                                A recuperação do seu nome de usuário começa com o e-mail vinculado à sua conta.
                            </p>
                        </div>
                    </div>
                    
                    <div className='bg-gray-200 h-20 w-sm text-black sm:w-lg  md:w-xl md:h-25 xl:w-96 xl:h-13'>
                        <input type="" placeholder="E-mail" className='w-full h-full p-5 uppercase text-black sm:w-full md:w-full md:h-full md:p-10 xl:w-full xl:h-full xl:p-5' />
                    </div>
                    <div className='rounded-4xl xl:p-0 xl:rounded-3xl p-2 px-4 py-4 mt-4 cursor-pointer border-2 border-gray-300 transition duration-300 ease-in-out hover:-translate-y-1'>
                        <Icon path={mdiArrowRight} size={3} />
                    </div>
                    <div className='mb-10 text-gray-500 font-bold'>
                        <a href="" className='text-lg tracking-wider uppercase hover:text-black sm:text-2xl sm:tracking-normal sm:uppercase md:text-3xl xl:text-sm'>
                            Esqueceu sua senha?
                        </a>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotUsername;