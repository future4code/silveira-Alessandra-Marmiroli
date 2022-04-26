import React from 'react';
// import axios from 'axios';
import styled from "styled-components";
import HomePage from './pages/HomePage';
import ListTripPage from './pages/ListTripsPage';
import LoginPage from './pages/LoginPage';
import TripDetailsPage from './pages/TripDetailsPage';
import AdminHomePage from './pages/AdminHomePage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import CreateTripPage from './pages/CreateTripPage';

export default function App() {
  // const [tela, setTela] = useState ("Tela Home");

  // const mudarTela = () => {
  //   switch (tela){ 
  //     case "TelaHome": 
  //     return (<HomePage />);
  //     case "ListTripsPage": 
  //     return (<ListTripPage />);
  //     case "LoginPage": 
  //     return (<LoginPage />);
  //     case "TripDetailsPage": 
  //     return (<TripDetailsPage />);
  //     case "AdminHomePage": 
  //     return (<AdminHomePage />);
  //     case "ApplicationFormPage": 
  //     return (<ApplicationFormPage />);
  //     case "CreateTripPage": 
  //     return (<CreateTripPage />);
  //   }
  // }
  return (
    <div>
      <HomePage />
    </div>
  );
}


