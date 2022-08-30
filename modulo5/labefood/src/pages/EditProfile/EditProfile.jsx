import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { goToProfile } from "../../routes/Coordinator";
import { InputsContainer, ScreenContainer } from "./styled";
import axios from 'axios'
import { BASE_URL } from "../../constants/url";


export default function EditProfile() {
  const { requests } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  
  const token = window.localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  const { inputForm, OnChangeInput, clear, setInputForm } = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const getProfile = () => {
    axios
      .get(`${BASE_URL}/profile`, headers)
      .then((res) => {
        setInputForm({ 
          name: res.data.user.name, 
          email: res.data.user.email, 
          cpf: res.data.user.cpf });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  //ENVIAR UMA MENSAGEM DE USUÁRIO ATUALIZADO COM SUCESSO FALTA ISSO ANTES DE IR PARA A PRÓXIMA PAGE!

  useEffect(() => {
    getProfile();
  }, []);

  const onSubmitEditProfile = (event) => {
    event.preventDefault();
    requests.upDateProfile(inputForm); //aqui chamo o endpoint de atualizar os dados do cadastro!
    clear();
    goToProfile()
  };

  return (
    <ScreenContainer>
      <Typography variant="h6" sx={{ color: "black" }}>
        Editar Perfil
      </Typography>
      <InputsContainer>
        <form onSubmit={onSubmitEditProfile}>
          <TextField
            name="name"
            value={inputForm.name} //retornando na tela dados para edição.
            onChange={OnChangeInput}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
          />
          <TextField
            name="email"
            value={inputForm.email}
            onChange={OnChangeInput}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
          />
          <TextField
            name="cpf"
            value={inputForm.cpf}
            onChange={OnChangeInput}
            type="text"
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            pattern={
              "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"
            }
            minLength="11"
          />
          <Button  type="submit" variant="contained" fullWidth color={"primary"}>
            Salvar
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
}
