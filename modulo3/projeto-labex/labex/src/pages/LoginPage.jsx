import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

const Div = styled.div`
  display: block;
`
const H1 = styled.h1`
  text-align: center;
`
const Body = styled.body`
  margin: 30px 0px;
    padding: 0px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 500px;
`
const Input = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0px 0px 15px;
`
const Button = styled.button`
  margin-bottom: 15px;
  height: 40px;
  padding: 0px 20px;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 16px;
  background-color: purple;
  min-width: 100px;
`;
const Btn = styled.div`
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin: 20px 0px 0px;
`;


export default function LoginPage() {
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")

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
  const onSubmitLogin = (event) => {
    event.preventDefault()
  
   
    const body = {
      email: email,
      password: password
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/alessandra-marmiroli-silveira/login", body)
    .then((response) => {
      console.log('Login feito com Sucesso', response.data.token);
      localStorage.setItem('token', response.data.token)
      navigate ("/AdminHomePage")
      // navigate.push('/TripDetailsPage')
    })
    .catch((error) =>{
      console.log('Erro ao tentar fazer o Login', error)
    })
  };

    return (
      <Body>
        <Div>
          <H1>Login</H1>
          <Form onSubmit={onSubmitLogin}>
            <Input placeholder='Email'
            type="email"
            value={email}
            onChange={onChangeEmail}
            />
            <Input placeholder='Senha'
            type="Senha"
            value={password}
            onChange={onChangePassword}
            />
            <Btn>
              <Button onClick={goBack}>Voltar</Button>
              <Button >Entrar</Button>
            </Btn>
          </Form>
        </Div>
      </Body>
    );
  }