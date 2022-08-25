import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { goToProfile } from "../../routes/Coordinator";
import { InputsContainer, ScreenContainer } from "./styled";

export default function EditProfile() {
  const { states, setters,  requests } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  useEffect(()=>{
    requests.getProfile()
    requests.upDateProfile()
  },[])
 
  // console.log(states.profile)
 const { inputForm, OnChangeInput, clear } = useForm({
    name: states.profile.user && states.profile.user.name,
    email: states.profile.user && states.profile.user.email,
    cpf: states.profile.user && states.profile.user.cpf,
  });

 const onSubmitEditProfile = (event) => {
    event.preventDefault();
    requests.upDateProfile();//aqui chamo o endpoint de atualizar os dados do cadastro!
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
            value={states.profile.user && states.profile.user.name}//retornando na tela dados para edição. 
            onChange={""}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
           />
          <TextField
            name="email"
            value={states.profile.user && states.profile.user.email}
            onChange={""}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            />
          <TextField
            name="cpf"
            value={states.profile.user && states.profile.user.cpf}
            onChange={""}
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
          <Button type="submit" variant="contained" fullWidth color={"primary"}>
            Salvar
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
}
