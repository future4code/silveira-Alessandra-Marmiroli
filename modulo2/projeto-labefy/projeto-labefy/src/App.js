import React from "react"
import axios from "axios"
import styled from "styled-components"
import VejaPlaylist from "./components/VejaPlaylist"


export default class App extends React.Component {
  state = {
        nomePlaylist: "",
        tela:"criarPlaylist",
  }
  escolherTela = () => {
    switch (this.state.tela){
      case "criarPlaylist":
        return <VejaPlaylist />
      case "VejaPlaylist":
        return <criarPlaylist />
        default:
          return <criarPlaylist />
    }
  }

  mudarTela = (nomeTela) => {
    this.setState({tela: nomeTela })
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
  verPlaylist = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      
        "result": {
            "quantity": "number",
            "list": [
                {
                    "id": "string",
                    "name": "string"
                }
            ]
        }
    
    }
    axios.get (url, body,{
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
        <p>Projeto Labefy</p>
        <input value={this.state.nomePlaylist} onChange={this.onChangeName}placeholder={"Nome da sua Playlist"}/>
        <button onClick={this.criarUsuario}>Criar</button>
        <button onClick={() => this.mudarTela("VejaPlaylist")}>Lista da Playlist</button>
      </div>
      
    )
  }
}


