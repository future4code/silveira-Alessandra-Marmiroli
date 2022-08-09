import React from "react";
import { CardHistoricoStyled } from "./styled";

const CardHistorico = (props) => {
  //Card Historico

  return (
    <div>
      <CardHistoricoStyled>
        <button onClick={() => props.pesquisaDnv(props.name)}>
           <p>{props.historico}</p>Clique aqui para ver este perfil novamente
        </button>
      </CardHistoricoStyled>
    </div>
  );
};

export default CardHistorico;
