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

export default class App extends React.Component {
    state = {
      usuario: [
      {nomeUsuario: "paulinha", fotoUsuario: "https://picsum.photos/50/50", fotoPost: "https://picsum.photos/200/150"},
      {nomeUsuario: "alessandra", fotoUsuario: "MinhaFoto", fotoPost:"https://picsum.photos/200/151"},
      {nomeUsuario:"casanova", fotoUsuario: "https://picsum.photos/50/50", fotoPost: "https://picsum.photos/200/152"}
      ],
    }
    render(){
      const componentesUsuario = this.state.usuario.map((usuario) =>{
      })

    return (
      <MainContainer>
        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post2
          nomeUsuario={'alessandra'}
          fotoUsuario={MinhaFoto}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post3
          nomeUsuario={'casanova'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/152'}
        /> */}
      </MainContainer>
    )
    }
  }




