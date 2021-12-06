import { useState } from 'react'


function Forms(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name, password)
        console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    id="name" 
                    type="text" 
                    placeholder="Digite nome" 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="name">Senha:</label>
                    <input 
                    id="password" 
                    type="password" 
                    placeholder="Digite senha"
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Forms