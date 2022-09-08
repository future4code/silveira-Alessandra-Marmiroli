import { Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import {
  BoxAddress,
  BoxAddressRestaurant,
  DivAddress,
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
import Header from "../../components/Header/Header";

export default function Cart() {
  const { states, requests } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  const [fullPrice, setFullPrice] = useState(0);
  const [payment, setPayment] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState({
    money: false,
    creditcard: false,
  });
  

  const TotalPrice = () => {
    let total = 0;
    if (states.restaurant && states.restaurant.shipping) {
      for (const product of states.cart) {
        total += product.price * product.quantity;
      }
    }
    setFullPrice(total);
  };

  useEffect(() => {
    requests.getProfile();
    requests.getRestaurants();
    TotalPrice();
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
      <Header title={"Meu carrinho"} padding={"15px"} />
      <BoxAddress>
        <Typography sx={{ color: "black", fontWeight: "bold" }}>
          Endereço Cadastrado
        </Typography>
        <DivAddress>
          <p>
            {states.profile.user && states.profile.user.address}
          </p>
        </DivAddress>
      </BoxAddress>

      <BoxAddressRestaurant>
        <Typography variant="h6" color="primary" sx={{ 
            color: "#FF3B30",
            height: 20,
            fontSize: 16,
            fontWeight: "bold",
            marginRight: "20px",
            marginLeft: "20px",
            marginTop: "15px",
          }}
        >
          {states.restaurant && states.restaurant.name}
        </Typography>
        <DivAddress style={{ color: "#8E8E93" }}>
          <p>{states.restaurant && states.restaurant.address}</p>
          <p>{states.restaurant && states.restaurant.deliveryTime} min</p>
        </DivAddress>
      </BoxAddressRestaurant>
      <div>
        {states.cart.length > 0 ? (
          states.cart.map((rest) => {
            return (
              <CardBigRestaurant
                key={rest.id}
                product={rest}
                restaurant={states.restaurant}
              />
            );
          })
        ) : (
          <p>Carrinho Vazio</p>
        )}
      </div>
      <Frete>
        Frete R$ {states.restaurant.shipping},00
       </Frete>
      <Subtotal>
        <p>SUBTOTAL</p>
        <p>R$ {fullPrice}</p>
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
        <Button onClick={() => ("")}>Confirmar</Button>
      </Form>
      <HomeFooter />
    </ScreenContainer>
  );
}
