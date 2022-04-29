import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

export default function ListTripPage() {
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
      <div>
         {ListTrips}
        <h1>Lista De Viagens</h1>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToApplicationFormPage}>Inscrever-se</button>
      </div>
    );
  }