import { TextField, Typography, Button } from "@mui/material";
import React from "react";
import { InputsContainer, ScreenContainer } from "./styled";

const Signup = () => {
  return (
    <ScreenContainer>
      <Typography sx={{color:'black', 'margin-top': '15px', fontWeight:'bold'}}>Cadastrar</Typography>
      <InputsContainer>
        <form>
          <TextField
            placeholder="Nome e sobrenome"
            name="name"
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
            type="number"
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"CPF"}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2}|[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}' }}
            title='Digite o cpf sem . e -'
            required
          />
          <TextField
            placeholder="Senha"
            name="password"
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
            type="password"
            required
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Confirme sua senha"}
            minLength="8"
            />
            <Button type="submit" variant='contained' fullWidth color={"primary"} sx={{color:'black', 'margin-top': '15px'}}>
            Criar
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
};
export default Signup;
//Esse formulário recebe os dados do Usuário através dos campos Input (TextField) 
