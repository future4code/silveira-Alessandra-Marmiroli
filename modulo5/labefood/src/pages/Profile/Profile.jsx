import { IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage"
import {
  BoxAddress,
  ContainerAddress,
  HistoryContainer,
  InputsContainer,
  Line,
  LineHeader,
  Perfil,
  ScreenContainer,
} from "./styled";
import EditIcon from "@mui/icons-material/Edit";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { goToEditProfile } from "../../routes/Coordinator";

export default function Profile() {
  useProtectedPage()//USANDO PROTECTED PARA PAGE COM DADOS SENSÍVEIS 
  const { states, requests } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  // const profileEdit = useRequestData({},`${BASE_URL}/profile}`)

  useEffect(() => {
    //FAZER ENDPOINTS NO GLOBAL DE GET PROFILE E GET ORDER HISTORY E PASSAR AQUI!!!
    //requests.getProfile()
    //requests.getOrderHistory()
  }, []);

  return (
    <ScreenContainer>
      <Typography variant="h6" sx={{ color: "black" }}>
        Meu Perfil
      </Typography>
      <LineHeader />
      <br></br>
      <InputsContainer>
        <Perfil>
          <p>{}</p>
          <p>{}</p>
          <p>{}</p>
        </Perfil>
        <IconButton
          onClick={goToEditProfile(navigate)}
          color="primary"
          sx={{ color: "black", bottom: "25px" }}
        />
        <EditIcon />
      </InputsContainer>

      <BoxAddress>
        <Typography
          variant="h6"
          color="primary"
          sx={{ color: "#8E8E93", height: "20px" }}
        >
          Endereço Cadastrado
        </Typography>

        <ContainerAddress>
          <div>
            <p>{""}</p>
          </div>
          <IconButton onClick={""} sx={{ color: "black", bottom: "25px" }}>
            <EditIcon />
          </IconButton>
        </ContainerAddress>
      </BoxAddress>
      <Typography varivant="h6" sx={{ color: "black"}}>
        Histórico de pedidos:
        <Line />
        <HistoryContainer>
          <h4>Você não realizou nenhum pedido</h4>
        </HistoryContainer>
      </Typography>
    </ScreenContainer>
  );
}
