import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'


const Form = styled.form`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 500px;
`
export default function LoginPage() {
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")

  // const login = () => {
  //   const body = { 
  //     email: email, 
  //     password: password
  //   };
  // }
  const navigate = useNavigate()

  const goBack = () => {
    navigate (-1)
  }
  
  const onChangeEmail = (event) =>{
    setEmail(event.target.value);
  };

  const onChangePassword = (event) =>{
    setPassword(event.target.value);
  };
  const onSubmitLogin = () => {
    navigate ("/AdminHomePage")
    // console.log(email, password);
    const body = {
      email: email,
      password: password
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/alessandra-marmiroli-silveira/login", body)
    .then((response) => {
      console.log('Login feito com Sucesso', response)
    })
    .catch((error) =>{
      console.log('Erro ao tentar fazer o Login', error)
    })
  };

    return (
      <div>
        <h1>Login</h1>
        <form>

          <input placeholder='Email'
          type="email"
          value={email} 
          onChange={onChangeEmail}
          />

          <input placeholder='Senha'
          type="Senha" 
          value={password}
          onChange={onChangePassword}
          />
          <button onClick={goBack}>Voltar</button>
          <button onClick={onSubmitLogin}>Entrar</button>
        </form>
      </div>
    );
  }