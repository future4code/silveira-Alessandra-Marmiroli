import React from "react";
// import { CardUserStyled } from "./styled";

const CardHistorico = (props) => {
  //Card Historico

  return (
    <div>
      <CardHistoricoStyled>
        <ol>
          <li>{props.historico}</li>
          <button>Clique aqui para ver este perfil novamente</button>
        </ol>
      </CardHistoricoStyled>
    </div>
  );
};

export default CardHistorico;
