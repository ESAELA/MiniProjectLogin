import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

function Register () {
    return (
       <div className="bg-gray-300 min-h-screen flex flex-col justify-center items-center font-display xl:flex xl:flex-row xl:justify-center">
            <div className='xl:flex xl:flex-row xl:justify-between xl:w-5/6 xl:h-96'>
            <div className='xl:flex xl:flex-col xl:justify-end flex flex-col items-center'>
            <div className='mb-8 xl:w-sm xl:h-30 xl:flex xl:flex-row xl:justify-center'>
                <h1 className="uppercase text-3xl text-white font-bold xl:text-7xl xl:leading-14 xl:-tracking-[7px]">Criar uma conta</h1>
            </div>
            </div>
            <div className="bg-white shadow-xl flex flex-col items-center p-10 gap-5 sm:px-10">
                <div>
                    <h1 className='text-black font-bold text-2xl md:text-3xl xl:text-2xl'>
                        Qual é seu e-mail?
                    </h1>
                </div>
                <div className='text-center width-componentes md:w-2xl xl:w-lg sm:w-3/3'>
                    <h2 className='text-2xl text-gray-500 font-semibold xl:text-lg'>
                        Não se preocupe, não contaremos a ninguém.
                    </h2>
                </div>
                <div className='bg-gray-100 width-componentes h-15 md:w-2xl xl:w-lg xl:h-12 sm:w-3/3'>
                    <input type="email" name="" id="" placeholder='E-mail' className='h-full w-full md:w-full xl:w-full xl:h-full p-5 font-black uppercase sm:w-full'/>
                </div>
                <div className='rounded-4xl p-2 px-4 py-4 mt-4 cursor-pointer border-2 border-gray-300 transition duration-300 ease-in-out hover:-translate-y-1'>
                    <Icon path={mdiArrowRight} size={1.4} />
                </div>
                <div className=''> 
                    <a href="login" className='text-gray-500 text-md tracking-wider font-bold hover:text-black xl:text-sm'>
                        Já tem uma conta?
                    </a>
                </div>
            </div>
            </div>
       </div>
    )
}

export default Register;