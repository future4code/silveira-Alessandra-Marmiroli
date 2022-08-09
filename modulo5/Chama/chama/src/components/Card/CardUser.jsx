import React from "react";
import { CardUserStyled } from "./styled";

const CardUser = ({ user, avatar_url, bio, email, name, login }) => {
  //Card do Usuário

  return (
    <div>
      <CardUserStyled>
        <p>{user}
        {avatar_url?(
          <img height="180px" src={avatar_url} alt="avatar"></img>
        ):(<></>)}</p>
        <p>Biografia: {bio}</p>
        <p>E-mail: {email}</p>
        <p>Nome: {name}</p>
        <p>Github: {login}</p>
       </CardUserStyled>
    </div>
  );
};

export default CardUser;
