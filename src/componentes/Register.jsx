import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

function Register () {
    return (
       <div className="bg-blue-300 min-h-screen flex flex-col justify-center items-center font-display">
            <div className='mb-8'>
                <h1 className="uppercase text-3xl text-white font-bold">Criar uma conta</h1>
            </div>
            <div className="bg-white shadow-xl flex flex-col items-center p-10 gap-5">
                <div>
                    <h1 className='text-black font-bold text-2xl'>
                        Qual é seu e-mail?
                    </h1>
                </div>
                <div className='text-center width-componentes'>
                    <h2 className='text-2xl text-gray-500 font-semibold'>
                        Não se preocupe, não contaremos a ninguém.
                    </h2>
                </div>
                <div className='bg-gray-100 width-componentes h-15'>
                    <input type="email" name="" id="" placeholder='E-mail' className='h-full w-full p-5 font-black uppercase'/>
                </div>
                <div className='rounded-4xl p-2 px-4 py-4 mt-4 cursor-pointer border-2 border-gray-300 transition duration-300 ease-in-out hover:-translate-y-1'>
                    <Icon path={mdiArrowRight} size={1.4} />
                </div>
                <div className=''> 
                    <a href="" className='text-gray-500 text-md tracking-wider font-bold hover:text-black'>
                        Já tem uma conta?
                    </a>
                </div>
            </div>
       </div>
    )
}

export default Register;