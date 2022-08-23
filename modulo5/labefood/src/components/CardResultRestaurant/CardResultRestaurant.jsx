import React from "react";
import {
  Address,
  CardP,
  CardStyleDetail,
  Category,
  Img,
  P,
  Restaurant,
  Services,
} from "./styled";

const CardResultRestaurant = (props) => {
  //ESTE É O CARD GRANDE DO INÍCIO DA PAGE DETAIL
  return (
    <CardStyleDetail>
      <Img src={props.logoUrl} alt="logo" />
      <CardP>
        <Restaurant>
          <p>{props.name}</p>
        </Restaurant>
        <Category>{props.category}</Category>
        <Services>
          <p>Tempo de Entrega: {props.deliveryTime} min</p>
          <p>Frete: R$ {props.shipping},00</p>
        </Services>
        <Address>
          <P>{props.address}</P>
        </Address>
      </CardP>
    </CardStyleDetail>
  );
};
export default CardResultRestaurant;

//Este Card será o grande Inicial
