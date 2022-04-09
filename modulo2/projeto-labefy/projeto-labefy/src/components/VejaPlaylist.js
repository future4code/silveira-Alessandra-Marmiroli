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

    deletaItemDaPlaylist = (id) => {

        if (window.confirm(`Tem certeza que deseja deletar?`)){
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
            axios.delete(url,{
                headers:{
                    Authorization: "alessandra-sandeski-silveira"
                }
            })
            .then((res) =>{
                alert("Usuário(a) deletado(a) com sucesso!")
            }) 
            .catch((err)=>{
                alert("Erro! Tente novamente")
            })
        }else{
            alert(`Usuário não deletado`)
        }


    }        

    
    render(){
        const listaDePlaylist = this.state.playlist.map((playlist)=>{
           return<li>{playlist.name}</li>
         
        })

        return(
            <div>
              <ul>{listaDePlaylist}</ul>
            </div>
            
        )
    }
    
   
}
    