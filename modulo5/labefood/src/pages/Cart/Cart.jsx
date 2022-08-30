import { Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import {
  BoxAddress,
  Form,
  Frete,
  Line,
  Pay,
  ScreenContainer,
  Subtotal,
  } from "./styled";
import { useNavigate } from "react-router-dom";
import CardBigRestaurant from "../../components/CardBigRestaurant/CardBigRestaurant";
import HomeFooter from "../../components/Footer/HomeFooter";


export default function Cart() {
    const { states, requests } = useContext(GlobalStateContext);
    const navigate = useNavigate();

  const [payment, setPayment] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState({
    money: false,
    creditcard: false,
  });

  useEffect(() => {
    requests.getProfile();
    requests.getRestaurants();
    requests.getRestaurantDetail();
  }, []);

  const onChangePayment = (event) => {
    //função responsável pelo método de pagamento
    const newCheck = { ...paymentMethod };
    newCheck[event.target.name] = event.target.checked;

    const result = Object.keys(newCheck).filter((pay) => {
      if (newCheck[pay]) {
        return [pay, ...payment];
      }
    });
    setPayment(result);
    setPaymentMethod(newCheck);
  };

  return (
    <ScreenContainer>
      <Typography
        sx={{ color: "black", fontWeight: "bold" }}
      >
        Meu Carrinho
      </Typography>
      <BoxAddress>
        <p>Endereço de entrega</p>
        <p>{states.profile.user && states.profile.user.address}</p>
        <p>{states.restaurants[0] && states.restaurants[0].name}</p>
        <p>{states.restaurants[0] && states.restaurants[0].address}</p>
        <p>{states.restaurants[0] && states.restaurants[0].deliveryTime}min</p>
      </BoxAddress>
      <div>
        {states.cardapio.length > 0 ? (
          states.cardapio.map((rest) => {
            return (
              <CardBigRestaurant
                key={rest.id}
                photoUrl={rest.photoUrl}
                name={rest.name}
                description={rest.description}
                price={rest.price}
              />
            );
          })
        ) : (
          <p>Carrinho Vazio</p>
        )}
      </div>
      <Frete>
        Frete {new Intl.NumberFormat("pt-BR", {
          styled: "currency",
          currency: "BRL",
        }).format(6)}
      </Frete>

      <Subtotal>
        <p>SUBTOTAL</p>
        <p> {new Intl.NumberFormat("pt-BR", {
            styled: "currency",
            currency: "BRL",
          }).format(10)}
        </p>
      </Subtotal>
      <Pay>Forma de Pagamento</Pay>
      <Line />
      <br></br>
      <Form>
        {Object.keys(paymentMethod).map((key) => {
          const checked = paymentMethod[key];
          return (
            <div key={key}>
              <input
                checked={checked}
                name={key}
                id={key}
                type={"checkbox"}
                onChange={onChangePayment}
              />
              <label>{key}</label>
            </div>
          );
        })}
        <Button>Confirmar</Button>
      </Form>
      <HomeFooter />
    </ScreenContainer>
  );
}
