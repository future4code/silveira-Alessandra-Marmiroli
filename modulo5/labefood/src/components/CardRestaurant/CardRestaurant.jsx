import React from "react";
import { useNavigate } from "react-router-dom";
import { CardP, P } from "./styled";

const CardRestaurant = (props) => {
  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/detailRestaurant/${id}`);
  };

  return (
    <CardStyleRestaurant onClick={() => goToDetail(props.id)}>
      <img src={props.logoUrl} alt="logo" />
      <CardP>
        <P>{props.name}</P>
        <P>{props.deliveryTime} min</P>
        <P> Frete: R${props.shipping}</P>
      </CardP>
    </CardStyleRestaurant>
  );
};
export default CardRestaurant;
