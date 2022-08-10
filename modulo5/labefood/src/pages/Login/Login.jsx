import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import { InputsContainer, ScreenContainer } from "../Signup/styled";
import { useNavigate } from "react-router-dom";
import { goToSignup } from "../../routes/Coordinator";
import useForm from "../../hooks/useForm";


const Login = () => {
    let navigate = useNavigate(); 

    const { inputForm, OnChangeInput, clear} = useForm({
        email: "",
        password: "",
       
    })
    // Informo as variáveis do useForm e informo os campos à serem preenchido na page Login. 

    const formLogin = (event)=> {
        event.preventDefault();//preventDefault previne que a informação no ato da digitação seja enviada(ou seja ele vai aguardar você digitar toda a informação para depois enviar)
        const bodyForm =  inputForm
        
        //REQUISIÇÃO 

    }
    

    



  return (
    <ScreenContainer>

      <Typography
        sx={{ color: "black", marginTop: 25, fontWeight: "bold" }}
      >
        Entrar
      </Typography>

      <InputsContainer>

        <form>
          <TextField
            name={"email"}
            value={inputForm.email}
            placeholder="email@email.com"
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"E-mail"}
            required
          />
          <TextField
            name={"password"}
            value={inputForm.password}
            placeholder="Senha"
            type="password"
            variant={"outlined"}
            // color={"primary"}
            fullWidth
            margin={"normal"}
            label={"Senha"}
            required
            minLength="8"
          />
          <Button variant='contained' type="submit" sx={{color: 'black'}} fullWidth>Entrar</Button>
        </form>

        <Button fullWidth onClick={() => goToSignup(navigate)} sx={{color:'black', 'margin-top': '15px'}}><strong>Não possui cadastro? Clique aqui.</strong></Button>

      </InputsContainer>

    </ScreenContainer>
  );
};
export default Login;

//
