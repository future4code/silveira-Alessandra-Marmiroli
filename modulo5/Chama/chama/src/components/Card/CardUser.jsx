import React from "react" 
import { CardUserStyled } from "./styled";

const CardUser = (props) => {//Card do Usuário 
    return (
      <div>
        <CardUserStyled>
          {props.user}
          {props.avatar_url}
          {props.bio}
          {props.email}
          {props.name}
        </CardUserStyled>
      </div>
    );
};

export default CardUser

