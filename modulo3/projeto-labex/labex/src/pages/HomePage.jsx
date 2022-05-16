import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import { useNavigate } from 'react-router-dom';


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`
const H1 = styled.h1`
    display: block;
    font-size: 6em;
    color: #fa007d;
    margin-left: 80px;
    text-shadow: #0602fc 0.1em 0.1em 0.3em;
    padding: 50px;
`
const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
align-items: center;
margin: 5px;
margin-bottom: 15px;
background-color: whitesmoke;
box-shadow: 5px 5px 5px 5px purple;
color: purple;
font-weight:bold;
font-size: 20px;
border: 1px ridge black;
padding: 0px 8px;
margin-top: 60px;
border-radius: 15px;
padding: 10px 40px;
margin-left: 45%;`

const Div = styled.div`
    background-image: url("https://c.pxhere.com/photos/4b/ca/fantasy_mac_irxsiempre-741629.jpg!d");
    width: 100%;
    height: 100vh;
`;

export default function HomePage() {
  const navigate = useNavigate()

  const goToListTripsPage = () =>{
    navigate ("/ListTripsPage")
  }

  const goToLoginPage = () =>{
    navigate ("/LoginPage")
  }

    return (
      <Div>
          <GlobalStyle />
          <H1>LabeX</H1>
        <Button onClick={goToListTripsPage}>Ver Viagens</Button>
        <Button onClick={goToLoginPage}>Área de Admin</Button>
      </Div>
    );
  }
