import React from "react"
import axios from "axios"
import styled from "styled-components"

export default class DetalhePlaylist extends React.Component{
    state = {
        detalheDaPlaylist: [],
        nomeDaMusica: "",
        nomeDoArtista: "",
        urlLink: ""

    }
    componentDidMount () {
    this.detalhesDaPlaylist();
    }
    onChangeNome = (event) => {
        this.setState({nomeDaMusica: event.target.value})
    }

    onChangeArtista = (event) => {
        this.setState({nomeDoArtista: event.target.value})
    }

    onChangeUrl = (event) => {
        this.setState({url: event.target.value})
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
                this.detalhesPlaylist();
            })
            .catch((err) => {
                alert("Erro! Tente novamente.")
            })         
    }
    render(){
        return(
            <div></div>
        )
    }
}
