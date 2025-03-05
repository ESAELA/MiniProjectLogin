function Login () {
    return (
        <div className="bg-gray-300 min-h-screen items-center justify-center flex h-screen w-screen">
            <div className="bg-white p-30 max-w-md md:w-92 rounded-sm shadow-xl flex flex-col items-center">
                <div className="w-92 flex flex-col gap-5 items-center ">
                    <input className="bg-gray-100 p-2 px-5 w-full" type="email" name="" id="" placeholder="Úsuario"/>
                    <input className="bg-gray-100 p-2 px-5 w-full" type="password" name="" id="" placeholder="Password"/>
                    <div>
                        <a href="">Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;