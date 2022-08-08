import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_url } from "../../constants/url/url";
import { voltar } from "../../routes/Coordinator";
import { ContainerHeader, ContainerHistorico, DivButton, DivGeral, H1, Header } from "./styled";

const ChamaDetail = () => {
  const [historico, setHistorico] = useState([]);
  
  const navigate = useNavigate()


  return (
    <DivGeral>

      <ContainerHeader>
        <Header>Chama</Header>
      </ContainerHeader>

      <ContainerHistorico>
      <H1>Lista de Histórico</H1>
      {/* {chamar o card} */}
      </ContainerHistorico>

      <DivButton>
      <Button onClick={()=> voltar(navigate)} color="primary" variant="contained">Voltar à página inicial</Button>
      </DivButton>

    </DivGeral>
  );
};
export default ChamaDetail;
