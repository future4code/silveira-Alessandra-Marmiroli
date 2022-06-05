import React from "react";
import CadastroForm from "./CadastroForm";
import { LogoImage, ScreenContainer, Text } from "./styled";
import Logo from "../../Assets/fundo2.jpg";
import Logo2 from "../../Assets/fundo4.jpg";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const Cadastro = () => {
 
  return (
    <ScreenContainer>
      <LogoImage src={Logo} />
      <Text>Olá, boas vindas ao LabEddit</Text>
      <CadastroForm />
      <LogoImage src={Logo2} />
    </ScreenContainer>
  );
};

export default Cadastro;
