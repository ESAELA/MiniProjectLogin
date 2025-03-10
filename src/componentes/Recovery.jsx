import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import { mdiLockCheck } from '@mdi/js';

function Recovery () {
    return (
        <div className="bg-[url(src/img/bg-recovery.jpg)] bg-center bg-cover bg-no-repeat min-h-screen">
            <div className="flex flex-col justify-center items-center font-display">

                <div className="max-w-sm flex flex-col gap-5 mt-20 xl:flex-col xl:justify-center xl:items-center">

                    <div className="p-10 text-white space-y-8 xl:w-6xl">
                        <div className=''>
                            <h1 className="text-4xl font-semibold text-center uppercase xl:text-7xl xl:leading-10 -tracking-tighter "> 
                                Não consegue entrar?
                            </h1>
                        </div>
                        <div className='xl:w-3xl'>
                            <p className="text-xl text-center xl:text-2xl tracking-[2px]">
                                Há alguns motivos pelos quais você pode não conseguir fazer login. Verifique as opções abaixo para possíveis soluções.
                            </p>
                        </div>
                    </div>
            

                    <div className='xl:flex xl:space-x-10 xl:justify-center space-y-10 xl:space-y-0 xl:w-6xl'>

                    <div className="p-13 bg-white flex flex-col items-center  transition duration-200 ease-in-out hover:-translate-y-1 cursor-pointer">
                        <div className='mb-5'>
                            <Icon path={mdiAccount} size={5} />
                        </div>
                        <div className='xl:w-92 xl:h-50 xl:space-y-5'>
                            <h1 className='text-center text-2xl font-semibold xl:text-4xl'>
                                Esqueçeu o nome de usuário?
                            </h1>
                            <p className='text-gray-500 text-center font-thin xl:text-2xl'>
                                Você pode solicitar um lembrete que será enviado para o teu email vinculado aqui.
                            </p>
                        </div>
                    </div>
                    <div className="p-13 bg-white flex flex-col items-center gap-3 transition duration-200 ease-in-out hover:-translate-y-1 cursor-pointer">
                        <div className='mb-5'>
                            <Icon path={mdiLockCheck} size={5} />
                        </div>
                        <div className='xl:w-92 xl:h-50 xl:space-y-5'>
                            <h1 className='text-center text-2xl font-semibold xl:text-3xl'>
                                Esqueçeu a sua senha?
                            </h1>
                            <p className='text-gray-500 text-center font-thin xl:text-2xl'>
                                Se você esqueceu a sua senha, você pode refini-la aqui.
                            </p>
                        </div>
                        
                    </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Recovery;