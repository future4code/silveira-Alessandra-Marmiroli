import React from 'react';
import styled from "styled-components"
import { useEffect } from 'react';
import axios from 'axios';

export default function TripDetailsPage() {
  useEffect (()=> {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/alessandra-marmiroli-silveira/trip/8bblvTc9IRXqMb5YELPQ",{
      headers: {
        auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs'
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