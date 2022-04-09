import React from "react"
import axios from "axios"
import styled from "styled-components"

export default class DetalhePlaylist extends React.Component{
    state = {
        detalheDaPlaylist: [],
        nomeDaMusica: "",
        nomeDoArtista: "",
        url: ""

    }
    componentDidMount () {
        this.detalhesPlaylist();
    }
    onChangeNome = (event) => {
        this.setState({
            nomeDaMusica: event.target.value
        })
    }
    onChangeArtista = (event) => {
        this.setState({
            nomeDoArtista: event.target.value
        })
    }
    onChangeUrl = (event) => {
        this.setState({
            url: event.target.value
        })
    }
    adicioneUmaMusica = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`
        const body = {
            name: this.state.nomeDaMusica,
            artist: this.state.nomeDoArtista,
            url: this.state.url
        }
        axios.post(url, body, {
            headers: {
                Authorization: "alessandra-sandeski-silveira"
            }
        })
            .then((res) => {
                alert("Você acaba de adicionar uma música!")
                this.detalhesPlaylist();
            })
            .catch((err) => {
                alert("Não foi possível adicionar tenten novamente")
            })         
    }


    
    render(){
        return(
            <div>
                <button onClick={this.}>Deletar</button>
            </div>
        )
    }
}