import React, { Component } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
display: flex;
justify-content: center;
justify-items: center;
`
const Form = styled.form`
margin-top: -20px;
display: flex;
justify-content: center;
justify-items: center;
`
const Li = styled.li`
padding: 10px 10px;
`


export default class Etapa3 extends Component {
  render() {
    return (
        <div><H1>ETAPA - 3 INFORMAÇÕES GERAIS DE ENSINO</H1>
        <Form>
            <ol start="6">
              <Li>Por que você não terminou um curso de graduação?</Li>
              <input></input>
              <Li>Você fez algum curso complementar?</Li>
              <input></input>
            </ol>
        
        </Form>
        </div>
    )
  }
}
