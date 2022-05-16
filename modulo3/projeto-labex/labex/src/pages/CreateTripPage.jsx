import React from "react";
import styled from "styled-components";
import { useProtectedPage } from "./hooks/useProtectedPage";
import { useEffect, useState } from "react";
import axios from 'axios'; 
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
`;
const Input = styled.input`
  width: 352px;
  height: 35px;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
`;
const Button = styled.button`
  margin-bottom: 15px;
  height: 40px;
  padding: 0px 20px;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 16px;
  background-color: purple;
  min-width: 100px;
`;
const Btn = styled.div`
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin: 20px 0px 0px;
`;

export default function CreateTripPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Div>
      <h1>Criar Viagem</h1>
      <Input placeholder="Nome" />
      <Select>Escolha um planeta</Select>
      <Input placeholder="Data" type="date" name="date" />
      <Input placeholder="Descrição" requiredmin="2022-04-27" />
      <Input placeholder="Duração em dias" />
      <Btn>
        <Button onClick={goBack}>Voltar</Button>
        <Button>Criar</Button>
      </Btn>
      {/* Preciso de ajuda Para fazer a lógica deste botão Criar , criar uma lógica */}
    </Div>
  );
}
