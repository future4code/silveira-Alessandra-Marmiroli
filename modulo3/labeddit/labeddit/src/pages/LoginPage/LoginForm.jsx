import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "../../services/users";
import { InputsContainer } from "./styled";

const LoginForm = ({ buttonHeader, setButtonHeader }) => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    login(form, clear, navigate, setButtonHeader);
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
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
        <Button type="submit" variant={"contained"} align={"center"}>
          Continuar
        </Button>
      </form>
    </InputsContainer>
  );
};

export default LoginForm;
