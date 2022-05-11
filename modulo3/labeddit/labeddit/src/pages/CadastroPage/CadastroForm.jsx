import { TextField } from "@material-ui/core";
import { ButtonContainer, InputsContainer } from "./styled";
import useForm from "../../hooks/useForm";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/users";

const CadastroForm = () => {
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate)

  };
  const navigate = useNavigate();
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"username"}
          value={form.name}
          onChange={onChange}
          label={"Nome do Usuário"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          autoFocus
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
        <ButtonContainer
          type="submit"
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Cadastrar
        </ButtonContainer>
      </form>
    </InputsContainer>
  );
};
export default CadastroForm;
