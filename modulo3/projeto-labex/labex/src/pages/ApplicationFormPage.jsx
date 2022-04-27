import React from 'react';
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  
`;
const Select = styled.select`
    width: 400px;
    height: 30px;
    border-radius: 10px;
    padding: 20px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10px; 
`
const Input = styled.input`
    width: 352px;
    height: 35px;
    border-radius: 10px;
    margin: 10px;
    padding: 20px;
`

export default function ApplicationFormPage() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate (-1)
  }
    return (
      <Div>
        <h1>Inscreva-se para uma viagem</h1>
        <Form action="">
          <Select>Escolha uma Viagem</Select>
          <Input placeholder='Nome'/>
          <Input placeholder='Idade'/>
          <Input placeholder='Texto de Candidatura'/>
          <Input placeholder='Profissão'/>
          <Select>Escolha um País</Select>
        </Form>
        <button onClick={goBack}>Voltar</button>
        <button onClick={[]}>Enviar</button>
{/* Preciso de ajuda Para fazer a lógica deste botão ENVIAR , criar uma lógica de alert e chamar no botão Enviar*/}
      </Div>
    );
  }