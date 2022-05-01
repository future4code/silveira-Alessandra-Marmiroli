import React from 'react';
import styled from "styled-components"
import { useProtectedPage } from "./hooks/useProtectedPage";
import { useEffect, useState } from "react";
import axios from 'axios'; 
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function TripDetailsPage() {
  const [trip, setTrip] = ([])
  const [candidate, setCandidate] =useState([])

  const navigate = useNavigate()

  const params = useParams

  const goBack = () =>{
    navigate(-1)
  }

  useEffect (()=> {
    const token = localStorage.getItem ('token')
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alessandra-marmiroli-silveira/trip/${params.id}`, {
      headers: {
        auth: token
      }
    })
      .then((response)=>{
        console.log ("candidatos", response.data.trip)
        setTrip (response.data.trip)
        setCandidate(response.data.trip.candidate)
      }).catch ((error)=> {
        console.log ('Deu Erro', error.response)
      })
  }, [])

  const candidateAprove = (idCandidate, aceite) =>{
    const token = localStorage.getItem('token')
    const body = { approve:aceite }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alessandra-marmiroli-silveira/trips/${params.id}/${idCandidate}/decide`,body,{
      headers: { auth: token }
    })
    .then((response)=>{
      console.log("Aceito com sucesso", response.data)
      setCandidate(response.data.trip.candidates)
    })
    .catch((error)=>{
      console.log('Erro!', error.response)
    });
  };

  const listCandidate = candidate.map((candidate)=>{
    return(
      <div>
        <p>{candidate.name}</p>
        <p>{candidate.profession}</p>
        <p>{candidate.age}</p>
        <p>{candidate.country}</p>
        <p>{candidate.applicationText}</p>
        <button onClick={()=>{candidateAprove(candidate.id, true)}}>Aprovar</button>
        <button onClick={()=>{candidateAprove(candidate.id, true)}}>Reprovar</button>
      </div>
    );
  })

    return (
      <div>
        <h1>Trips Details</h1>
        <div>
        <p>{trip.name}</p>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.date}</p>
      </div>

      <button onClick={goBack}>Voltar</button>
      <h2>Candidatos Pendentes</h2>
      <div>{listCandidate}</div>
      </div>
    );
  }