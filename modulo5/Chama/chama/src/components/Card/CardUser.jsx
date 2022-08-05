import React from "react";
import { CardUserStyled } from "./styled";

const CardUser = ({ user, avatar_url, bio, email, name, login }) => {
  //Card do Usuário

  return (
    <div>
      <CardUserStyled>
        {user}
        {avatar_url?(
          <img height="180px" src={avatar_url} alt="avatar"></img>
        ):(<></>)}
        {bio}
        {email}
        {name}
        {login}
      </CardUserStyled>
    </div>
  );
};

export default CardUser;
