import { TextField, Typography, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { InputsContainer, ScreenContainer } from "./styled";
import axios from "axios";
import { goToListRestaurant, goToRegisterPage } from "../../routes/Coordinator";
import { base_url } from "../../constants/url";

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
        .post(`${base_url}`, inputForm)
         .then((res) => {
          localStorage.setItem("token", res.data.token);
          console.log(res.data.token)
          alert("Usuario criado com sucesso!");
          // goToListRestaurant(navigate);Não será aqui na cadastro de endereço 
        })
        .catch((erro) => {
          console.log(erro.data);
          alert("Erro ao criar usuário!");
        });
    } else {
      alert("Sua senha esta incorreta!");
    }
  };
  console.log(signupPassword)
  return (
    <ScreenContainer>
      <Typography
        sx={{ color: "black", fontWeight: "bold" }}
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
            minLength="6"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color={"primary"}
            sx={{ color: "black", marginTop: "15px" }}
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
