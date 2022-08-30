import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerHeader, Img, Title } from "./styled";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const logOut = () => {
    //Função de logout que limpa o token e direciona para pagina de login
    window.localStorage.clear("token");
    navigate("/");
  };

  return (
    <ContainerHeader>
        <Title>{title}</Title>
        <Img
          width="20px"
          margin="60px"
          src="https://raw.githubusercontent.com/future4code/Silveira-labe-food1/master/src/assets/iconelogout.png"
          onClick={logOut}
        />
    </ContainerHeader>
  );
};

export default Header;
