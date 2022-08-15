import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import { InputsContainer, ScreenContainer } from "../Signup/styled";
import { useNavigate } from "react-router-dom";
import {
  goToAdress,
  goToRestaurant,
  goToSignup,
} from "../../routes/Coordinator";
import useForm from "../../hooks/useForm";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";

const Login = () => {
  let navigate = useNavigate();

  const [passwordLogin, setPasswordLogin] = useState("password");

  const { inputForm, OnChangeInput, clear, setInputForm } = useForm({
    email: "",
    password: "",
  });
  // Informo as variáveis do useForm e informo os campos à serem preenchido na page Login.
  const formLogin = async (event) => {
    event.preventDefault(); //preventDefault previne que a informação no ato da digitação seja enviada(ou seja ele vai aguardar você digitar toda a informação para depois enviar)
    const bodyForm = inputForm;

    //Essa requisição esta relacionada ao token
    await axios
      .post(`${BASE_URL}/login`, bodyForm)
      .then((res) => {
        console.log(res);
        localStorage.setItem("TOKEN", res.data.token);
        if (res.data.user.hasAddress === false) {
          alert(
            `${res.data.user.name}, you do not have an account. We will redirect you...`
          );
          goToSignup(navigate); //Aqui inserir a função que levará para page Adress
        } else {
          alert("Welcome!");
          goToRestaurant(navigate); //Aqui inserir a função caso o usuário tenha endereço cadastrado page Restaurant
        }
        clear();
        console.log(localStorage);
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
      <Typography sx={{ color: "black", marginTop: 10, fontWeight: "bold" }}>
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
            required
          />
          <TextField
            name={"password"}
            value={inputForm.password}
            onChange={OnChangeInput}
            placeholder="Senha"
            type="password"
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Senha"}
            required
            minLength="6"
            // VisibilityIcon={password}
            // VisibilityOffIcon={password}
          />
          {passwordLogin === "password" ? (
            <VisibilityOffIcon className="eye" onClick={password} />
          ) : (
            <VisibilityIcon className="eye" onClick={password} />
          )}
          <Button
            variant="contained"
            type="submit"
            sx={{ color: "black" }}
            fullWidth
          >
            Entrar
          </Button>
        </form>

        <Button
          fullWidth
          onClick={() => goToSignup(navigate)}
          sx={{ color: "black", "margin-top": "15px" }}
        >
          <strong>Não possui cadastro? Clique aqui.</strong>
        </Button>
      </InputsContainer>
    </ScreenContainer>
  );
};
export default Login;

//
