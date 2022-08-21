import React from "react";
import {
  CardBigStyle,
  CardP,
  Img,
  P,
  Price,
  Restaurant,
  Services,
} from "./styled";

const CardBigRestaurant = (props) => {
  return (
    <CardBigStyle>
      <Img src={props.photoUrl} alt="logo" />
      <CardP>
        <Restaurant>
          <P>{props.name}</P>
        </Restaurant>
        <Services>
          <P>{props.description}</P>
        </Services>
        <Price>
          <P>Preço: R$ {props.price}</P>
        </Price>
      </CardP>
    </CardBigStyle>
  );
};
export default CardBigRestaurant;
