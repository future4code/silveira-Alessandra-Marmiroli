import React from "react"
import axios from "axios"
import styled from "styled-components"


export default class VejaPlaylist extends React.Component {
    state = {
        playlist: []
    };

    componentDidMount(){
        this.verPlaylist();
    }
    
    verPlaylist = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
   
    axios.get (url, {
      headers: {
        Authorization: "alessandra-sandeski-silveira"
    }})
    .then((res) => {
        console.log(res.data.result.list)
        this.state.verPlaylist
    })
    .catch((err)=> console.log(err.response))
    }        
    render(){
        const listaDePlaylist = this.state.playlist.map((playlist)=>{
           return<li>{playlist}</li>;
        })
        return(
            <ul>{listaDePlaylist}</ul>
        )
    }
        
   
}
    