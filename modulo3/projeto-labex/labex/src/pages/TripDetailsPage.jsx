import React from 'react';
import styled from "styled-components"
import { useEffect } from 'react';
import axios from 'axios';

export default function TripDetailsPage() {
  useEffect (()=> {
    const token = localStorage.getItem ('token')
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alessandra-marmiroli-silveira/trip/{params.id}`, {
      headers: {
        auth: token
      }
    })
      .then((response)=>{
        console.log (response.data)
      }).catch ((error)=> {
        console.log ('Deu Erro', error.response)
      })
  }, [])
    return (
      <div>
        <h1>Página DetailPage</h1>
      </div>
    );
  }