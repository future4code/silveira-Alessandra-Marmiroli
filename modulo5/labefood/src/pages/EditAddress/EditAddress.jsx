import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { InputsContainer, ScreenContainer } from "./styled";
import { goToProfile, goToRestaurant } from "../../routes/Coordinator"
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";

export default function EditAddress() {
  useProtectedPage()
  const { requests } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  
  const token = window.localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };


//NO USEFECCT QUANDO MUDA ELE DE LUGAR APARECEM AS INFORMAÇÕES SALVO NO STATE MAS AO ATUALIZAR A PAGINA PERDE-SE OS DADOS
  const { inputForm, OnChangeInput, clear, setInputForm } = useForm({
    neighbourhood: "",
    number: "",
    city: "",
    complement: "",
    state: "",
    street: "",
  });

  const getAllAddress = () => {
    axios
      .get(`${BASE_URL}/profile/address`, headers)
      .then((res) => {
        // console.log("getAllAddress", res.data);
        setInputForm({
          neighbourhood: res.data.address.neighbourhood, 
          number: res.data.address.number, 
          city: res.data.address.city, 
          complement: res.data.address.complement, 
          state: res.data.address.state, 
          street: res.data.address.street});
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    getAllAddress();
  }, []);

    const onSubmitEditAddress = (event) => {
    event.preventDefault();
    requests.editAddress(inputForm);//Passar como parâmetro o estado que recebe a mudança!
    clear();
    goToProfile()
  };
  //Dentro do submit precisa passar rota para navegar

  return (
    <ScreenContainer>
      <Typography variant="h6" sx={{ color: "black" }}>
       Editar meu endereço:
      </Typography>
      <InputsContainer>
      <form onSubmit={onSubmitEditAddress}>
        <TextField
         name="street"
         value={inputForm.street}
         onChange={OnChangeInput}
         placeholder="Rua / Av."
         // color={"primary"}
         variant={"outlined"}
         fullWidth
         margin={"dense"}
         type="text"
        />
        <TextField
            name="number"
            value={inputForm.number}
            onChange={OnChangeInput}
            placeholder="Número"
            // color={"primary"}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"dense"}
            type="number"
          />
          <TextField
            name="complement"
            value={inputForm.complement}
            onChange={OnChangeInput}
            placeholder="Complemento"
            // color={"primary"}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"dense"}
            type={"text"}
          />
          <TextField
            name="neighbourhood"
            value={inputForm.neighbourhood}
            onChange={OnChangeInput}
            placeholder="Bairro"
            // color={"primary"}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"dense"}
            type={"text"}
          />
          <TextField
            name="city"
            value={inputForm.city}
            onChange={OnChangeInput}
            placeholder="Cidade"
            // color={"primary"}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"dense"}
            type={"text"}
          />
          <TextField
            name="state"
            value={inputForm.state}
            onChange={OnChangeInput}
            placeholder="Estado"
            // color={"primary"}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"dense"}
            type={"text"}
            />
             <Button type="submit" variant='contained'fullWidth color={"primary"}>
              Salvar
            </Button>
      </form>
      </InputsContainer>
    </ScreenContainer>
  );
}
