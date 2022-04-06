import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Button = styled.button`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 27%;
`

const CardCadastro = styled.h2`
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    width: 25.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
` 

    

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }
    onChangeNome = (event) =>{
        this.setState({nome: event.target.value})
    }
    onChangeEmail = (event) =>{
        this.setState({email: event.target.value})
    }
    fazerCadastro = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url,body,{
            headers: {
                Authorization: "alessandra-sandeski-silveira"
            }
        })
        .then((res) => {
            alert ("Usuário(a) cadastrado com Sucesso!")
            this.setState({nome: "", email: ""})
        })
        .catch((err)=> {
            alert(err.response.data.message)
            

        })
        
    }

    render(){
        return (
            <div>
                <Button onClick={this.props.irParaLista}>Ir para Lista de Usuários</Button>

                <CardCadastro>Cadastro</CardCadastro>
                <input placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.onChangeNome}
                />
                <input placeholder={"E-mail"}
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}
