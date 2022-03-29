import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post/Post2';
import Post3 from './components/Post/Post3';
import MinhaFoto from './img/ale.jpg';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Botao = styled.button`
  padding: 5px 5px;
  margin: 5px 5px;
  background-color: green;

` 
const InputBotao = styled.input`
  /* padding: 5px 5px;
  margin: 5px 5px; */
    height: 30px;
    width: 29%;
  
`

export default class App extends React.Component {
    state = {
      usuario: [
      {nomeUsuario: "paulinha", fotoUsuario: "https://picsum.photos/50/50", fotoPost: "https://picsum.photos/200/150"},
      {nomeUsuario: "alessandra", fotoUsuario: "MinhaFoto", fotoPost:"https://picsum.photos/200/151"},
      {nomeUsuario:"casanova", fotoUsuario: "https://picsum.photos/50/50", fotoPost: "https://picsum.photos/200/152"}
      ],
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost:"", 
    }
    onChangeNomeUsuario = (event) => {
      this.setState({
        nomeUsuario: event.target.value
      });
    };
    onChangeFotoUsuario = (event) => {
      this.setState({
        fotoUsuario: event.target.value
      });
    };
    onChangeFotoPost = (event) => {
      this.setState({
        fotoPost: event.target.value
      });
    };
    novoUsuario = () =>{
      let novoUsuario = {
        nomeUsuario: this.state.nomeUsuario,
        fotoUsuario: this.state.fotoUsuario,
        fotoPost: this.state.fotoPost
      }
      const postNovo = [...this.state.usuario, novoUsuario];
      this.setState({
        usuario: postNovo,
        nomeUsuario:"",
        fotoUsuario:"",
        fotoPost:""
      })

    }

    render(){
      const componentesUsuario = this.state.usuario.map((post) =>{
        return (
          <Post 
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.nomeUsuario}
          fotoPost={post.fotoPost}/>
        )
      })

    return (
      <MainContainer>

        <InputBotao
          placeholder="Nome"
          value={this.state.nomeUsuario}
          onChange={this.onChangeNomeUsuario}/>

          <InputBotao
          placeholder="Foto"
          value={this.state.fotoUsuario}
          onChange={this.onChangeFotoUsuario}/>

          <InputBotao
          placeholder="Post"
          value={this.state.fotoPost}
          onChange={this.onChangeFotoPost}/>

      
        <Botao onClick={this.novoUsuario}>Adicionar</Botao>
             

       {componentesUsuario}
      </MainContainer>
    )
    }
  }




