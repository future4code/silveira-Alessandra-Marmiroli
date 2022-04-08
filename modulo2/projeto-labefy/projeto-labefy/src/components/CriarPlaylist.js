import React from "react"
import axios from "axios"
import styled from "styled-components"

export default class CriarPlaylist extends React.Component {
    render(){
        return(
            <div> <p>Projeto Labefy</p>
            <input value={this.props.valueInput} onChange={this.props.onChangeCriarPlaylist} placeholder={"Nome da sua Playlist"}/>
            <button onClick={this.props.onClickCriarUsuario}>Criar</button></div>
        )
    }

}