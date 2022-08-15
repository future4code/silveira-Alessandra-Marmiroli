import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { goToRestaurant } from "../../routes/Coordinator";
import { InputsContainer, ScreenContainer } from "./styled";
import { addAddress } from "../../context/GlobalState";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const Address = () => {
  const token = window.localStorage.getItem("token");

  const header = {
    headers: {
      auth: token,
    },
  };

  const navigate = useNavigate();

  const [address, setAddress] = useState({});

  const { inputForm, OnChangeInput, clear } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const getAddress = async (setInputForm) => {
    await axios
      .get(`${BASE_URL}/profile/address`, header)
      .then((res) => {
        setAddress(res.data);
        setInputForm({
          neighbouhood: res.data.address.neighbouhood,
          number: res.data.address.number,
          city: res.data.address.city,
          apartament: res.data.address.apartament,
          state: res.data.address.state,
          street: res.data.address.street,
        });
      })
      .catch((erro) => {
        alert("Crie seu cadastro com o endereço para navegar!");
      });
  };

  const onSubmitAddress = (event) => {
    event.preventDefault();
    getAddress(inputForm);
    clear();
    goToRestaurant(navigate);
  };
  return (
    <ScreenContainer>
      <Typography sx={{ color: "black", fontWeight: "bold" }}>
        Endereço
      </Typography>
      <InputsContainer>
        <form onSubmit={onSubmitAddress}>
          <TextField
            name="street"
            value={inputForm.street}
            onChange={OnChangeInput}
            placeholder="Rua / Av."
            label={"Logradouro"}
            // color={"primary"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
            type="text"
          />
          <TextField
            name="number"
            value={inputForm.number}
            onChange={OnChangeInput}
            placeholder="Número"
            label={"Número"}
            // color={"primary"}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"dense"}
            required
            type="number"
          />
          <TextField
            name="complement"
            value={inputForm.complement}
            onChange={OnChangeInput}
            placeholder="Complemento"
            label={"Complemento"}
            // color={"primary"}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"dense"}
            required
            type={"text"}
          />
          <TextField
            name="neighbourhood"
            value={inputForm.neighbourhood}
            onChange={OnChangeInput}
            placeholder="Bairro"
            label={"Bairro"}
            // color={"primary"}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"dense"}
            required
            type={"text"}
          />
          <TextField
            name="city"
            value={inputForm.city}
            onChange={OnChangeInput}
            placeholder="Cidade"
            label={"Cidade"}
            // color={"primary"}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"dense"}
            required
            type={"text"}
          />
          <TextField
            name="state"
            value={inputForm.city}
            onChange={OnChangeInput}
            placeholder="Estado"
            label={"Estado"}
            // color={"primary"}
            variant={"outlined"}
            color={"primary"}
            fullWidth
            margin={"dense"}
            required
            type={"text"}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color={"primary"}
            sx={{ "margin-top": "10px" }}
          >
            Salvar Endereço
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
};
export default Address;
