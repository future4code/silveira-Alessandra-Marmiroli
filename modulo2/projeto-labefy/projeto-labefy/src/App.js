import React from "react"
import axios from "axios"
import styled from "styled-components"
import VejaPlaylist from "./components/VejaPlaylist"
import CriarPlaylist from "./components/CriarPlaylist"
import AdicionarMusica from "./components/AdicionarMusica"
import DetalhePlaylist from "./components/DetalhePlaylist"


export default class App extends React.Component {
  state = {
        nomePlaylist: "",
        tela:"CriarPlaylist",/**Aqui declaramos a página inicial */
        
  }
  mudarTela = (nomeTela) => {
    this.setState({tela: nomeTela})
   
  }
  escolherTela = () => {/**Essa função escolhe a tela baseada no estado */
    switch (this.state.tela){
      case "CriarPlaylist":
        return <CriarPlaylist />
      case "VejaPlaylist":
        return <VejaPlaylist />
      case "AdicionarMusica":
        return <AdicionarMusica />
      case "DetalhePlaylist":
        return <DetalhePlaylist />
        default: 
          return <CriarPlaylist />
    }
  }

  

  render(){
    return(
      <div>
        
        <button onClick={() => this.mudarTela("VejaPlaylist")}>Lista Playlist</button>
        <button onClick={() => this.mudarTela("AdicionarMusica")}>Adicionar Musica</button>
        {this.escolherTela()}
      </div>
      
    )
  }
}


