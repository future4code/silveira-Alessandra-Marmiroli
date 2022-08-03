import React from "react";
import { ContainerInfoUser, ContainerMapInfo, DivGeral, H1 } from "./styled";

const chama = () => {
  return (
    <DivGeral>

    <ContainerInfoUser>
      <H1>Projeto Chama</H1>
      <input placeholder="Nome do usuário usado no GitHub"/>
      <button>Enviar</button>
    </ContainerInfoUser>

    <ContainerMapInfo>
        <p>Aqui vem as informações do usuário</p>
        {}
    </ContainerMapInfo>
    
      <button>página de detalhes</button>
    </DivGeral>
  );
};
export default chama;
