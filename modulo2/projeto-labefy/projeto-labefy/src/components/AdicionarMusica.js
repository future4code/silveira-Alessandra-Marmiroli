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
        adicionarMusicaPlaylist: [],
        nomeDaMusica: "",
        nomeDoArtista: "",
        urlLink: ""
        
    }
    
  componentDidMount() {
    this.adicionandoUmaMusica();
  }

    adicionandoUmaMusica = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`
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
                this.setState({adicionarMusicaPlaylist: res.data.result.playlistId})
            })
            .catch((err) => {
                alert("Erro! Tente novamente.")
            });
             
    }


    render () {
             
       
        return (
            <div>

            <input
                placeholder="Nome da música"
                value={this.state.nomeDaMusica}
                onChange={this.onChangeNome}
            />

            <input
                placeholder="Artista"
                value={this.state.nomeDoArtista}
                onChange={this.onChangeArtista}
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