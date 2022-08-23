import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { InputsContainer, ScreenContainer } from "./styled";
import { goToRestaurant } from "../../routes/Coordinator"

export default function EditAddress() {
  const { states, requests } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem('token') !== null ? requests.getAllAddress() : goToRestaurant(navigate)
  }, []);
//NO USEFECCT QUANDO MUDA ELE DE LUGAR APARECEM AS INFORMAÇÕES SALVO NO STATE MAS AO ATUALIZAR A PAGINA PERDE-SE OS DADOS
  const { inputForm, OnChangeInput, clear} = useForm({
    neighbourhood: states.address.neighbourhood,
    number: states.address.number,
    city: states.address.city,
    apartament: states.address.complement,
    state: states.address.state,
    street: states.address.street,
  });

    const onSubmitEditAddress = (event) => {
    event.preventDefault();
    requests.editAddress(inputForm)
    clear();
    //navigate 
  };
  //Dentro do submit precisa passar rota para navegar e função que seta o estado

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
