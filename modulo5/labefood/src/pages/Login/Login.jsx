import React from "react";
import { Typography, Button, IconButton, TextField} from "@mui/material";
import { InputsContainer, ScreenContainer} from "../Signup/styled";
import { useNavigate } from "react-router-dom";
import { goToRestaurant, goToSignup } from "../../routes/Coordinator";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";
import { ButtonAddress, DivPassword, Form, InputMaterial, LogoImage, P } from "./styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  let navigate = useNavigate();

  const [passwordLogin, setPasswordLogin] = useState("password");
  const [showPassword, setShowPassword] = useState(true)//mudei aqui

  const { inputForm, OnChangeInput, clear, setInputForm } = useForm({
    email: "",
    password: "",
  });
  // Informo as variáveis do useForm e informo os campos à serem preenchido na page Login.

  const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
  }

  const formLogin = (event) => {
    event.preventDefault(); //preventDefault previne que a informação no ato da digitação seja enviada(ou seja ele vai aguardar você digitar toda a informação para depois enviar)
    const bodyForm = inputForm;
    
    //Essa requisição esta relacionada ao token
    axios
      .post(`${BASE_URL}/login`, bodyForm)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        if (res.data.user.hasAddress === false) {
          alert(
            `Bem vindo. ${res.data.user.name}`
          );
          goToSignup(navigate); //Aqui inserir a função que levará para page Adress
        } else {
          alert("Bem vindo!");
          goToRestaurant(navigate); //Aqui inserir a função caso o usuário tenha endereço cadastrado page Restaurant
        }
        clear();
        setInputForm(res.data.token);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const password = () => {
    if (passwordLogin === "password") {
      setPasswordLogin("text");
    } else {
      setPasswordLogin("password");
    }
  };

  return (
    <ScreenContainer>
      <LogoImage
        src={
          "https://raw.githubusercontent.com/future4code/Silveira-labe-food1/master/src/assets/Logo.png"
        }
      />
      <Typography sx={{ color: "black", fontWeight: "bold" }}>
        Entrar
      </Typography>

      <InputsContainer>
        <form onSubmit={formLogin}>
          <TextField
            name={"email"}
            value={inputForm.email}
            onChange={OnChangeInput}
            placeholder="email@email.com"
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"E-mail"}
            type={'email'}
            required
          />

          <DivPassword>
          <InputMaterial
            name={"password"}
            value={inputForm.password}
            onChange={OnChangeInput}
            placeholder={'Mínimo de 6 caracteres'}//informações adicionais
            type={showPassword ? 'password' : 'text'}//informações adicionais
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Senha"}
            required
            minLength="6"
            float="rigth"
           />
          <IconButton
          aria-label="toogle password visibility"
          onClick={handleClickShowPassword}
          edge="end"
          // sx={{ position:"absolute", top:"0", right:"0",
          //   zindex:"10",
          //   border:"none",
          //   background:"transparent",
          //   outline:"none", background:"transparent", outline:"none" }}
          
          >
            {showPassword ? <VisibilityOff/> : <Visibility/>}
          </IconButton>
          </DivPassword>

          <Button
            variant="contained"
            type="submit"
            sx={{ color: "black" }}
            fullWidth
          >
            Entrar
          </Button>
        </form>

        <ButtonAddress
          fullWidth
          onClick={() => goToSignup(navigate)}
          sx={{ color: "black", "margin-top": "15px" }}
        >
          <P>
            <strong>Não possui cadastro? Clique aqui.</strong>
          </P>
        </ButtonAddress>
      </InputsContainer>
    </ScreenContainer>
  );
};
export default Login;
