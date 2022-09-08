import styled from "styled-components";
import { TextField } from "@mui/material";
import { Button } from '@mui/material';

export const InputMaterial = styled(TextField)`
  width: 100%;
 `;

export const ScreenContainer = styled.div`
  width: auto;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const LogoImage = styled.img`
margin: 8px;
width: 12vw;
padding: 12px;
`;

export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 400px;
align-items: center;
background-color: yellow;
`;

export const P = styled.p`
color: #FF3B30;
`;

export const DivPassword = styled.div`
  width: 100%;
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  /* background-color: red; */
  float: left;
 
`
export const ButtonAddress = styled(Button)`
&&{
    background-color: transparent;
    color: black;
    width:100%;
    font-size: larger;
    font-family: 'Roboto', cursive;
    :hover{
        background-color: #DCDCDC;
        color:black
    }
}
`
