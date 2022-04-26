import React from 'react';
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';

export default function ApplicationFormPage() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate (-1)
  }
    return (
      <div>
        <h1>Inscreva-se para uma viagem</h1>
        <form action="">
          <select>Escolha uma Viagem</select>
          <input placeholder='Nome'/>
          <input placeholder='Idade'/>
          <input placeholder='Texto de Candidatura'/>
          <input placeholder='Profissão'/>
          <select>Escolha um País</select>
        </form>
        <button onClick={goBack}>Voltar</button>
        <button onClick={[]}>Enviar</button>

      </div>
    );
  }