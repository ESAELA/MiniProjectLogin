function Recovery () {
    return (
        <div className="bg-[url(src/img/bg-recovery.jpg)] bg-center bg-cover bg-no-repeat min-h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="max-w-sm flex flex-col gap-5 mt-30">
                    <div className="p-10 text-white space-y-8 ">
                        <h1 className=" text-4xl font-semibold text-center uppercase"> 
                            Não consegue entrar?
                        </h1>
                        <p className="text-xl text-center">
                            Há alguns motivos pelos quais você pode não conseguir fazer login. Verifique as opções abaixo para possíveis soluções.
                        </p>
                    </div>
                    <div className="p-10 bg-white">
                        <h1>
                            Esqueçeu o nome de usuário?
                        </h1>
                        <p>
                            Voce pode solicitar um lembrete que será enviado para o teu email vinculado aqui.
                        </p>
                    </div>
                    <div className="p-10 bg-white">
                        <h1>
                            Esqueçeu a sua senha?
                        </h1>
                        <p>
                            Se voce esqueceu a sua senha, voce pode refini-la aqui.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recovery;