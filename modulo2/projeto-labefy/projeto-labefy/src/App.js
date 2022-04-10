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
        tela:"criarPlaylist",
        
  }
  escolherTela = () => {/**Essa função escolhe a tela baseada no estado */
    switch (this.state.tela){
      case "criarPlaylist":
        return <CriarPlaylist />
      case "VejaPlaylist":
        return <VejaPlaylist />
      case "AdicionarMusica":
        return <AdicionarMusica />
        default:
          return alert (`Erro!`)
    }
  }

  mudarTela = (nomeTela) => {
    this.setState({tela: nomeTela })
    console.log(nomeTela)
  }

  render(){
    return(
      <div>
        <button onClick={() => this.mudarTela("VejaPlaylist")}>Lista da Playlist</button>
        {this.escolherTela()}
      </div>
      
    )
  }
}


