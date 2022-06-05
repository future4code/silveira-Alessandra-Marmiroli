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
        deyalhesDaUrl:""
        
  }
  mudarTela = (nomeTela) => {/**Essa função muda a tela */
    this.setState({tela: nomeTela})
   
  }
  onChangeDetalhes = (url) =>{
    this.setState({VejaPlaylist:"DetalhePlaylist", deyalhesDaUrl:url})
        
  }
  onChangeVoltar = () =>{
    this.setState({VejaPlaylist:"DetalhePlaylist", deyalhesDaUrl:""})
  }
  
  escolherTela = () => {/**Essa função escolhe a tela baseada no estado */
    switch (this.state.tela){
      case "CriarPlaylist":
        return <CriarPlaylist />
      case "VejaPlaylist":
        return <VejaPlaylist onChangeDetalhes={this.onChangeDetalhes}/>
      case "AdicionarMusica":
        return <AdicionarMusica />
      case "DetalhePlaylist":
        return <DetalhePlaylist onChangeDetalhes={this.onChangeDetalhes}url={this.state.deyalhesDaUrl}/>
        default: 
          return <CriarPlaylist />
    }
  }

  

  render(){
    return(
      <div>
        
        <button onClick={() => this.mudarTela("VejaPlaylist")}>Lista Playlist</button>
        <button onClick={() => this.mudarTela("AdicionarMusica")}>Adicionar Musica</button>
        <button onClick={() => this.mudarTela("DetalhePlaylist")}>Detalhes Da Playlist</button>
        {this.escolherTela()}
      </div>
      
    )
  }
}


