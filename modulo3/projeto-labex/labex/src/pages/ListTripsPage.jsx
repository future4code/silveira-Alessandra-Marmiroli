import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
const Div = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 500px;
`
const Btn = styled.div`
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin: 50px 0px 10px;
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
`
const BoxContainer = styled.div`
  box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0px;
    max-width: 500px;
    width: 100%;
`
const H1 = styled.h1`
    text-align: center;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`

export default function ListTripPage() {
  const [trip, setTrip] = useState([])
  const [ListTripsPage, setListTripPage] = useState([])

  useEffect(()=>{
    getTrip()
  }, [])

  const getTrip = () =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alessandra-marmiroli-silveira/trips')
    .then((response) => {
      setListTripPage (response.data.trips)
      console.log (response.data)
    }).catch((error) => {
      console.log(error.response)
    })
  }

  const ListTrips = ListTripsPage && ListTripsPage.map((trip) =>{
  return(
    <div key={trip.id}>
      <p>Nome:{trip.name}</p>
      <p>Descrição:{trip.description}</p>
      <p>Planeta:{trip.planet}</p>
      <p>Duração em dias:{trip.durationInDays}</p>
      <p>Data:{trip.date}</p>
    </div>
  )
  })
  const navigate = useNavigate()

  const goBack = () => {
    navigate (-1)
  }

  const goToApplicationFormPage = () =>{
    navigate ("/ApplicationFormPage")
  }

    return (
      <Body>
        <BoxContainer>
          <Div>
             {ListTrips}
            <H1>Lista De Viagens</H1>
            <Btn>
              <Button onClick={goBack}>Voltar</Button>
              <Button onClick={goToApplicationFormPage}>Inscrever-se</Button>
            </Btn>
          </Div>
        </BoxContainer>
      </Body>
    );
  }