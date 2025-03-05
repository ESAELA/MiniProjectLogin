import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

function Login () {
    return (
        <div className="bg-gray-300 min-h-screen items-center justify-center flex h-screen w-screen">
            
            <div className="bg-white p-25 py-15 max-w-md md:w-92 rounded-sm shadow-xl flex flex-col items-center font-display">
                <div className="w-92 flex flex-col gap-5 items-center ">
                    <h2 className='uppercase mb-3 font-semibold'>Login</h2>
                    <input className="bg-gray-100 p-2 px-5 w-full uppercase" type="email" name="" id="" placeholder="Úsuario"/>
                    <input className="bg-gray-100 p-2 px-5 w-full uppercase" type="password" name="" id="" placeholder="Password"/>
                    <div className='bg-gray-200 p-2 px-4 py-4 mt-1 rounded-4xl cursor-pointer'>
                        <Icon path={mdiArrowRight} size={2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;