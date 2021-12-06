function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `Ola, ${algumNome}, tudo bem?`
    }
    return(
        <div>
           { nome && <p>{ gerarSaudacao(nome) }</p> }
        </div>
    )
}

export default Saudacao