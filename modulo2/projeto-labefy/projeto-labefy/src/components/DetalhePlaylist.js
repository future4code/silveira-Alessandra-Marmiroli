import React from "react"
import axios from "axios"
import styled from "styled-components"

export default class DetalhePlaylist extends React.Component{
    state = {
        detalheDaPlaylist:[],
        deyalhesDaUrl: ""
    }
    componentDidMount(){
        this.getDetalhesDaPlaylist()
    }
        
    getDetalhesDaPlaylist = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`)
        .then((res) => this.setState({detalheDaPlaylist: ResizeObserver.data.results}))
        .catch((err) => console.log(err.response))
    }
     
    render() {
        const detalhesDaPlay = this.state.detalheDaPlaylist.map((playlist) => {
            return (
            <input key={playlist.url}
            onClick={()=>this.props.DetalhePlaylist(playlist.url)}>
            {playlist.name}</input>
            )
        })
        return (
            <div>{this.props.url}</div>
        )

    }
}
