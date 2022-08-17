import React from "react";
import { useNavigate } from "react-router-dom";
import { CardP, CardStyleRestaurant, Img, P, Restaurant, Services, } from "./styled";

const CardRestaurant = (props) => {
  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/detailRestaurant/${id}`);
  };

  return (
    <CardStyleRestaurant onClick={() => goToDetail(props.id)}>
      <Img src={props.logoUrl} alt="logo" />
      <CardP>
        <Restaurant>
          <P>{props.name}</P>
        </Restaurant>
        <Services>
        <P>{props.deliveryTime} min </P>
        <P> Frete: R${props.shipping}</P>
        </Services>
      </CardP>
    </CardStyleRestaurant>
  );
};
export default CardRestaurant;
