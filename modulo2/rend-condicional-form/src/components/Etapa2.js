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


export default class Etapa2 extends Component {
  render() {
    return (
      <div><H1>ETAPA - 2 INFORMAÇÕES DO ENSINO SUPERIOR</H1>
      <Form>
          <ol start="5">
            <Li>Qual curso?</Li>
            <input></input>
            <Li>Qual unidade de ensino?</Li>
            <input></input>
          </ol>
      </Form>
    </div>
    )
  }
}

