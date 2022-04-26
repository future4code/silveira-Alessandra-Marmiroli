import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ListTripPage() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate (-1)
  }

  const goToApplicationFormPage = () =>{
    navigate ("/ApplicationFormPage")
  }

    return (
      <div>
        <h1>Lista De Viagens</h1>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToApplicationFormPage}>Inscrever-se</button>
      </div>
    );
  }