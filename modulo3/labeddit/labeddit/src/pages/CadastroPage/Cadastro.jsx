import { Button, TextField } from "@material-ui/core";
import React from "react";
import { ButtonContainer, InputsContainer, ScreenContainer } from "./styled";
import useForm from "../../hooks/useForm";

const Cadastro = () => {
  const [form, onChange, clear] = useForm({ name:"", email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <ScreenContainer>
      <h1>Olá, boas vindas ao LabEddit</h1>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
        <TextField
            name={"Nome do Usuário"}
            value={form.name}
            onChange={onChange}
            label={"Nome do Usuário"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"name"}
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
        </form>
        <ButtonContainer
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Fazer Login
        </ButtonContainer>
      </InputsContainer>
      <Button>Cadastrar</Button>
    </ScreenContainer>
  );
};

export default Cadastro;
