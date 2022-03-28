import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
`

const H1 = styled.h1`
display: flex;
justify-content: center;
justify-items: center;
`
const Form = styled.form`
display: flex;
justify-content: center;
justify-items: center;
`
const Li = styled.li`
padding: 10px 10px;
`
const Input = styled.input`

`


export default class Etapa1 extends Component {
  render() {
    return (
        <div>
            <H1>ETAPA 1 - DADOS GERAIS</H1>
       <Form>
            <ol>
              <Li>Qual o seu nome?</Li>
              <Input></Input>
              <Li>Qual sua idade?</Li>
              <Input></Input>
              <Li>Qual seu e-mail?</Li>
              <Input></Input>
              <Li>Qual a sua escolaridade?</Li>
              <select>
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
              </select>
              </ol>
          </Form>
      </div>
    )
  }
}
