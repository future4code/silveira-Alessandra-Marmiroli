import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Logo from "../img/astromatch.png";

const logo2 = "https://get.pxhere.com/photo/network-people-business-icon-social-friend-technology-concept-management-net-leader-corporation-marketing-community-society-team-connection-organization-communication-networking-crowd-company-connect-line-art-line-circle-clip-art-symbol-graphics-1625055.jpg"; 

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 66px;
  box-shadow: 2px 2px 1px 1px darkgray;
  padding: 0px 5px;
  img {
    height: 90%;
    border: 40px;
    box-shadow: 2px 2px 2px 2px darkgray;
  }
`;
const Container = styled.div`
  border: 2px ridge black;
  width: 403px;
  height: 635px;
  border-radius: 7px;
  box-shadow: 2px 2px 6px silver;
  background-color: ghostwhite;
  margin-bottom: 40px;
  margin-top: 10px;
`;
const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: silver;
`;

const BoxTexto = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 10px;
font-size: 23px;
`
const BoxBio = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5px;
border-top: 2px solid #000;
`
const ImagemMatch = styled.img`
height: 400px;
width: 380px;
margin-top: 10px;
margin-left: 8px;
box-shadow: 2px 2px 1px 3px darkgray;
transition: transform .5s ease;
   :hover {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);}
`

const url =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alessandra-marmiroli-silveira/person"; /**Perfil */
const url2 =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alessandra-marmiroli-silveira/choose-person"; /**Pessoa Escolhida */

export default function TelaHome(props) {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
      getEscolhaUmPerfil()
  }, [])

  const getEscolhaUmPerfil = () => {
      axios
          .get(url)
          .then((res) => {
              setPerfil(res.data.profile)
          })
          .catch((err) => {
              alert("Erro!")
          })
  }

  const escolhePerfil = (boolean) => {
      const headers = {
          "Content-Type": "application/json"
      }
      const body =
      {
          "id": perfil.id,
          "choice": boolean
      }
      axios
          .post(url2, body, headers)
          .then((res) => {
             getEscolhaUmPerfil()
          })
          .catch((err) => {
              alert("Puxa! Erro...")
          })

  }

  return (
    <BoxContainer>
      <Container>
        <Div>
          <img src={Logo} alt="Logo Astromatch" />
          <img src={logo2} onClick={props.TelaHome} />
        </Div>
        <div>
          <ImagemMatch src={perfil.photo} alt={perfil.name} />
          <BoxTexto>
            <p>{perfil.name}</p>
            <p>{perfil.age}</p>
          </BoxTexto>
          <BoxBio>
            <p>{perfil.bio}</p>
          </BoxBio>
        </div>
        <button onClick={props.resetar}>Limpar Matches</button>
      </Container>
    </BoxContainer>
  );
}
