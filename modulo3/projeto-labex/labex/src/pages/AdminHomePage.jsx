import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-bottom: 15px;
  height: 30px;
  padding: 0px 20px;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 16px;
  background-color: purple;
  min-width: 100px;
`;
const H1 = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  text-align: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
`;

const Body = styled.body`
    margin: 30px 0px;
    padding: 0px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`
export default function AdminHomePage() {
  return (
    <Body>
      <Div>
        <H1>Painel Administrativo</H1>
        <Button>Voltar</Button>
        <Button>Criar Viagem</Button>
        <Button>Logout</Button>
      </Div>
    </Body>
  );
}
