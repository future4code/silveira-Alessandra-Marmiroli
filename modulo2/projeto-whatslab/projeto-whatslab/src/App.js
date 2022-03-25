
import React from "react"
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";



// const telaGrande = styled.div`
//   width: 50px;
//   height: 50px;
// `



export default class App extends React.Component {
  state = {
    usuarioWhats:[
    {usuarioNome: "", usuarioMensagem:""}
    ]
  }
  onChangeUsuarioNome = (event) => {
    this.setState({
      usuarioNome: event.target.value
    });
  };
  onChangeUsuarioMensagem = (event) => {
    this.setState({
      usuarioMensagem: event.target.value
    });
}
usuario = () =>{
  let usuario = {
    usuarioNome: this.state.usuarioNome,
    usuarioMensagem: this.state.usuarioMensagem
  }
  const mensagemNova = [...this.state.usuarioWhats, usuario];
      this.setState({
        usuarioWhats: mensagemNova,
        usuarioNome:"",
        usuarioMensagem:"",
        
      })
}
render(){
return(
<main>
  
    <div>  
      <div>
          <input
          placeholder="Usuario"
          value={this.state.usuarioNome}
          onChange={this.onChangeUsuarioNome}/>
      </div>

      <div>
          <input
          placeholder="Mensagem"
          value={this.state.usuarioMensagem}
          onChange={this.onChangeUsuarioMensagem}/>
      </div>  
    </div>
    <div>
      <button onClick={this.usuario}>Adicionar</button>
    </div>

  
</main>
)}}
