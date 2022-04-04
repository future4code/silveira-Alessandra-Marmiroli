
import React from "react"
import './App.css';
import styled from "styled-components";
import imagem from './img/florazul.jpg';


const Main = styled.main`
  border: 1px solid black;
  height: 100vh;
  width: 46%;
  margin: 0 30%;
  display: grid;
  grid-template: column;
  grid-template-rows: 96.5fr 3.5fr;
  align-items: flex-end;
  background-color:#87CEEB;

`

const ContainerArea = styled.div`
  width: 100wh;
  padding: 0 3%;
  margin: 10px;

`
const divContainer = styled.div`
  color: blue;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
`


export default class App extends React.Component {
  state = {
    whatsMensagem:[{
    NomeDoUsuario: "",
    MensagemDoUsuario:""
  }],
    inputDoUsuario:"",
    inputDaMensagem:""
  }
  
  onChangeNomeDoUsuario = (event) => {
    this.setState({inputDoUsuario: event.target.value})
  }
  onChangeMensagemDoUsuario = (event) => {
    this.setState({inputDaMensagem: event.target.value})
  }
  
  usuario = () =>{
    const usuario1 = {
      NomeDoUsuario: this.state.inputDoUsuario,
      MensagemDoUsuario: this.state.inputDaMensagem
    }
    const mensagemNova = [...this.state.whatsMensagem, usuario1];
        this.setState({
          whatsMensagem: mensagemNova,
          inputDaMensagem:"",
          
        })
}
render(){
  const infoMensagem = this.state.whatsMensagem.map((msg)=>{
    return (
      <div>
        <p>{msg.NomeDoUsuario}: {msg.MensagemDoUsuario}</p>
      </div>
    );
  });

return(
  <Main>
        <ContainerArea>
          {infoMensagem}
        </ContainerArea>

          <divContainer>
              <input
              placeholder="Usuario"
              value={this.state.inputDoUsuario}
              onChange={this.onChangeNomeDoUsuario}/>
          
              <input
              placeholder="Mensagem"
              value={this.state.inputDaMensagem}
              onChange={this.onChangeMensagemDoUsuario}/>
            
          <button onClick={this.usuario}>Adicionar</button>
        </divContainer>
  </Main>
)}}
