import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './styled';
import { useNavigate } from 'react-router-dom';
import { goToLogin } from '../../routes/coordinator';


const Header = ({buttonHeader, setButtonHeader}) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const logout = () =>{
    localStorage.removeItem("token")
  }
  const buttonAction = () =>{
    if (token){
      logout()
      setButtonHeader("Login")
      goToLogin(navigate)
    } else {
      goToLogin(navigate)
    }
  }

 
  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button color="primary" variant="contained">
            LabeEddit
          </Button>
          <Button onClick={buttonAction} color="inherit">{buttonHeader}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header