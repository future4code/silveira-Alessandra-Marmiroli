import { TextField, Typography, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import useForm from "../../hooks/useForm";
import { InputsContainer, ScreenContainer } from "./styled";
import axios from "axios";
import { goToRegisterPage } from "../../routes/Coordinator";

const Signup = () => {
  const navigate = useNavigate();

  const [recordPassword, setRecordPassword] = useState("");

  const { inputForm, OnChangeInput, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onChangePassword = (event) => {
    setRecordPassword(event.target.value);
  };

  const signupPassword = async (event) => {
    event.preventDefault();
    if (inputForm.password === recordPassword) {
      await axios
        .post(`${BASE_URL}/signup`, inputForm)
        .then((resp) => {
          localStorage.setItem("token", resp.data.token);
          alert("Usuario criado com sucesso!");
          goToRegisterPage(navigate);
        })
        .catch((erro) => {
          console.log(erro.data);
          alert("Erro ao criar usuário!");
        });
    } else {
      alert("Sua senha esta incorreta!");
    }
  };

  return (
    <ScreenContainer>
      <Typography
        sx={{ color: "black", "margin-top": "15px", fontWeight: "bold" }}
      >
        Cadastrar
      </Typography>
      <InputsContainer>
        <form onSubmit={signupPassword}>
          <TextField
            placeholder="Nome e sobrenome"
            name="name"
            value={inputForm.name}
            onChange={OnChangeInput}
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Nome e sobrenome"}
            required
          />
          <TextField
            placeholder="email@email.com"
            name="email"
            value={inputForm.email}
            onChange={OnChangeInput}
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"E-mail"}
            required
          />
          <TextField
            placeholder="000.000.000-00"
            name="cpf"
            value={inputForm.cpf}
            onChange={OnChangeInput}
            type="number"
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"CPF"}
            inputProps={{
              inputMode: "numeric",
              pattern:
                "[0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2}|[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}",
            }}
            title="Digite o cpf sem . e -"
            required
          />
          <TextField
            placeholder="Senha"
            name="password"
            value={inputForm.password}
            onChange={OnChangeInput}
            type="password"
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Senha"}
            required
            minLength="8"
          />
          <TextField
            placeholder="Confirme a senha"
            name="password"
            value={recordPassword}
            onChange={onChangePassword}
            type="password"
            required
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Confirme sua senha"}
            minLength="8"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color={"primary"}
            sx={{ color: "black", "margin-top": "15px" }}
          >
            Criar
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
};
export default Signup;
//Esse formulário recebe os dados do Usuário através dos campos Input (TextField)
