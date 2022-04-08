import React from "react"
import axios from "axios"
import styled from "styled-components"


export default class VejaPlaylist extends React.Component {
    state = {
        playlist: [],
               
    };

    componentDidMount(){
        this.verPlaylist();
    }
    
    verPlaylist = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
   
    axios.get (url, {
      headers: {
        Authorization: "alessandra-sandeski-silveira"
    }})
    .then((res) => {
        this.setState({playlist: res.data.result.list})
    })
    .catch((err)=> console.log(err.response.data))
    }        
    render(){
        const listaDePlaylist = this.state.playlist.map((playlist)=>{
           return<li>{playlist.name}</li>;
        })
        return(
            <div>
              <ul>{listaDePlaylist}</ul>
            </div>
            
        )
    }
        
   
}
    