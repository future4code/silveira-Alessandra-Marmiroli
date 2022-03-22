import React from 'react';
import './CardPequeno.css'
import styled from "styled-components"

const Foto = styled.img`
width: 60px;
    margin-right: 10px;
    border-radius: 50%;
`

function CardPequeno(props) {
    return (
        <div className="pequenocard-container">
            <Foto src={ props.imagem } />
            <div>
                <h2>{props.info}</h2>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;