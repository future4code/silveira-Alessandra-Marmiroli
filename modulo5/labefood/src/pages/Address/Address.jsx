import { Button, TextField, Typography } from "@mui/material";
import React from "react";
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
  const navigate = useNavigate();

  const { inputForm, OnChangeInput, clear } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const putAddress = async () => {
    await axios.put(`${BASE_URL}/address`, inputForm, {
          headers: {
          auth: token,
        }
      })
      .then((res) => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        alert ("Endereço cadastrado com sucesso!");
      })
      .catch((erro) => {
        alert("Erro ao cadastrar endereço!");
      });
  };
  console.log(putAddress)

  const onSubmitAddress = (event) => {
    event.preventDefault();
    putAddress(inputForm);
    clear(inputForm);
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
