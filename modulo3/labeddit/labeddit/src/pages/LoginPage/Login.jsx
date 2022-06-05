import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCadastro, goToFeed } from "../../routes/coordinator";
import { LogoImage, ScreenContainer, Text, Text2 } from "./styled";
import LoginForm from "./LoginForm";
import Logo from "../../Assets/fundo2.jpg";
import Logo2 from "../../Assets/fundo4.jpg";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const Login = ({buttonHeader, setButtonHeader}) => {
  useUnprotectedPage()
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <LogoImage src={Logo} />
      <Text2>LabEddit</Text2>
      <Text>O projeto de rede social da Labenu</Text>
      <LoginForm buttonHeader={buttonHeader} setButtonHeader={setButtonHeader}/>
     
      <Button variant={"contained"} color={"primary"} onClick={() => goToCadastro(navigate)}>Crie uma conta!</Button>
      <LogoImage src={Logo2} />
    </ScreenContainer>
  );
};
export default Login;
