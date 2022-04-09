import React from "react"
import axios from "axios"
import styled from "styled-components"
import VejaPlaylist from "./components/VejaPlaylist"
import CriarPlaylist from "./components/CriarPlaylist"


export default class App extends React.Component {
  state = {
        nomePlaylist: "",
        tela:"criarPlaylist",
        
  }
  escolherTela = () => {/**Essa função escolhe a tela baseada no estado */
    switch (this.state.tela){
      case "criarPlaylist":
        return <CriarPlaylist valueInput={this.state.nomePlaylist} onChangeCriarPlaylist={this.onChangeName} onClickCriarUsuario={this.criarUsuario}/>
      case "VejaPlaylist":
        return <VejaPlaylist />
        default:
          return alert (`Erro!`)
    }
  }

  mudarTela = (nomeTela) => {
    this.setState({tela: nomeTela })
    console.log(nomeTela)
  }

  onChangeName = (event)=>{
    this.setState({})
  }
  onChangeLista = (event)=>{
    this.setState({})
  }
  criarUsuario = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.nomePlaylist,
   }
    axios.post (url, body,{
      headers: {
        Authorization: "alessandra-sandeski-silveira"
      }
    }).then((res) => {
      alert("Sucesso")
    }).catch((err)=>{
      console.log(err.response.data)
      alert ("Erro! Tente novamente")
    })
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


