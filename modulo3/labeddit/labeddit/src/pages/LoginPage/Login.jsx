import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCadastro, goToFeed } from "../../routes/coordinator";
import { LogoImage, ScreenContainer, Text, Text2 } from "./styled";
import useForm from "../../hooks/useForm";
import LoginForm from "./LoginForm";
import Logo from "../../Assets/fundo2.jpg";
import Logo2 from "../../Assets/fundo4.jpg";

const Login = () => {
  const [form, onChange, clear] = useForm({ name: "", password: "" });

  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <LogoImage src={Logo} />
      <Text2>LabEddit</Text2>
      <Text>O projeto de rede social da Labenu</Text>
      <LoginForm />
      <Button
        type={"submit"}
        variant={"text"}
        onClick={() => goToFeed(navigate)}
      >
        Continuar
      </Button>
      <Button onClick={() => goToCadastro(navigate)}>Crie uma conta!</Button>
      <LogoImage src={Logo2} />
    </ScreenContainer>
  );
};

export default Login;
