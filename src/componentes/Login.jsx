import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

function Login () {
    return (
        <div className="bg-gray-300 min-h-screen items-center justify-center flex h-screen w-screen">
            
            <div className="bg-white p-20 max-w-md md:px-80 md:py-20 lg:p-20 rounded-sm shadow-xl flex flex-col items-center font-display">
                <div className="w-92 flex flex-col gap-7 items-center ">
                    <h2 className='uppercase mb-3 font-medium text-2xl'>Login</h2>
                    <input className="bg-gray-100 p-3 px-5 w-full uppercase font-thin md:w-xl md:h-15" type="email" name="" id="" placeholder="Úsuario"/>
                    <input className="bg-gray-100 p-3 px-5 w-full uppercase font-thin md:w-xl md:h-15" type="password" name="" id="" placeholder="Password"/>
                    <div className=' p-2 px-4 py-4 mt-4 rounded-4xl cursor-pointer border-2 border-gray-300 transition duration-300 ease-in-out hover:-translate-y-1'>
                        <Icon path={mdiArrowRight} size={2} />
                    </div>
                    <div className='flex flex-col items-center gap-2 text-gray-500 mt-2 text-sm font-extrabold uppercase'>
                        <a className="hover:text-black" href="">Não consegue entrar?</a>
                        <a className="hover:text-black" href="">Criar uma conta?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;