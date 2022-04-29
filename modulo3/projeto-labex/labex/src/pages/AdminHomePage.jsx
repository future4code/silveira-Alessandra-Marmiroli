import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "./hooks/useProtectedPage";
import  { useNavigate } from "react-router-dom";

const Button = styled.button`
  margin-bottom: 15px;
  height: 30px;
  padding: 0px 20px;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 16px;
  background-color: purple;
  min-width: 100px;
`;
const H1 = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  text-align: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
`;

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
`;
export default function AdminHomePage() {
 const [tripsPage, setTripsPage] = useState([]);

  useProtectedPage();
  const navigate = useNavigate();

 

  const Trips = () => {
    const token = localStorage.getItem("token");
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/alessandra-marmiroli-silveira/trips",
        {
          headers: { auth: token },
        }
      )
      .then((response) => {
        console.log(response.data.trips);
        setTripsPage(response.data.trips);
      })
      .catch((error) => {
        alert("Erro!", error.response);
      });
    }
      useEffect(() => {
        Trips()
      }, [navigate]);

  const deletarTrip = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alessandra-marmiroli-silveira/trips/${id}`,
        { headers: { auth: token } }
      )
      .then((response) => {
        console.log("Deletado", response.data);
        setTripsPage(response.data.trips);
      })
      .catch((error) => {
        console.log(
          "Não foi possível deletar, tente outra vez!",
          error.response
        );
      });
  };

  const goBack = () => {
    navigate(-1);
  };
  const goToLoginPage = () => {
    navigate("/LoginPage");
  };
  const goToCreateTripPage = () => {
    navigate("/CreateTripPage");
  };

  const goToTripDetailsPage = (id) => {
    navigate(`/AdminiHomePage/$(id}`);
  };

  const tripsList =
    tripsPage &&
    tripsPage.map((trip) => {
      return (
        <div
          Key={trip.id}
          onClick={() => {
            goToTripDetailsPage(trip.id);
          }}
        >
          <p>{trip.name}</p>
          <button
            onClick={() => {
              deletarTrip(trip.id);
            }}
          >
            Excluir
          </button>
        </div>
      );
    });

    const logout = () =>{
      localStorage.clear()
      goToLoginPage()

    }

  return (
    <Div>
      <H1>Painel Administrativo</H1>

      <div>{tripsList}</div>
      
        <Button onClick={goBack}>Voltar</Button>
        <Button onClick={goToCreateTripPage}>Criar Viagem</Button>
        <Button onClick={logout}>Logout</Button>
      
    </Div>
  );
}
