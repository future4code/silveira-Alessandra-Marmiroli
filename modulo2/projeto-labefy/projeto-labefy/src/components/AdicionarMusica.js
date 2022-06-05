import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardAdicionar = styled.button`
  background-color: #A5F0DF;
  display: flex;
  justify-items: center;
  
`

export default class AdicionarMusica extends React.Component {
    state = {
        nomeDaMusica: "",
        nomeDoArtista: "",
        urlLink: ""   
    }
  
    onChangeNomeDaMusica = (event) => {
        this.setState({nomeDaMusica: event.target.value})
    }
    onChangeNomeDoArtista = (event) => {
        this.setState({nomeDoArtista: event.target.value})
    }
    onChangeUrlLink = (event) => {
        this.setState({urlLink: event.target.value})
    }
  
    adicionandoUmaMusica = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/2a93cb02-2541-4a3b-9923-f29b02451084/tracks"
       
        const body = {
            name: this.state.nomeDaMusica,
            artist: this.state.nomeDoArtista,
            url: this.state.urlLink
        }
        axios.post(url, body, {
            headers: {
                Authorization: "alessandra-sandeski-silveira"
            }
        })
            .then((res) => {
                alert("Sua música foi adicionada!")
                this.setState({nomeDaMusica: "", nomeDoArtista: "", urlLink: ""})
               
            })
            .catch((err) => {
                console.log(err.response.data)
                alert("Erro! Tente novamente.")
            });    
    }
    render () {
             
        return (
            <div>
            <input
                placeholder="Nome da música"
                value={this.state.nomeDaMusica}
                onChange={this.onChangeNomeDaMusica}
            />
            <input
                placeholder="Artista"
                value={this.state.nomeDoArtista}
                onChange={this.onChangeNomeDoArtista}
            />
            <input
                placeholder="URL da música"
                value={this.state.urlLink}
                onChange={this.onChangeUrlLink}
            />
            <button onClick={(this.adicionandoUmaMusica)}>Adicionar Música</button>

        </div>
        );
    }
}