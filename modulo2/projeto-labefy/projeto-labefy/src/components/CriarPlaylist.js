import React from "react"
import axios from "axios"
import styled from "styled-components"


export default class CriarPlaylist extends React.Component {
    state = {
        nomePlaylist: ""
               
  }
  onChangeNome = (event) => {
    this.setState({nomePlaylist: event.target.value})
  }
    
    criandoUmaPlaylist = () => {
        console.log(this.state)
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
          this.setState({nomePlaylist: ""})
        }).catch((err)=> {
          console.log(err.response.data)
          alert ("Erro! Tente novamente")
        })
      }
    render(){
        return(
            <div> <h1>Projeto Labefy</h1>
            <input placeholder={"Nome da sua Playlist"}
            value={this.state.nomePlaylist}
            onChange={this.onChangeNome}/>
            <button onClick={this.criandoUmaPlaylist}>Criar Playlist</button>
            </div>
        )
    }

}