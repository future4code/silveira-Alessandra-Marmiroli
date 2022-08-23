import { Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { InputsContainer, ScreenContainer } from "./styled";

export default function EditProfile() {
  const { states, requests } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const { inputForm, OnChangeInput, clear } = useForm({
    // name: states.inputForm.name,
    // email: states.inputForm.email,
    // cpf: states.inputForm.cpf,
  });

  const onSubmitEditProfile = (event) => {
    event.preventDefault();
    // requests.editProfile(inputForm)//Fazer este endpoint no GLOBAL 
    clear();
    //navigate 
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
            value={inputForm.name}
            onChange={OnChangeInput}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Nome e sobrenome"}
          />
          <TextField
            name="email"
            value={inputForm.email}
            onChange={OnChangeInput}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            label={"E-mail"}
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
            label={"CPF"}
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
