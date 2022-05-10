import { TextField } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import {InputsContainer } from "./styled";


const LoginForm = () => {
  const [form, onChange, clear] = useForm({ name: "", password: "" });

  const onSubmitForm = (event) => {
    console.log(form)
    event.preventDefault();
  };

  const navigate = useNavigate();
  return (
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
    </InputsContainer>
  );
};

export default LoginForm;
