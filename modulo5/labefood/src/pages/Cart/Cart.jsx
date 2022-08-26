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
  SubValor,
} from "./styled";
import { useNavigate } from "react-router-dom";
import CardBigRestaurant from "../../components/CardBigRestaurant/CardBigRestaurant"
import HomeFooter from "../../components/Footer/HomeFooter";
import useProtectedPage from "../../hooks/useProtectedPage";

export default function Cart() {
  const navigate = useNavigate();
//   useProtectedPage(navigate)
  const { states, setters, values, requests } = useContext(GlobalStateContext);

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

  return (
    <ScreenContainer>
      <Typography
        sx={{ color: "black", marginTop: "15px", fontWeight: "bold" }}
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
          <div></div>
        )}
      </div>

      <Frete>Frete: R$ 0,00 </Frete>
      <Subtotal>
        SUBTOTAL
        {/* <SubValor> R$ {subtotal.toFixed(2)}</SubValor> */}
      </Subtotal>
      <Pay>Forma de Pagamento</Pay>
      <Line />
      <br></br>
      <Form>
        <form action="/action_page.php" onChange={""}>
          <input type="radio" id="din" name="pagamento" value="money" />
          <label for="din">Dinheiro</label>
          <br></br>
          <input type="radio" id="css" name="pagamento" value="creditcard" />
          <label for="cartao">Cartão de Crédito</label>
          <Button>Confirmar</Button>
        </form>
      </Form>
      <HomeFooter/>
    </ScreenContainer>
  );
}
