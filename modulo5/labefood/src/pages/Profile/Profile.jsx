import { IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header/Header";
import {
  Adrress,
  BoxAddress,
  BoxHistory,
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
import { goToEditAddress, goToEditProfile } from "../../routes/Coordinator";
import HomeFooter from "../../components/Footer/HomeFooter";

export default function Profile() {
  useProtectedPage(); //USANDO PROTECTED PARA PAGE COM DADOS SENSÍVEIS
  const { states, requests } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  // const profileEdit = useRequestData({},`${BASE_URL}/profile}`)

  useEffect(() => {
    requests.getProfile();
    //requests.getOrderHistory()
  }, []);

  return (
    <ScreenContainer>
      <Header title={"Meu perfil"} padding={"15px"} />
      <InputsContainer>
        <Perfil>
          <p style={{ textTransform: "capitalize" }}>
            {states.profile.user && states.profile.user.name}
          </p>
          <p>{states.profile.user && states.profile.user.email}</p>
          <p>{states.profile.user && states.profile.user.cpf}</p>
        </Perfil>
        <IconButton
          onClick={() => goToEditProfile(navigate)}
          color="primary"
          sx={{ color: "black", bottom: "25px" }}
        >
        <EditIcon sx={{ margin: "20px" }} />
        </IconButton>
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
          <Adrress>
            <p style={{ textTransform: "capitalize", margin: 0 }}>
              {states.profile.user && states.profile.user.address}
            </p>
          </Adrress>

          <IconButton
            onClick={() => goToEditAddress(navigate)}
            sx={{ color: "black", bottom: "25px" }}
          >
            <EditIcon sx={{margin:'20px' }}/>
          </IconButton>
        </ContainerAddress>
      </BoxAddress>
      <BoxHistory>
      <Typography varivant="h6" sx={{ color: "black" }}>
        Histórico de pedidos:
        </Typography>
        
        <HistoryContainer>
          <p style={{ display: "flex", justifyContent: "center" }}>
            Você não realizou nenhum pedido
          </p>
        </HistoryContainer>
     </BoxHistory>
      <HomeFooter />
    </ScreenContainer>
  );
}
