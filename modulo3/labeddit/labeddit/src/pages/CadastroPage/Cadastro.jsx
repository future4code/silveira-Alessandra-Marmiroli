import React from "react"

const Cadastro = ()=>{
    return (
        <div>
            <h1>Olá, boas vindas ao LabEddit</h1>
            <input placeholder="Nome de usuário"></input>
            <input placeholder="E-mail"></input>
            <input placeholder="Senha"></input>
            <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
            <input type="checkbox"></input>
            <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
            <button>Cadastrar</button>
        </div>
    )
}

export default Cadastro 