import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import TelaHome from "./components/TelaHome";
import TelaMatches from "./components/TelaMatches";

const AppContainer = styled.div`
   box-sizing: border-box;
`;
const Button = styled.button`
    position: fixed;
    bottom: 5px;
    right: 5px;
 
`
export default function App() {
  const [tela, setTela] = useState("TelaHome");

  const mudarTela = () => {
    switch (tela) {
      case "TelaHome":
        return (
          <TelaHome proximaPagina={proximaPagina} paginaAnterior={paginaAnterior} resetar={zerarApp}/>
        );
      case "TelaMatches":
        return <TelaMatches paginaAnterior={paginaAnterior} proximaPagina={proximaPagina}/>
      default:
        return <TelaHome></TelaHome>;
    }
  };
  const proximaPagina = () => {
    setTela("TelaMatches");
  };

  const paginaAnterior = () => {
    setTela("TelaHome");
  };

  const zerarApp = async () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alessandra-marmiroli-silveira/clear";

    try {
      const res = await axios.put(url, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res);
      alert("Sua lista foi inicializada! Faça novamente");
    } catch (err) {
      console.log(err);
      alert("Erro! Desculpe, tente novamente.");
    }
  };

  return (
      <AppContainer>
        {mudarTela()}
        <Button onClick={() => { zerarApp()}}>Limpar Matches</Button>
      </AppContainer>
  );
}
