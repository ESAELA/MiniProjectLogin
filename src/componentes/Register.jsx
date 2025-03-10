import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

function Register () {
    return (
       <div className="bg-blue-300 min-h-screen flex flex-col justify-center items-center">
            <div>
                <h1 className="uppercase">Criar uma conta</h1>
            </div>
            <div className="bg-blue-200">
                <div>
                    <h1>
                        Qual é seu e-mail?
                    </h1>
                </div>
                <div>
                    <h2>
                        Não se preocupe, não contaremos a ninguém.
                    </h2>
                </div>
                <input type="email" name="" id="" placeholder="Email" />
                <div className='rounded-4xl cursor-pointer border-2 border-gray-300 transition duration-300 ease-in-out hover:-translate-y-1'>
                    <Icon path={mdiArrowRight} size={1.4} />
                </div>
                <div>
                    <a href="">
                        Já tem uma conta?
                    </a>
                </div>
            </div>
       </div>
    )
}

export default Register;