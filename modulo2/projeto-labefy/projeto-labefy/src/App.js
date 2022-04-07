import React from "react"
import axios from "axios"
import styled from "styled-components"


export default class App extends React.Component {
  state = {
        nomePlaylist: "",
        tela:"criarPlaylist",
  }
  mudarTela = () => {
    switch (this.state.tela){
      case "criarPlaylist":
        return <criarPlaylist />
      case "listaPlaylist":
        return <listaPlaylist />
        default:
          return <div>Página não encontrada!</div>
    }
  }
  onChangeName = (event)=>{
    this.setState({nomePlaylist:event.target.value})
  }
  onChangeLista = (event)=>{
    this.setState({criarPlaylist:event.target.value})
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
  verLista = () =>{
    /**adicionar o código para visualizar a lista */
  }
  render(){
    return(
      <div>
        <p>Projeto Labefy</p>
        <input value={this.state.nomePlaylist} onChange={this.onChangeName}placeholder={"Nome da sua Playlist"}/>
        <button onClick={this.criarUsuario}>Criar</button>
        <button>Lista da Playlist</button>
      </div>
      
    )
  }
}


